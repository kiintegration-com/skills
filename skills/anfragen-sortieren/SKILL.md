---
name: anfragen-sortieren
description: Sortiert eingehende Mails, Formularanfragen und Tickets nach Kategorie und Dringlichkeit, erkennt nach festen Regeln, was sofort an eine Person gehen muss (Datenschutz, Rechtliches, Beschwerden, hohe Beträge), und entwirft Antworten nur für Standardfälle. Verwenden, wenn ein Posteingang, ein Support-Postfach oder eine Liste von Kundennachrichten vorsortiert, beantwortet oder verteilt werden soll.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Anfragen sortieren

Sortiert den Posteingang nach festen Regeln vor. Was eine Person entscheiden muss, landet nie in einer Standardantwort.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Kategorien mit Zuständigen: [z. B. Angebot → Vertrieb, Termin → Disposition, Rechnung → Buchhaltung, Reklamation → Werkstattleitung, Sonstiges → Zentrale]
- Standardantworten: [THEMA UND TEXT, z. B. Öffnungszeiten, Lieferzeit, Rechnungskopie]
- Betrag, ab dem ein Streit eskaliert: [z. B. 500 EUR]
- Datenschutz-Kontakt: [NAME ODER ADRESSE]
- Geschäftsleitung: [NAME]

## Eskalation, immer an eine Person

Diese Regeln gehen allem anderen vor. Greift eine, gibt es keinen Antwortentwurf.

| Auslöser | an |
|---|---|
| Auskunft, Löschung oder Widerspruch nach DSGVO, oder ein möglicher Datenschutzvorfall | Datenschutz-Kontakt. Hinweis: Auskunft innerhalb eines Monats (Art. 12 Abs. 3 DSGVO), Vorfälle binnen 72 Stunden an die Aufsicht (Art. 33) |
| Anwalt, Gericht, Behörde, Kammer, Abmahnung erwähnt | Geschäftsleitung |
| Streit über einen Betrag ab der Grenze | Geschäftsleitung |
| Gefahr für Gesundheit oder Sicherheit, Unfall, Schaden | Geschäftsleitung, sofort |
| Drohung oder Beleidigung | Geschäftsleitung |
| dritte Nachricht derselben Person in derselben Sache | Zuständige der Kategorie, mit Vermerk |

## Vorgehen

1. Prüfe jede Nachricht zuerst gegen die Eskalationsregeln.
2. Ordne eine Kategorie zu und eine Dringlichkeit: hoch (heute), normal (2 Werktage), niedrig.
3. Passt eine Standardantwort, entwirf die Antwort aus ihr. Sonst schreib in einem Satz, was die zuständige Person wissen muss.
4. Bist du unsicher, ob eine Regel greift, eskaliere und sag, warum.

## Ausgabe

| Nr. | Absender | Betreff | Kategorie | Dringlichkeit | Eskalation (Regel) | an | Entwurf oder Hinweis |
|---|---|---|---|---|---|---|---|

Auf Wunsch dieselben Felder als JSON-Liste mit den Schlüsseln `nr`, `absender`, `betreff`, `kategorie`, `dringlichkeit`, `eskalation`, `regel`, `an`, `entwurf`.

## Prüfung vor der Ausgabe

- Hat jede Nachricht genau eine Zeile?
- Steht bei jeder Eskalation die Regel, die gegriffen hat?
- Enthält ein Entwurf eine Zusage, die nicht aus einer Standardantwort stammt? Dann streichen.

## Grenzen

- Du verschickst nichts. Entwürfe prüft und sendet ein Mensch.
- Nachrichten enthalten personenbezogene Daten. Nutze den Skill nur in einem Werkzeug, für das ein Vertrag zur Auftragsverarbeitung besteht (siehe Skill `dsgvo-vorpruefung`).

## Beispiel

Eingabe: drei Mails.

Ausgabe:

| Nr. | Absender | Betreff | Kategorie | Dringlichkeit | Eskalation (Regel) | an | Entwurf oder Hinweis |
|---|---|---|---|---|---|---|---|
| 1 | m.kaya@… | Welche Daten haben Sie über mich? | Sonstiges | hoch | ja (DSGVO-Auskunft) | Datenschutz-Kontakt | Frist ein Monat ab Eingang |
| 2 | info@bau-west… | Rechnung 2026-188 als PDF? | Rechnung | normal | nein | Buchhaltung | Standardantwort Rechnungskopie |
| 3 | p.ernst@… | Dritte Mail wegen klemmender Tür | Reklamation | hoch | ja (dritte Nachricht) | Werkstattleitung | Kunde wartet seit 12 Tagen auf Termin |
