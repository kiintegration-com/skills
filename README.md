<p align="center">
  <a href="https://kiintegration.com/?utm_source=github&utm_medium=referral&utm_campaign=skills">
    <img src="assets/og.png" alt="kiintegration.com, das Register für KI-Umsetzer in Deutschland, Österreich und der Schweiz" width="100%">
  </a>
</p>

<h1 align="center">Skills für KMU</h1>

<p align="center">
  20 fertige Skills für Claude, ChatGPT, Gemini und Copilot, geschrieben für Betriebe in Deutschland, Österreich und der Schweiz.<br>
  Angebote kalkulieren, Rechnungen prüfen, mahnen, Fristen finden, Ausschreibungen lesen, DSGVO und KI-Verordnung einordnen.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/Lizenz-CC%20BY%204.0-1f2328?style=flat-square" alt="Lizenz: CC BY 4.0"></a>
  <a href="#alle-skills"><img src="https://img.shields.io/badge/Skills-20-5a6bee?style=flat-square" alt="Anzahl Skills"></a>
  <a href="https://agentskills.io"><img src="https://img.shields.io/badge/Format-Agent%20Skills-2e9ae6?style=flat-square" alt="Format: Agent Skills"></a>
  <img src="https://img.shields.io/badge/Sprache-Deutsch-1f2328?style=flat-square" alt="Sprache: Deutsch">
  <img src="https://img.shields.io/badge/DACH-DE%20%C2%B7%20AT%20%C2%B7%20CH-1f2328?style=flat-square" alt="Für Deutschland, Österreich und die Schweiz">
  <a href="https://github.com/kiintegration-com/skills/actions/workflows/validate.yml"><img src="https://github.com/kiintegration-com/skills/actions/workflows/validate.yml/badge.svg" alt="Prüfung"></a>
</p>

---

Wer dieselbe Regel jede Woche neu in den Chat tippt, das Kalkulationsschema, die Mahnstufen, den Hausstil, verliert Zeit und bekommt jedes Mal ein etwas anderes Ergebnis. Ein Skill hält die Regel einmal fest. Jeder Skill hier ist eine Datei `SKILL.md` mit festem Ausgabeformat, Prüfschritt, Beispiel und offen benannten Grenzen. Was nur Ihr Betrieb weiß, etwa Stundensatz, Zuständige oder Toleranzen, fragt er beim ersten Einsatz ab, statt es zu raten.

## Inhalt

- [Alle Skills](#alle-skills)
- [Installation](#installation)
- [So ist ein Skill aufgebaut](#so-ist-ein-skill-aufgebaut)
- [Beispiel](#beispiel)
- [Grenzen und Datenschutz](#grenzen-und-datenschutz)
- [Über kiintegration.com](#über-kiintegrationcom)
- [Mitmachen](#mitmachen)
- [Lizenz](#lizenz)

## Alle Skills

<!-- skills:start -->
### Angebot und Verkauf

| Skill | Wofür | Löst ab |
|---|---|---|
| [Kalkulationsschema](skills/kalkulationsschema/SKILL.md) | Rechnet Angebotspositionen nach festen Zuschlägen und prüft jede Summe ein zweites Mal. | Kalkulationsvorlage in Excel, die niemand mehr pflegt |
| [Aufwandsschätzung](skills/aufwandsschaetzung/SKILL.md) | Schätzt je Arbeitspaket drei Werte und begründet, was den ungünstigen Fall auslöst. | Bauchgefühl, das erst in der Nachkalkulation auffällt |
| [Nachfassen](skills/nachfassen/SKILL.md) | Schreibt die zweite und dritte Nachricht zu offenen Angeboten, jede mit neuem Anlass. | Vertriebs-Abo für drei Vorlagen |
| [Ausschreibung prüfen](skills/ausschreibung-pruefen/SKILL.md) | Zerlegt eine Ausschreibung in Ausschlusskriterien, Fristen und Positionen und schlägt Bieterfragen vor. | Durchlesen am Abend, mit dem Risiko, ein K.-o.-Kriterium zu übersehen |

### Einkauf und Buchhaltung

| Skill | Wofür | Löst ab |
|---|---|---|
| [Rechnungsprüfung](skills/rechnungspruefung/SKILL.md) | Prüft Eingangsrechnungen gegen Bestellung und Lieferschein, Pflichtangaben und Bankverbindung. | Sichtprüfung, die bei Zeitdruck ausfällt |
| [Zahlungserinnerung](skills/zahlungserinnerung/SKILL.md) | Schreibt Erinnerung und Mahnungen in drei Stufen und rechnet Verzugszinsen nach. | Mahnwesen-Modul, das nur dafür gebucht wird |
| [Angebotsvergleich](skills/angebotsvergleich/SKILL.md) | Stellt fremde Angebote auf eine Tabelle und rechnet die Gesamtkosten über einen festen Zeitraum. | Vergleichstabelle, die jedes Mal neu gebaut wird |

### Kommunikation und Organisation

| Skill | Wofür | Löst ab |
|---|---|---|
| [Hausstil](skills/hausstil/SKILL.md) | Anrede, Tonfall, Schreibweisen, verbotene Wörter und Signatur als feste Regel. | Styleguide im Ordner, den neue Mitarbeiter nie lesen |
| [Anfragen sortieren](skills/anfragen-sortieren/SKILL.md) | Sortiert den Posteingang nach Kategorie und Dringlichkeit und eskaliert nach festen Regeln. | Regelwerk im Ticketsystem, für das die Lizenzstufe fehlt |
| [Protokoll zu Aufgaben](skills/protokoll-zu-aufgaben/SKILL.md) | Macht aus Besprechungsnotizen Beschlüsse und Aufgaben mit Verantwortlichen und Datum. | Aufgabenverwaltung, in die niemand nachträgt |
| [Fristenwächter](skills/fristenwaechter/SKILL.md) | Findet Fristen und Termine im Text und rechnet sie mit Rechenweg in ein Datum um. | Wiedervorlage-Zettel und Kalendereinträge von Hand |

### Daten und Wissen

| Skill | Wofür | Löst ab |
|---|---|---|
| [Tabelle säubern](skills/tabelle-saeubern/SKILL.md) | Findet Dubletten, gemischte Formate und verlorene Nullen, bevor ausgewertet wird. | zwei Stunden Handarbeit pro Auswertung |
| [Kennzahlen-Bericht](skills/kennzahlen-bericht/SKILL.md) | Rechnet Kennzahlen nach festen Formeln und schreibt den Monatsbericht mit Rechenweg. | BI-Werkzeug, das nur wegen der Definitionen angeschafft wurde |
| [Antworten aus Unterlagen](skills/antworten-aus-unterlagen/SKILL.md) | Antwortet nur aus den vorgelegten Dokumenten, mit Zitat und Fundstelle, oder sagt, dass nichts drinsteht. | Wiki-Suche, die zehn Treffer und keine Antwort liefert |

### Datenschutz und KI-Verordnung

| Skill | Wofür | Löst ab |
|---|---|---|
| [DSGVO-Vorprüfung](skills/dsgvo-vorpruefung/SKILL.md) | Findet personenbezogene Daten im Material und listet, was vor dem Einsatz zu klären ist. | die Frage „darf ich das hier einfügen", die sonst niemand stellt |
| [Pseudonymisieren](skills/pseudonymisieren/SKILL.md) | Ersetzt Namen, Anschriften und Nummern durch Platzhalter und liefert die Zuordnung getrennt. | händisches Schwärzen, das die dritte Nennung übersieht |
| [KI-VO-Einordnung](skills/ki-vo-einordnung/SKILL.md) | Ordnet einen KI-Einsatz nach der KI-Verordnung ein und nennt die Pflichten mit Artikel. | Rätselraten, ob ein Chatbot gekennzeichnet werden muss |

### Eigene Werkzeuge bauen

| Skill | Wofür | Löst ab |
|---|---|---|
| [Spec vor Code](skills/spec-vor-code/SKILL.md) | Verlangt eine Seite Spezifikation mit Erfolgskriterium, bevor eine Zeile Code entsteht. | drei Anläufe, bis klar ist, was das Werkzeug tun soll |
| [Sicherheits-Kurzprüfung](skills/sicherheits-kurzpruefung/SKILL.md) | Prüft erzeugten Code auf Zugriff, Eingaben, Geheimnisse und Datenverlust, je Fund mit Fix. | die Annahme, dass ein funktionierender Prototyp betriebstauglich ist |
| [Übergabe-Dokumentation](skills/uebergabe-doku/SKILL.md) | Schreibt zu erzeugtem Code auf, was er tut, wie er startet und wo er kaputtgeht. | die Rückfrage in einem Jahr, die niemand mehr beantworten kann |
<!-- skills:end -->

## Installation

### Claude Code: als Plugin

```text
/plugin marketplace add kiintegration-com/skills
/plugin install kmu-skills@kiintegration
```

Claude lädt danach von selbst den passenden Skill, sobald eine Aufgabe dazu passt, etwa wenn Sie eine Rechnung zur Prüfung einfügen.

### Claude Code: einzelne Skills

```bash
git clone https://github.com/kiintegration-com/skills.git kiintegration-skills
cp -r kiintegration-skills/skills/rechnungspruefung ~/.claude/skills/
```

Nur für ein Projekt statt für alle: nach `.claude/skills/` im Projektordner kopieren.

### Claude.ai und Claude Desktop

1. Den Ordner eines Skills als ZIP packen, zum Beispiel `rechnungspruefung.zip` mit dem Ordner `rechnungspruefung/` darin. Fertige ZIPs je Skill hängen an jedem [Release](https://github.com/kiintegration-com/skills/releases).
2. In den Einstellungen unter Skills hochladen. Voraussetzung ist die eingeschaltete Codeausführung; in Team- und Enterprise-Tarifen gibt die Verwaltung Skills frei.

### Claude API

Skills lassen sich über die Skills-API hochladen und in Anfragen einbinden: [Agent Skills in der Claude-Dokumentation](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview).

### ChatGPT, Gemini, Microsoft 365 Copilot

Der Inhalt einer `SKILL.md` ist gewöhnlicher Text und wirkt dort als dauerhafte Anweisung: in einem ChatGPT-Projekt oder eigenen GPT, in einem Gem, in einem Copilot-Agent. Die Schritte stehen in [docs/andere-werkzeuge.md](docs/andere-werkzeuge.md).

## So ist ein Skill aufgebaut

```text
skills/rechnungspruefung/
└── SKILL.md
```

```markdown
---
name: rechnungspruefung
description: Prüft Eingangsrechnungen gegen Bestellung und Lieferschein … Verwenden, wenn …
license: CC-BY-4.0
---

# Rechnungsprüfung

## Betriebsangaben            was nur Ihr Betrieb weiß, in [eckigen Klammern]
## Eingaben                   was der Skill braucht
## Vorgehen                   die Schritte in fester Reihenfolge
## Ausgabe                    das Format, jedes Mal gleich
## Prüfung vor der Ausgabe    woran das Modell selbst einen Fehler erkennt
## Grenzen                    was der Skill nicht tut
## Beispiel                   ein Fall mit Ein- und Ausgabe
```

Der Kopf (`name`, `description`) sagt Claude, wann der Skill gilt; den Rest lädt Claude erst, wenn er gebraucht wird. Die anderen Werkzeuge lesen den Kopf als gewöhnlichen Text mit.

**Anpassen:** Tragen Sie unter „Betriebsangaben" Ihre Werte ein. Testen Sie danach mit drei alten Fällen, deren richtiges Ergebnis Sie kennen. Weicht eines ab, schärfen Sie die Regel, nicht den Fall.

## Beispiel

Eine Eingangsrechnung, geprüft mit [`rechnungspruefung`](skills/rechnungspruefung/SKILL.md):

> **Eingabe:** Rechnung Nr. 2026-0419 der Elektro Sommer GmbH, 1.428,00 EUR brutto, dazu der Lieferschein.

> **Ausgabe:** Klären.
>
> | Prüfpunkt | Ergebnis | Fundstelle oder Differenz |
> |---|---|---|
> | Bankverbindung | weicht ab | Rechnung DE12 …4471, bekannt DE89 …2203. Vor Zahlung telefonisch bestätigen. |
> | Menge Pos. 3 | weicht ab | berechnet 40 m Kabel, geliefert 25 m, Differenz 26,25 EUR netto |
> | Summen und Steuer | stimmen | 1.200,00 + 19 % = 1.428,00 |
> | Pflichtangaben | vollständig | |
>
> Fällig am 30.10.2026, 2 % Skonto bis 16.10.2026 (nach Klärung neu rechnen).

## Grenzen und Datenschutz

- **Ein Skill ist eine Anweisung, keine Sperre.** In langen Chats übersieht ein Modell auch feste Regeln. Was nach außen geht, prüft ein Mensch.
- **Keine Rechts- oder Steuerberatung.** Die Skills zu Rechnung, Mahnung, Fristen, DSGVO und KI-Verordnung nennen die Vorschrift und markieren Grenzfälle mit `[PRÜFEN]`. Entscheiden müssen Sie, im Zweifel mit Ihrer Steuerberatung oder einer Fachkanzlei.
- **Personenbezogene Daten** gehören nur in ein Werkzeug, mit dessen Anbieter ein Vertrag zur Auftragsverarbeitung besteht. [`dsgvo-vorpruefung`](skills/dsgvo-vorpruefung/SKILL.md) klärt das vor dem Einsatz, [`pseudonymisieren`](skills/pseudonymisieren/SKILL.md) ersetzt Namen durch Platzhalter.
- **Keine Entscheidungen über Menschen.** Kein Skill hier sichtet Bewerbungen, bewertet Beschäftigte oder prüft Kreditwürdigkeit. Solche Einsätze gelten nach Anhang III der KI-Verordnung als hochriskant; [`ki-vo-einordnung`](skills/ki-vo-einordnung/SKILL.md) zeigt, was dann gilt.
- **Rechtsstand Oktober 2026, Schwerpunkt Deutschland.** Wo Österreich oder die Schweiz abweichen, sagt der Skill das und rechnet nicht weiter.

## Über kiintegration.com

<a href="https://kiintegration.com/?utm_source=github&utm_medium=referral&utm_campaign=skills"><img src="assets/startseite.png" alt="Startseite von kiintegration.com" width="100%"></a>

Diese Skills kommen von [kiintegration.com](https://kiintegration.com/?utm_source=github&utm_medium=referral&utm_campaign=skills), dem Register für KI-Agenturen und -Dienstleister in Deutschland, Österreich und der Schweiz. Unternehmen finden dort, wer KI-Projekte umsetzt, mit belegten Angaben und offen gelegter Rangfolge; Anzeigen sind gekennzeichnet und verschieben die Rangfolge nicht. Dienstleister tragen sich kostenlos ein und erhalten Anfragen mit konkretem Anlass.

Soll ein Skill auf Stammdaten zugreifen, jeden Morgen von allein laufen oder Ergebnisse zurück ins System schreiben, braucht es jemanden, der das umsetzt: [Anfrage an passende Dienstleister](https://kiintegration.com/anfrage/?utm_source=github&utm_medium=referral&utm_campaign=skills).

Dienstleister, die ihren Eintrag beansprucht und bestätigt haben, binden dieses Zeichen auf ihrer Website ein:

<a href="https://kiintegration.com/verifizierung/?utm_source=github&utm_medium=referral&utm_campaign=skills">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/verifiziert-dunkel.svg">
    <img src="assets/verifiziert-hell.svg" alt="Abzeichen: KI Integration Register, verifiziert" width="248" height="64">
  </picture>
</a>

Dieselben Skills stehen mit Vorlage zum Kopieren auch auf [kiintegration.com/prompts/skills](https://kiintegration.com/prompts/skills/?utm_source=github&utm_medium=referral&utm_campaign=skills).

## Mitmachen

Fehler gefunden, Rechtsstand veraltet, Skill fehlt? [Issue anlegen](https://github.com/kiintegration-com/skills/issues/new/choose) oder Pull Request stellen. Wie ein Skill aufgebaut sein muss und wie Sie ihn vor dem Einreichen prüfen, steht in [CONTRIBUTING.md](CONTRIBUTING.md). Es gilt der [Verhaltenskodex](CODE_OF_CONDUCT.md).

```bash
node scripts/validate.mjs
```

## Lizenz

Die Skills und Texte stehen unter [CC BY 4.0](LICENSE): Sie dürfen sie nutzen, ändern und weitergeben, auch kommerziell. Wer sie veröffentlicht oder weitergibt, nennt die Quelle, zum Beispiel *„Skills für KMU" von kiintegration.com, CC BY 4.0*. Für die Nutzung im eigenen Betrieb ist keine Angabe nötig. Die Skripte in `scripts/` und die Workflows stehen unter [MIT](LICENSE-CODE).

---

<p align="center">
  <sub>Gepflegt von <a href="https://kiintegration.com/?utm_source=github&utm_medium=referral&utm_campaign=skills">kiintegration.com</a> · <a href="README.en.md">English</a> · <a href="CHANGELOG.md">Änderungen</a> · <a href="SECURITY.md">Sicherheit</a></sub>
</p>
