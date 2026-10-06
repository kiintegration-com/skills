---
name: kennzahlen-bericht
description: Rechnet Umsatz, Rohertrag, Marge, Auslastung und weitere Kennzahlen immer nach denselben, vom Betrieb festgelegten Formeln und schreibt daraus einen kurzen Monatsbericht mit Vorjahresvergleich und Rechenweg. Verwenden, wenn ein Export aus Buchhaltung, Warenwirtschaft oder Zeiterfassung ausgewertet, ein Monats- oder Quartalsbericht erstellt oder gefragt wird, wie das Geschäft gerade läuft.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Kennzahlen-Bericht

Wenn zwei Auswertungen derselben Woche verschiedene Zahlen zeigen, liegt es fast immer an der Definition. Dieser Skill legt sie einmal fest und rechnet jede Auswertung danach.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

| Kennzahl | Formel | Quelle (Datei, Spalten) |
|---|---|---|
| Umsatz | [z. B. Summe Rechnungsbetrag netto nach Rechnungsdatum, ohne Gutschriften] | [EXPORT, SPALTEN] |
| Rohertrag | [z. B. Umsatz − Wareneinsatz] | [ ] |
| Marge | [z. B. Rohertrag / Umsatz] | [ ] |
| Auslastung | [z. B. verrechnete Stunden / Anwesenheitsstunden] | [ ] |
| [WEITERE] | [ ] | [ ] |

- Abgrenzung: [z. B. Kalendermonat, Wirtschaftsjahr ab 1. Juli]
- Vergleich: [z. B. Vormonat und Vorjahresmonat]
- Schwelle für einen Hinweis: [z. B. Abweichung über 10 % zum Vorjahresmonat]

## Eingaben

Die Exporte für den Zeitraum und den Vergleichszeitraum. Kann das Werkzeug Code ausführen, rechne mit Code und nicht im Kopf.

## Vorgehen

1. Prüfe, ob jede Spalte, die eine Formel braucht, in den Daten vorhanden ist. Fehlt eine, nenne sie und rechne diese Kennzahl nicht.
2. Grenze den Zeitraum ab, wie in den Betriebsangaben festgelegt.
3. Rechne jede Kennzahl nach ihrer Formel, für Zeitraum und Vergleich.
4. Prüfe Abweichungen über der Schwelle und such in den Daten nach dem Grund (ein großer Auftrag, eine Gutschrift, ein fehlender Monat).

## Ausgabe

```
Bericht: Zeitraum, Stand der Daten

In drei Sätzen: das Wichtigste zuerst, mit Zahl.

| Kennzahl | Zeitraum | Vergleich | Abweichung | Formel |

Auffällig: je Abweichung über der Schwelle ein Satz mit dem Grund aus den Daten, oder „Grund nicht in den Daten".

Nicht gerechnet: Kennzahlen, für die Spalten fehlen.
```

## Prüfung vor der Ausgabe

- Rechne die Summe einer Kennzahl auf einem zweiten Weg nach, etwa je Monat summiert gegen die Gesamtsumme.
- Steht bei jeder Zahl die Formel?
- Sind netto und brutto nirgends gemischt?

## Grenzen

- Keine Kennzahl, die nicht definiert ist, ohne zu fragen. Eine eigene Definition wäre eine zweite Wahrheit.
- Du deutest Ursachen nur, wenn sie in den Daten stehen. Vermutungen kennzeichnest du als Vermutung.
- Der Bericht ersetzt keine betriebswirtschaftliche Auswertung der Steuerberatung.

## Beispiel

Eingabe: Rechnungsexport September 2026 und September 2025.

Ausgabe (Auszug):

```
Bericht: September 2026, Daten bis 30.09.2026

Der Umsatz liegt mit 184.300 EUR netto 12 % über dem Vorjahresmonat. Die Marge sank von 41 % auf 36 %, weil ein Großauftrag mit hohem Materialanteil abgerechnet wurde (Rechnung 2026-287).

| Kennzahl | Sep 2026 | Sep 2025 | Abweichung | Formel |
| Umsatz | 184.300 EUR | 164.550 EUR | +12,0 % | Summe netto nach Rechnungsdatum, ohne Gutschriften |
| Marge | 36,0 % | 41,0 % | −5,0 Punkte | (Umsatz − Wareneinsatz) / Umsatz |
```
