---
name: pseudonymisieren
description: Ersetzt Namen, Firmen, Anschriften, Telefonnummern, Mailadressen, Kunden-, Vertrags- und Kontonummern in Texten durch einheitliche Platzhalter und liefert die Zuordnungsliste getrennt, damit sich echte Fälle als Beispiel, Schulungsmaterial oder Prompt-Vorlage verwenden lassen. Verwenden, wenn ein Text, eine Mail, ein Protokoll oder eine Tabelle geschwärzt, anonymisiert oder pseudonymisiert werden soll.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Pseudonymisieren

Ein echter Fall ist das beste Beispiel, aber er soll nicht als echter Fall weitergehen. Dieser Skill ersetzt alles, was auf Personen und Firmen zeigt, durch Platzhalter.

Mit Zuordnungsliste sind die Daten pseudonymisiert, nicht anonymisiert (Art. 4 Nr. 5 DSGVO): Wer die Liste hat, kann zurückübersetzen. Die Liste gehört deshalb getrennt vom Text abgelegt, und wer echte Anonymität braucht, verwirft sie.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Eigene Kennungen, die ebenfalls ersetzt werden: [z. B. Projektnummern P-2026-…, Personalnummern]
- Was bleiben darf: [z. B. Ortsnamen ab 100.000 Einwohnern, unser eigener Firmenname]

## Vorgehen

1. Ersetze:
   - Personen durch `[PERSON_1]`, `[PERSON_2]` …
   - Firmen durch `[FIRMA_1]` …
   - Anschriften, Telefonnummern, Mailadressen durch `[ADRESSE_1]`, `[TELEFON_1]`, `[MAIL_1]` …
   - Kunden-, Vertrags-, Rechnungs-, Konto- und Kennnummern sowie IBAN durch `[NUMMER_1]` …
   - Datumsangaben, die eine Person erkennbar machen (Geburtstag, Unfalltag), durch Monat und Jahr.
   - Eigene Kennungen aus den Betriebsangaben.
2. Gleiche Person, gleicher Platzhalter, auch bei anderer Schreibweise oder Anrede („Herr Meier", „Meier", „H. Meier", „Ihr Mann").
3. Achte auf indirekte Hinweise: Funktion in kleinem Betrieb („die Filialleiterin in Bad Tölz"), seltene Ereignisse, Signaturen, Dateinamen, Mail-Kopfzeilen.

## Ausgabe

Zuerst der bearbeitete Text. Danach, deutlich getrennt unter der Überschrift „Zuordnungsliste, getrennt ablegen":

| Platzhalter | Original |
|---|---|

Zum Schluss eine Zeile „Indirekt erkennbar:" mit Stellen, die trotz Platzhaltern auf eine Person schließen lassen könnten.

## Prüfung vor der Ausgabe

Lies den fertigen Text ein zweites Mal nur auf Reste: Großgeschriebene Wörter, die Namen sein könnten, Ziffernfolgen, @-Zeichen, Straßennamen, Grußformeln und Signaturen.

## Grenzen

- Wer den Originaltext in einen Chat kopiert, hat ihn dem Anbieter des Werkzeugs schon übergeben. Für Daten, die den Betrieb nicht verlassen dürfen, läuft dieser Skill nur in einem Werkzeug mit Vertrag zur Auftragsverarbeitung oder in einem Modell auf eigenem Rechner.
- Kein Verfahren findet jeden Rest sicher. Was nach außen geht, liest ein Mensch gegen.

## Beispiel

Eingabe: „Frau Sabine Krüger (Kd.-Nr. 40017) rief am 02.10. an: Ihr Mann Thomas hat die Heizung in der Lindenstraße 4, Eching, seit Montag ohne Warmwasser. Rückruf 0171 5550123."

Ausgabe:

> [PERSON_1] ([NUMMER_1]) rief am 02.10. an: [PERSON_2] hat die Heizung in [ADRESSE_1] seit Montag ohne Warmwasser. Rückruf [TELEFON_1].

Zuordnungsliste, getrennt ablegen:

| Platzhalter | Original |
|---|---|
| [PERSON_1] | Sabine Krüger |
| [PERSON_2] | Thomas (Ehemann von PERSON_1) |
| [NUMMER_1] | Kd.-Nr. 40017 |
| [ADRESSE_1] | Lindenstraße 4, Eching |
| [TELEFON_1] | 0171 5550123 |

Indirekt erkennbar: keine Stelle.
