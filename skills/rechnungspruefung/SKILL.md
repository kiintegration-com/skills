---
name: rechnungspruefung
description: Prüft Eingangsrechnungen gegen Bestellung und Lieferschein, rechnet Summen und Steuer nach, kontrolliert die Pflichtangaben nach § 14 UStG und warnt bei geänderter Bankverbindung. Verwenden, wenn eine Lieferantenrechnung, ein Rechnungs-PDF oder eine E-Rechnung (XRechnung, ZUGFeRD) zur Freigabe ansteht oder jemand fragt, ob eine Rechnung stimmt.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Rechnungsprüfung

Vergleicht jede Eingangsrechnung mit dem, was bestellt und geliefert wurde, bevor jemand zahlt. Die Sichtprüfung fällt unter Zeitdruck als Erstes weg; dieser Skill nicht.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Land des Betriebs: [DE, AT oder CH]
- Unser Name und unsere Anschrift, wie sie auf Rechnungen stehen müssen: [FIRMA, ANSCHRIFT]
- Bekannte Bankverbindungen der Lieferanten: [LIEFERANT, IBAN]
- Toleranz: [z. B. Abweichungen unter 5 EUR nennen, aber nicht als Fehler werten]
- Skonto-Regel: [z. B. Skonto immer ziehen, wenn die Frist noch läuft]

## Eingaben

Die Rechnung, dazu Bestellung, Auftragsbestätigung oder Lieferschein, soweit vorhanden. Bei einer E-Rechnung reicht die XML-Datei oder die lesbare Ansicht daraus.

## Vorgehen

1. **Abgleich**: Positionen, Mengen und Einzelpreise gegen Bestellung und Lieferschein. Jede Abweichung mit Differenz in EUR.
2. **Rechnen**: Positionssummen, Nettosumme, Steuer je Steuersatz, Brutto. Rechne selbst, übernimm keine Summe.
3. **Pflichtangaben** (Deutschland, § 14 Abs. 4 UStG): Name und Anschrift von Lieferant und Empfänger, Steuernummer oder USt-IdNr. des Lieferanten, Rechnungsdatum, fortlaufende Rechnungsnummer, Menge und Art der Leistung, Leistungsdatum oder -zeitraum, Entgelt nach Steuersätzen getrennt, Steuersatz und Steuerbetrag oder der Grund für die Steuerbefreiung. Bis 250 EUR brutto genügt eine Kleinbetragsrechnung (§ 33 UStDV). Für AT und CH prüfst du nur Rechnen und Abgleich und markierst die Pflichtangaben mit [NACH LANDESRECHT PRÜFEN].
4. **Sonderfälle**: Steht keine Steuer drauf, muss der Grund dastehen (Kleinunternehmer, § 13b UStG, innergemeinschaftliche Lieferung mit beiden USt-IdNrn.).
5. **Betrugsmerkmale**: Bankverbindung weicht von der bekannten ab, Zahlungsaufforderung mit ungewöhnlicher Eile, Rechnungsnummer schon einmal gesehen. Jedes davon ist ein Grund zum Klären per Telefon unter der bekannten Nummer, nie per Antwort auf die Mail.
6. **Zahlung**: Fälligkeit und Skontofrist mit Datum.

## Ausgabe

Erste Zeile: „Freigabe empfohlen" oder „Klären". Dann:

| Prüfpunkt | Ergebnis | Fundstelle oder Differenz |
|---|---|---|

Zum Schluss: fällig am, Skonto bis, Betrag mit Skonto.

## Prüfung vor der Ausgabe

- Hast du jede Summe selbst gerechnet?
- Steht jede Abweichung mit Betrag da, nicht nur „weicht ab"?
- Hast du eine geänderte Bankverbindung als Erstes genannt, über allem anderen?

## Grenzen

- Du gibst nichts frei und veranlasst keine Zahlung. Du empfiehlst.
- Seit 1. Januar 2025 müssen Unternehmen in Deutschland E-Rechnungen empfangen können. Ob ein PDF noch als Rechnung genügt, hängt von Übergangsfristen ab; das klärt die Steuerberatung, nicht dieser Skill.
- Ob ein Vorsteuerabzug möglich ist, entscheidet die Buchhaltung. Du zeigst nur, welche Angabe fehlt.

## Beispiel

Eingabe: Rechnung Nr. 2026-0419 der Elektro Sommer GmbH, 1.428,00 EUR brutto, dazu der Lieferschein.

Ausgabe:

Klären.

| Prüfpunkt | Ergebnis | Fundstelle oder Differenz |
|---|---|---|
| Bankverbindung | weicht ab | Rechnung DE12 …4471, bekannt DE89 …2203. Vor Zahlung telefonisch bestätigen. |
| Menge Pos. 3 | weicht ab | berechnet 40 m Kabel, geliefert 25 m, Differenz 26,25 EUR netto |
| Summen und Steuer | stimmen | 1.200,00 + 19 % = 1.428,00 |
| Pflichtangaben | vollständig | |

Fällig am 30.10.2026, 2 % Skonto bis 16.10.2026 (nach Klärung neu rechnen).
