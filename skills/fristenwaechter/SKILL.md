---
name: fristenwaechter
description: Findet in Verträgen, Bescheiden, Mails und Protokollen jede Frist und jeden Termin, auch versteckte („binnen zwei Wochen nach Zugang"), rechnet sie in ein Datum um und zeigt den Rechenweg. Verwenden, wenn ein Vertrag, eine Kündigung, ein Behördenbescheid, ein Mängelschreiben oder eine Mail mit Fristen vorliegt oder jemand fragt, bis wann etwas erledigt sein muss.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Fristenwächter

Fristen stehen im Fließtext, oft relativ und verschachtelt. Dieser Skill schreibt sie mit Datum heraus, damit sie in den Kalender kommen, bevor sie ablaufen.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Bundesland oder Kanton für Feiertage: [z. B. Bayern]
- Vorlauf für Erinnerungen: [z. B. 14 Tage und 3 Tage vor Ablauf]
- Wer Fristen einträgt: [NAME]

## Eingaben

Der Text, dazu das Datum des Schreibens und, wenn bekannt, das Datum des Zugangs. Fehlt das Zugangsdatum und hängt eine Frist daran, rechne mit dem Datum des Schreibens und markiere die Frist mit [ZUGANG PRÜFEN].

## Vorgehen

1. Finde jede Frist, jeden Termin und jede Kündigungsmöglichkeit, auch in Anlagen und Fußnoten. Achte auf Formulierungen wie „binnen", „spätestens", „mit einer Frist von", „zum Ende des", „verlängert sich um".
2. Rechne relative Fristen nach §§ 187, 188 BGB: Der Tag des Ereignisses zählt nicht mit; eine Frist nach Wochen oder Monaten endet an dem Tag, der durch seine Benennung oder Zahl dem Ereignistag entspricht.
3. Fällt das Ende auf einen Samstag, Sonntag oder Feiertag, nenne zusätzlich den nächsten Werktag mit dem Hinweis auf § 193 BGB und markiere die Zeile mit [PRÜFEN]. Ob die Verschiebung gilt, hängt von der Art der Frist ab.
4. Automatische Verlängerungen: Nenne den letzten Tag, an dem die Kündigung zugehen muss.
5. Rechne für jede Frist die Erinnerungstermine aus den Betriebsangaben.

## Ausgabe

| Was | Frist endet | Rechenweg | wer handelt | Erinnerung | Fundstelle (Zitat) | Hinweis |
|---|---|---|---|---|---|---|

Sortiert nach Datum, die nächste zuerst. Datum als TT.MM.JJJJ mit Wochentag.

## Prüfung vor der Ausgabe

- Rechne jedes Datum ein zweites Mal mit dem Kalender, Wochentag eingeschlossen.
- Hat jede Zeile ein wörtliches Zitat als Fundstelle?
- Hast du Kündigungsfristen bei Verträgen mit Verlängerung gesucht, auch wenn der Text sie nicht hervorhebt?

## Grenzen

- Du bewertest nicht, ob eine Frist rechtlich wirksam ist oder schon versäumt wurde.
- Gesetzliche Fristen, die nicht im Text stehen (etwa Verjährung), nennst du nur als Hinweis, nie als berechnetes Datum.
- Eine Frist im Kalender ersetzt nicht die Ablage des Schreibens.

## Beispiel

Eingabe: Mail vom Vermieter der Lagerhalle, datiert Dienstag, 06.10.2026: „Der Mietvertrag verlängert sich um ein Jahr, wenn er nicht mit einer Frist von drei Monaten zum 31.12. gekündigt wird. Bitte senden Sie uns die Nebenkostenbelege binnen zwei Wochen."

Ausgabe:

| Was | Frist endet | Rechenweg | wer handelt | Erinnerung | Fundstelle (Zitat) | Hinweis |
|---|---|---|---|---|---|---|
| Nebenkostenbelege senden | Di, 20.10.2026 | 06.10. + 2 Wochen | wir | 06.10., 17.10. | „binnen zwei Wochen" | [ZUGANG PRÜFEN], gerechnet ab Datum der Mail |
| Kündigung muss zugehen | Mi, 30.09.2026 (abgelaufen) | 31.12.2026 − 3 Monate | wir | – | „mit einer Frist von drei Monaten zum 31.12." | [PRÜFEN] Für 2026 vermutlich versäumt; nächste Möglichkeit 30.09.2027 |
