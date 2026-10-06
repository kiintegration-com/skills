---
name: angebotsvergleich
description: Stellt zwei oder mehr Angebote verschiedener Anbieter auf eine gemeinsame Tabelle (Leistungsumfang, Ausschlüsse, Einmal- und laufende Kosten, Laufzeit, Kündigung, Gewährleistung) und rechnet die Gesamtkosten über einen festen Zeitraum. Verwenden, wenn im Einkauf Angebote, Kostenvoranschläge oder Software-Tarife verglichen werden oder jemand fragt, welches Angebot günstiger ist.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Angebotsvergleich

Drei Angebote haben drei Strukturen. Dieser Skill bringt sie auf eine Zeile, damit der Vergleich am Inhalt hängt und nicht an der Gliederung.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Vergleichszeitraum: [z. B. 36 Monate]
- Muss-Kriterien: [z. B. Rechenzentrum in der EU, Ansprechpartner deutschsprachig]
- Gewichtung, falls gewünscht: [z. B. Preis 50 %, Leistung 30 %, Service 20 %; leer lassen = keine Punktwertung]

## Eingaben

Mindestens zwei Angebote für dieselbe Leistung, als Text, PDF oder Tabelle. Dazu, wenn vorhanden, die eigene Anfrage, damit klar ist, was verlangt war.

## Vorgehen

1. Lies jedes Angebot vollständig, auch Fußnoten, AGB-Verweise und Anlagen.
2. Übertrage jeden Punkt in die Vergleichstabelle. Fehlt etwas, schreib „nicht genannt", nicht „nein".
3. Rechne die Gesamtkosten über den Vergleichszeitraum: Einmalkosten + laufende Kosten × Monate + bekannte Preissteigerungen. Zeig den Rechenweg je Anbieter.
4. Prüfe die Muss-Kriterien. Wer eines nicht erfüllt oder nicht nennt, wird markiert, nicht gestrichen.
5. Ist eine Gewichtung angegeben, vergib je Kriterium 1 bis 5 Punkte mit einem Satz Begründung und rechne die gewichtete Summe. Ohne Gewichtung keine Punkte.

## Ausgabe

Eine Spalte je Anbieter:

| | Anbieter A | Anbieter B |
|---|---|---|
| Leistungsumfang | | |
| ausdrücklich ausgeschlossen | | |
| Einmalkosten netto | | |
| laufende Kosten netto | | |
| Gesamtkosten im Zeitraum | | |
| Laufzeit und Kündigung | | |
| Preisanpassung | | |
| Gewährleistung, Service | | |
| Zahlungsbedingungen | | |
| Muss-Kriterien erfüllt | | |
| offene Punkte | | |

Danach je Anbieter die Fragen, die vor einer Entscheidung zu stellen sind.

## Prüfung vor der Ausgabe

- Ist jede Zahl in der Tabelle im Angebot zu finden oder als eigene Rechnung gekennzeichnet?
- Netto und brutto nicht gemischt?
- Ist „nicht genannt" überall dort eingetragen, wo ein Angebot schweigt?

## Grenzen

- Keine Empfehlung für einen Anbieter. Die Tabelle und die offenen Fragen sind die Entscheidungsgrundlage; entscheiden muss der Betrieb.
- Was nicht im Angebot steht, unterstellst du nicht, auch nicht aus allgemeinem Wissen über den Anbieter.

## Beispiel

Eingabe: zwei Angebote für eine Telefonanlage in der Cloud, 12 Plätze.

Ausgabe (Auszug):

| | Anbieter A | Anbieter B |
|---|---|---|
| Einmalkosten netto | 480,00 EUR Einrichtung | nicht genannt |
| laufende Kosten netto | 12 × 9,90 EUR = 118,80 EUR / Monat | 12 × 7,50 EUR = 90,00 EUR / Monat |
| Gesamtkosten 36 Monate | 480,00 + 36 × 118,80 = 4.756,80 EUR | 36 × 90,00 = 3.240,00 EUR, ohne Einrichtung |
| Laufzeit und Kündigung | monatlich kündbar | 24 Monate, 3 Monate Frist |

Frage an B: Fallen Einrichtungskosten an, und was kosten die Endgeräte?
