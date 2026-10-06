---
name: zahlungserinnerung
description: Schreibt Zahlungserinnerungen und Mahnungen in drei Stufen, stellt fest, ob und seit wann der Kunde in Verzug ist, und rechnet Verzugszinsen und Pauschale nach deutschem Recht nach. Verwenden, wenn eine Rechnung überfällig ist, ein Kunde nicht zahlt oder jemand eine Zahlungserinnerung, Mahnung oder letzte Mahnung schreiben will.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Zahlungserinnerung

Offene Rechnungen bleiben offen, weil das Mahnen unangenehm ist und niemand die Regeln im Kopf hat. Dieser Skill schreibt die Nachricht und rechnet, was gefordert werden darf.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Land: [DE, AT oder CH]
- Stufen und Abstände: [z. B. Erinnerung 7 Tage nach Fälligkeit, 1. Mahnung nach weiteren 14 Tagen, letzte Mahnung nach weiteren 14 Tagen]
- Zinsen und Pauschale fordern: [ja, ab der 1. Mahnung / nein, nur bei Neukunden / nie]
- Aktueller Basiszinssatz: [WERT UND STAND, von der Deutschen Bundesbank; er ändert sich zum 1. Januar und 1. Juli]
- Bankverbindung und Signatur: [IBAN, NAME, TELEFON]
- Was nach der letzten Mahnung geschieht: [z. B. gerichtliches Mahnverfahren, Inkasso, Anwalt]

## Eingaben

Rechnungsnummer, Rechnungsdatum, Betrag, Fälligkeit, Datum des Zugangs, ob der Kunde Unternehmen oder Verbraucher ist, bisherige Erinnerungen, Teilzahlungen.

## Vorgehen

1. **Stufe bestimmen** aus den bisherigen Nachrichten.
2. **Verzug prüfen** (Deutschland, § 286 BGB): Verzug tritt ein mit einer Mahnung nach Fälligkeit, ohne Mahnung bei einem kalendermäßig bestimmten Zahlungsziel („zahlbar bis 15.10.") oder spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung. Bei Verbrauchern gilt die 30-Tage-Regel nur, wenn die Rechnung darauf hinweist. Nenne das Datum, ab dem Verzug besteht, und den Grund.
3. **Rechnen** (nur Deutschland und nur, wenn Verzug besteht und der Betrieb es will): Verzugszinsen nach § 288 BGB, bei Verbrauchern 5 Prozentpunkte, zwischen Unternehmen 9 Prozentpunkte über dem Basiszinssatz, taggenau ab Verzugsbeginn. Zwischen Unternehmen zusätzlich 40 EUR Pauschale (§ 288 Abs. 5 BGB). Zeig den Rechenweg.
4. **Ton nach Stufe**: Erinnerung freundlich und ohne Vorwurf, 1. Mahnung sachlich mit Frist, letzte Mahnung mit Frist und angekündigtem nächsten Schritt.
5. **Frist** setzen: konkretes Datum, mindestens 7 Tage.

## Ausgabe

```
Stufe: Erinnerung / 1. Mahnung / letzte Mahnung
Verzug seit: Datum und Grund, oder „noch kein Verzug"
Forderung: Hauptbetrag, Zinsen mit Rechenweg, Pauschale, Summe
Betreff: …
Text: …
```

## Prüfung vor der Ausgabe

- Stimmen Rechnungsnummer, Betrag und Datum mit den Eingaben überein?
- Ist der Zinssatz der aus den Betriebsangaben und der Zeitraum taggenau?
- Kündigt die Nachricht nur an, was der Betrieb wirklich vorhat?

## Grenzen

- Für Österreich und die Schweiz gelten andere Zinssätze und Regeln. Dort schreibst du die Nachricht, rechnest aber keine Zinsen und markierst die Stelle mit [NACH LANDESRECHT PRÜFEN].
- Bestreitet der Kunde die Forderung oder meldet einen Mangel, ist das kein Fall für eine Mahnung. Sag das und schlag eine Klärung vor.
- Keine Drohung, die über den angekündigten rechtlichen Schritt hinausgeht. Kein Schufa-Eintrag als Drohung.

## Beispiel

Eingabe: „Rechnung 2026-311 an Bäckerei Lind GmbH, 2.380,00 EUR, fällig 01.09.2026, Erinnerung am 08.09. ohne Reaktion. 1. Mahnung, mit Zinsen. Basiszinssatz 1,27 %." (Wert nur für das Beispiel.)

Ausgabe:

```
Stufe: 1. Mahnung
Verzug seit: 09.09.2026, durch die Erinnerung vom 08.09. nach Fälligkeit (§ 286 Abs. 1 BGB)
Forderung: 2.380,00 EUR + Zinsen 10,27 % für 28 Tage bis 06.10. = 18,75 EUR (2.380,00 × 10,27 % × 28 / 365) + Pauschale 40,00 EUR = 2.438,75 EUR
Betreff: 1. Mahnung zu Rechnung 2026-311
Text: Sehr geehrte Damen und Herren, zu unserer Rechnung 2026-311 vom … über 2.380,00 EUR haben wir bis heute keinen Zahlungseingang. Bitte überweisen Sie 2.438,75 EUR bis zum 16.10.2026 auf … Die Aufstellung finden Sie unten. Hat sich Ihre Zahlung mit diesem Schreiben gekreuzt, betrachten Sie es als gegenstandslos. …
```
