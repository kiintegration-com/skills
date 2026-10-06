#!/usr/bin/env node
// Prüft das Repo, ohne Abhängigkeiten (Node 18 oder neuer).
//
//   node scripts/validate.mjs            Skills und Links innerhalb des Repos
//   node scripts/validate.mjs --extern   zusätzlich jeden Link nach außen (http/https)
//
// Je Skill unter skills/<name>/SKILL.md:
//   - Kopf zwischen --- und --- mit name und description
//   - name in kebab-case, höchstens 64 Zeichen, gleich dem Ordnernamen
//   - description vorhanden, höchstens 1024 Zeichen, ohne < und >, mit Auslöser („Verwenden …")
//   - nur Felder, die Claude für Skills annimmt
//   - Pflichtabschnitte in fester Reihenfolge, höchstens 500 Zeilen
// Für jede Markdown-Datei: Relative Links und Bilder zeigen auf vorhandene Dateien.
// Außerdem: .claude-plugin/*.json ist gültiges JSON.
//
// Endet mit 1, sobald etwas nicht stimmt, und nennt Datei und Grund.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const wurzel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const extern = process.argv.includes('--extern');
const fehler = [];
const melde = (datei, grund) => fehler.push(`${path.relative(wurzel, datei)}: ${grund}`);

const ERLAUBT = new Set(['name', 'description', 'license', 'allowed-tools', 'metadata', 'compatibility']);
const ABSCHNITTE = ['Betriebsangaben', 'Vorgehen', 'Ausgabe', 'Prüfung vor der Ausgabe', 'Grenzen', 'Beispiel'];

/** Liest den Kopf: Schlüssel: Wert und eine Ebene darunter (metadata). */
function kopfLesen(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return null;
  const kopf = {};
  let unter = null;
  for (const zeile of m[1].split(/\r?\n/)) {
    if (!zeile.trim()) continue;
    const k = zeile.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    const u = zeile.match(/^\s+([A-Za-z0-9_-]+):\s*(.*)$/);
    if (k) {
      kopf[k[1]] = k[2] === '' ? {} : k[2].replace(/^(["'])(.*)\1$/, '$2');
      unter = k[2] === '' ? k[1] : null;
    } else if (u && unter) {
      kopf[unter][u[1]] = u[2].replace(/^(["'])(.*)\1$/, '$2');
    } else {
      return { kopf, rumpf: m[2], unlesbar: zeile };
    }
  }
  return { kopf, rumpf: m[2] };
}

function pruefeSkill(ordner) {
  const name = path.basename(ordner);
  const datei = path.join(ordner, 'SKILL.md');
  if (!fs.existsSync(datei)) return melde(ordner, 'SKILL.md fehlt');
  const text = fs.readFileSync(datei, 'utf8');
  const g = kopfLesen(text);
  if (!g) return melde(datei, 'kein Kopf zwischen --- und ---');
  if (g.unlesbar) melde(datei, `Kopfzeile nicht lesbar: ${g.unlesbar}`);
  const { kopf, rumpf } = g;
  for (const k of Object.keys(kopf)) if (!ERLAUBT.has(k)) melde(datei, `Feld „${k}" im Kopf ist nicht erlaubt`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(kopf.name ?? '')) melde(datei, 'name fehlt oder ist nicht kebab-case');
  if ((kopf.name ?? '').length > 64) melde(datei, 'name länger als 64 Zeichen');
  if (kopf.name !== name) melde(datei, `name „${kopf.name}" weicht vom Ordnernamen „${name}" ab`);
  const d = typeof kopf.description === 'string' ? kopf.description.trim() : '';
  if (!d) melde(datei, 'description fehlt');
  if (d.length > 1024) melde(datei, `description hat ${d.length} Zeichen, erlaubt sind 1024`);
  if (/[<>]/.test(d)) melde(datei, 'description enthält < oder >');
  if (d && !/Verwenden\b/.test(d)) melde(datei, 'description sagt nicht, wann der Skill gilt („Verwenden, wenn …")');
  let vorher = -1;
  for (const a of ABSCHNITTE) {
    const i = rumpf.search(new RegExp(`^## ${a}\\s*$`, 'm'));
    if (i < 0) melde(datei, `Abschnitt „## ${a}" fehlt`);
    else if (i < vorher) melde(datei, `Abschnitt „## ${a}" steht an falscher Stelle`);
    else vorher = i;
  }
  if (text.split('\n').length > 500) melde(datei, 'länger als 500 Zeilen; Details nach references/ auslagern');
}

function markdownDateien(ordner) {
  const aus = [];
  for (const e of fs.readdirSync(ordner, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules' || e.name === 'dist') continue;
    const p = path.join(ordner, e.name);
    if (e.isDirectory()) aus.push(...markdownDateien(p));
    else if (e.name.endsWith('.md')) aus.push(p);
  }
  return aus;
}

const externeLinks = new Map();

function pruefeLinks(datei) {
  // Codeblöcke enthalten Beispiele, keine Links.
  const text = fs.readFileSync(datei, 'utf8').replace(/```[\s\S]*?```/g, '');
  const ziele = [
    ...[...text.matchAll(/\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g)].map((m) => m[1]),
    ...[...text.matchAll(/<(?:img|source)[^>]+(?:src|srcset)="([^"]+)"/g)].map((m) => m[1]),
    ...[...text.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]),
    ...[...text.matchAll(/^\[[^\]]+\]:\s*<?(\S+?)>?\s*$/gm)].map((m) => m[1]),
  ];
  for (const ziel of ziele) {
    if (/^mailto:/.test(ziel) || ziel.startsWith('#')) continue;
    if (/^https?:\/\//.test(ziel)) {
      if (!externeLinks.has(ziel)) externeLinks.set(ziel, datei);
      continue;
    }
    const pfad = decodeURIComponent(ziel.split('#')[0].split('?')[0]);
    if (!fs.existsSync(path.resolve(path.dirname(datei), pfad))) melde(datei, `Link ins Leere: ${ziel}`);
  }
}

async function pruefeExtern() {
  const liste = [...externeLinks.entries()];
  await Promise.all(liste.map(async ([url, datei]) => {
    // Badges und Abzeichen erzeugt der Dienst bei jedem Abruf; ein Fehler dort sagt nichts über den Link.
    if (url.startsWith('https://img.shields.io/')) return;
    try {
      let r = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (r.status === 405 || r.status === 403) r = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (r.status >= 400 && r.status !== 429) melde(datei, `${url} antwortet ${r.status}`);
    } catch (e) {
      melde(datei, `${url} nicht erreichbar (${e.cause?.code ?? e.name})`);
    }
  }));
}

const skillsOrdner = path.join(wurzel, 'skills');
const skills = fs.readdirSync(skillsOrdner, { withFileTypes: true }).filter((e) => e.isDirectory());
if (skills.length === 0) melde(skillsOrdner, 'keine Skills gefunden');
for (const e of skills) pruefeSkill(path.join(skillsOrdner, e.name));

for (const f of markdownDateien(wurzel)) pruefeLinks(f);

const plugin = path.join(wurzel, '.claude-plugin');
if (fs.existsSync(plugin)) {
  for (const f of fs.readdirSync(plugin).filter((n) => n.endsWith('.json'))) {
    try { JSON.parse(fs.readFileSync(path.join(plugin, f), 'utf8')); } catch (e) { melde(path.join(plugin, f), `kein gültiges JSON: ${e.message}`); }
  }
}

if (extern) await pruefeExtern();

if (fehler.length) {
  console.error(fehler.map((f) => `✗ ${f}`).join('\n'));
  console.error(`\n${fehler.length} Fehler.`);
  process.exit(1);
}
console.log(`✓ ${skills.length} Skills geprüft, Links in Ordnung${extern ? ` (${externeLinks.size} externe geprüft)` : ''}.`);
