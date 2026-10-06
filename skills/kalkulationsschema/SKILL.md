---
name: kalkulationsschema
description: Kalkuliert Angebotspositionen nach einem festen Zuschlagsschema (Material, Lohn, Fremdleistung, Wagnis und Gewinn, Umsatzsteuer) und rechnet jede Summe ein zweites Mal nach. Verwenden, wenn ein Angebot, ein Kostenvoranschlag oder eine Nachkalkulation gerechnet wird, wenn Positionen, Stundensätze oder Zuschläge genannt werden oder wenn jemand fragt, was ein Auftrag kosten soll.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Kalkulationsschema

Rechnet Angebote immer nach demselben Schema, damit zwei Personen im Betrieb für denselben Auftrag auf dieselbe Summe kommen.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach, rechne nur mit dem, was feststeht, und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Land und Steuersätze: [DE 19 % / 7 %, AT 20 % / 13 % / 10 %, CH 8,1 % / 3,8 % / 2,6 %]
- Stundenverrechnungssatz netto: [z. B. Geselle 68 EUR, Meister 82 EUR]
- Materialzuschlag: [z. B. 15 %]
- Zuschlag auf Fremdleistungen: [z. B. 10 %]
- Wagnis und Gewinn: [z. B. 8 % auf die Selbstkosten]
- Fahrtkosten: [Pauschale je Einsatz oder Satz je km]
- Zeittakt: [z. B. auf 0,25 Stunden aufrunden]
- Preisliste: [Datei oder Tabelle mit Artikel, Einheit, Einkaufspreis]

## Eingaben

Positionen mit Menge und Einheit, geschätzte Stunden je Qualifikation, Material aus der Preisliste, Fremdleistungen mit Angebotspreis, Kundentyp (Unternehmen oder Privat).

## Vorgehen

1. Material: Einkaufspreis × Menge, darauf den Materialzuschlag.
2. Lohn: Stunden im Zeittakt aufrunden, × Stundenverrechnungssatz.
3. Fremdleistung: Angebotspreis, darauf den Fremdleistungszuschlag.
4. Fahrt: nach Betriebsangabe.
5. Selbstkosten = Summe aus 1 bis 4, darauf Wagnis und Gewinn.
6. Netto je Position, Nettosumme, Umsatzsteuer nach Satz, Brutto.
7. Runde kaufmännisch auf zwei Nachkommastellen, erst am Ende jeder Position, nicht in Zwischenschritten.

Sonderfälle sprichst du an, statt still zu entscheiden:

- Privatkunde in Deutschland: Lohn-, Maschinen- und Fahrtkosten getrennt vom Material ausweisen, damit der Kunde die Steuerermäßigung nach § 35a EStG nutzen kann.
- Bauleistung an ein Bauunternehmen: Die Steuerschuld kann nach § 13b UStG auf den Kunden übergehen. Dann keine Umsatzsteuer ausweisen und mit [PRÜFEN] markieren.
- Kleinunternehmer nach § 19 UStG: keine Umsatzsteuer, Hinweis in den Angebotstext.

## Ausgabe

Eine Tabelle, danach die Summen:

| Pos. | Bezeichnung | Menge | Einheit | Einzelpreis netto | Gesamt netto | Rechenweg |
|---|---|---|---|---|---|---|

Darunter Nettosumme, Umsatzsteuer mit Satz und Brutto. Zum Schluss eine Zeile „Offen:" mit allem, was gefehlt hat.

## Prüfung vor der Ausgabe

Rechne jede Summe ein zweites Mal, diesmal von hinten: Die Positionen müssen die Nettosumme ergeben, Nettosumme plus Steuer das Brutto. Weichen beide Rechnungen ab, zeig beide Werte und rechne nicht weiter.

## Grenzen

- Nur Preise aus der Preisliste oder vom Nutzer. Fehlt ein Preis, frag. Ein geschätzter Preis steht nie ohne [GESCHÄTZT] im Angebot.
- Steuerliche Sonderfälle entscheidest du nicht, du markierst sie.
- Kein Rabatt und kein Skonto, das nicht ausdrücklich genannt ist.

## Beispiel

Eingabe: „Badtür tauschen, Privatkunde in Köln. 3,2 h Geselle, Tür 189 EUR EK, Zarge 64 EUR EK, eine Anfahrt."

Ausgabe mit Stundensatz 68 EUR, Materialzuschlag 15 %, Wagnis und Gewinn 8 %, Anfahrt 35 EUR:

| Pos. | Bezeichnung | Menge | Einheit | Einzelpreis netto | Gesamt netto | Rechenweg |
|---|---|---|---|---|---|---|
| 1 | Lohn Geselle | 3,25 | h | 73,44 | 238,68 | 3,2 h → 3,25 h × 68,00 × 1,08 |
| 2 | Innentür | 1 | Stk | 234,74 | 234,74 | 189,00 × 1,15 × 1,08 |
| 3 | Zarge | 1 | Stk | 79,49 | 79,49 | 64,00 × 1,15 × 1,08 |
| 4 | Anfahrt | 1 | psch | 37,80 | 37,80 | 35,00 × 1,08 |

Nettosumme 590,71 EUR, USt 19 % 112,23 EUR, Brutto 702,94 EUR.
Lohn und Anfahrt (276,48 EUR netto) sind für § 35a EStG getrennt ausgewiesen.
Offen: nichts.
