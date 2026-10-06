---
name: tabelle-saeubern
description: Prüft und bereinigt Tabellen vor einer Auswertung oder einem Import (Dubletten, gemischte Datumsformate, Zahlen als Text, Dezimalkomma, verlorene führende Nullen bei Postleitzahlen, leere Pflichtfelder, Ausreißer) und löscht nie still eine Zeile. Verwenden, wenn eine Excel-, CSV- oder Export-Datei ausgewertet, zusammengeführt oder in ein anderes System übernommen werden soll.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Tabelle säubern

Gewachsene Excel-Dateien und Exporte aus Fachsystemen haben dieselben Fehler. Dieser Skill findet sie, bevor eine Summe falsch wird oder ein Import abbricht.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Schlüsselspalte für Dubletten: [z. B. Kundennummer, sonst Name + PLZ]
- Pflichtspalten: [z. B. Kundennummer, Name, PLZ, Ort]
- Plausible Wertebereiche: [z. B. Menge 0 bis 10.000, Rabatt 0 bis 30 %]
- Zielformat: [z. B. CSV mit Semikolon, UTF-8, Datum JJJJ-MM-TT, Dezimalpunkt]

## Eingaben

Die Tabelle als Datei oder eingefügter Text. Kann das Werkzeug Code ausführen, lies die Datei mit Code und prüfe mit Code, nicht durch Lesen. Bei großen Dateien zählen sonst übersehene Zeilen.

## Vorgehen

Prüfe in dieser Reihenfolge und sammle die Funde, bevor du etwas änderst:

1. **Aufbau**: Kopfzeile vorhanden und eindeutig? Verbundene Zellen, Leerzeilen, Summenzeilen mitten in den Daten?
2. **Kodierung**: Umlaute kaputt („MÃ¼ller")? Dann ist die Datei in UTF-8 gespeichert und als Windows-1252 gelesen oder umgekehrt.
3. **Dubletten**: gleiche Zeilen und gleiche Schlüssel mit abweichendem Rest, auch bei anderer Schreibweise („Müller GmbH", „Mueller GmbH").
4. **Datumsangaben**: gemischte Schreibweisen (06.10.2026, 2026-10-06, 10/06/2026), Excel-Seriennummern (46301), unmögliche Daten.
5. **Zahlen**: Zahlen als Text, Tausenderpunkte, Dezimalkomma und Dezimalpunkt gemischt, Währungszeichen in Zahlenspalten.
6. **Kennungen**: Postleitzahlen mit verlorener führender Null (1067 statt 01067), Telefonnummern und IBAN als Zahl mit Exponent.
7. **Pflichtfelder** leer, **Ausreißer** außerhalb der Wertebereiche.

## Ausgabe

Zuerst die Fundliste:

| Zeile | Spalte | Fund | Vorschlag |
|---|---|---|---|

Dann eine Zusammenfassung in Zahlen (Zeilen gelesen, Funde je Art). Danach, wenn gewünscht, die bereinigte Tabelle im Zielformat. Jede Zeile, die entfallen soll, bleibt drin und bekommt in einer neuen Spalte `Hinweis` den Eintrag `[ENTFERNEN: Grund]`.

## Prüfung vor der Ausgabe

- Hat die bereinigte Tabelle genauso viele Zeilen wie die Eingabe?
- Stimmt die Summe jeder Zahlenspalte vor und nach der Bereinigung überein, abgesehen von korrigierten Funden? Nenne jede Differenz.

## Grenzen

- Du löschst nie still. Du schlägst vor; entfernt wird nach Bestätigung.
- Bei zwei plausiblen Lesarten (03.04. als 3. April oder 4. März) entscheidest du nicht, sondern fragst.
- Kundentabellen enthalten personenbezogene Daten. Kläre vorher, ob sie in das genutzte Werkzeug dürfen (Skill `dsgvo-vorpruefung`).

## Beispiel

Eingabe: Kundenliste mit 1.214 Zeilen aus zwei Filialen.

Ausgabe (Auszug):

| Zeile | Spalte | Fund | Vorschlag |
|---|---|---|---|
| 88 und 412 | Kundennr. 10442 | gleiche Nummer, Name „Müller GmbH" und „Mueller GmbH" | zusammenführen, Anschrift aus Zeile 412 (neuer) |
| 130–171 | PLZ | 4-stellig, führende Null fehlt (1067) | als Text 01067 |
| 502 | Umsatz | „1.250,00 €" als Text | 1250.00 |

Gelesen 1.214 Zeilen. Funde: 9 Dubletten, 42 PLZ, 17 Zahlen als Text, 3 leere Pflichtfelder.
