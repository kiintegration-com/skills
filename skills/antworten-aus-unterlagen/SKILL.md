---
name: antworten-aus-unterlagen
description: Beantwortet Fragen ausschließlich aus den vorgelegten Unterlagen (Handbücher, AGB, Verträge, Preislisten, Richtlinien), belegt jede Aussage mit Datei und Abschnitt und sagt offen, wenn etwas nicht drinsteht. Verwenden, wenn Kunden-, Mitarbeiter-, Prüfer- oder Behördenfragen anhand interner Dokumente beantwortet werden, wenn jemand fragt „was steht in unseren Unterlagen zu …" oder wenn eine Antwort belegbar sein muss.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Antworten aus Unterlagen

Ein Sprachmodell füllt Lücken gern mit Allgemeinwissen. Für Auskünfte an Kunden, Prüfer oder Behörden ist das gefährlich. Dieser Skill antwortet nur aus den Unterlagen und belegt jeden Satz.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Unterlagen, die gelten: [z. B. Betriebshandbuch 2026, AGB Stand 01/2026, Preisliste Stand 07/2026]
- Rangfolge bei Widersprüchen: [z. B. Vertrag vor AGB vor Handbuch; neueres Datum vor älterem]
- Wer Lücken klärt: [NAME ODER ABTEILUNG]

## Vorgehen

1. Such die Antwort in allen Unterlagen, die im Gespräch oder Projekt vorliegen.
2. Belege jede Aussage mit Datei und Abschnitt oder Seite. Die entscheidende Stelle zitierst du wörtlich, höchstens 25 Wörter.
3. Steht die Antwort nicht drin, sag es: „Dazu steht nichts in den vorliegenden Unterlagen." Dann nenne, wer es klären kann. Kein Allgemeinwissen als Ersatz, auch nicht als „üblicherweise".
4. Widersprechen sich zwei Stellen, zeig beide mit Datum und wende die Rangfolge an. Gibt es keine Rangfolge, entscheidest du nicht.
5. Ist die Frage nur teilweise beantwortbar, beantworte den Teil und benenne den Rest.

## Ausgabe

```
Antwort: zwei bis vier Sätze

Belege:
1. „Zitat" (Datei, Abschnitt)
2. …

Nicht in den Unterlagen: … (klärt: …)
```

## Prüfung vor der Ausgabe

Such jedes Zitat ein zweites Mal im Dokument. Findest du es nicht wörtlich wieder, streiche die Aussage, die darauf beruht. Prüfe außerdem, ob eine neuere Fassung desselben Dokuments vorliegt.

## Grenzen

- Die Antwort ist so gut wie die Unterlagen. Veraltete Dokumente ergeben veraltete Antworten; nenne deshalb immer den Stand der Quelle.
- Rechtliche Auskünfte bleiben Auskünfte aus den Unterlagen, keine Rechtsberatung.

## Beispiel

Eingabe: „Ein Kunde fragt, ob er die Wartung jederzeit kündigen kann." Vorliegend: AGB Stand 01/2026, Wartungsvertrag Muster 2025.

Ausgabe:

```
Antwort: Nein, nicht jederzeit. Der Wartungsvertrag läuft zwölf Monate und ist mit drei Monaten Frist zum Laufzeitende kündbar. Die AGB sehen eine monatliche Kündigung vor, gelten aber nach der Rangfolge nachrangig zum Vertrag.

Belege:
1. „Die Laufzeit beträgt zwölf Monate; die Kündigungsfrist drei Monate zum Ende der Laufzeit." (Wartungsvertrag Muster 2025, § 4)
2. „Dauerschuldverhältnisse sind monatlich kündbar, soweit nichts anderes vereinbart ist." (AGB 01/2026, Ziff. 9.2)

Nicht in den Unterlagen: ob für Bestandsverträge vor 2025 andere Fristen gelten (klärt: Vertrieb).
```
