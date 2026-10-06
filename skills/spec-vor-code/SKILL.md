---
name: spec-vor-code
description: Verlangt vor jeder Zeile Code eine kurze Spezifikation (Zweck, Abgrenzung, Ein- und Ausgaben mit Beispiel, Datenablage, Erfolgskriterium) und wartet auf Freigabe. Verwenden, wenn jemand ohne Programmiererfahrung ein kleines Werkzeug, Skript, eine Excel-Makro-Ablösung, eine interne Web-App oder eine Automatisierung bauen lassen will, also bei Vibe Coding und jedem „Bau mir mal schnell …".
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Spec vor Code

Vibe Coding überspringt den Schritt, an dem festgelegt wird, was das Werkzeug tun soll. Das Ergebnis sind drei Anläufe und ein Programm, das etwas anderes kann als gebraucht. Dieser Skill holt den Schritt nach vorn: eine Seite Spezifikation, dann Code.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Kenntnisstand der Person, die baut: [z. B. Excel gut, nie programmiert]
- Wo es laufen darf: [z. B. nur auf dem eigenen Rechner, im Firmennetz, im Internet]
- Vorhandene Werkzeuge: [z. B. Microsoft 365, Python installiert, keine Server]

## Vorgehen

1. Stell höchstens fünf Fragen, wenn die Anfrage zu vage ist, und schlag zu jeder eine Antwort vor.
2. Schreib die Spezifikation (Format unten), nicht mehr als eine Seite.
3. Warte auf ein ausdrückliches OK. Bis dahin kein Code, auch kein „kleiner Entwurf".
4. Nach dem OK: Bau nur, was in der Spezifikation steht. Fällt dir eine sinnvolle Erweiterung ein, schlag sie vor, bau sie nicht.
5. Ändert sich die Anforderung, ändere zuerst die Spezifikation und lass sie bestätigen, dann den Code.

## Ausgabe

```
Spezifikation: Name des Werkzeugs

1. Zweck: was es tut, in drei Sätzen.
2. Nicht enthalten: was es ausdrücklich nicht tut.
3. Eingaben: Was kommt hinein, in welchem Format? Ein Beispiel.
4. Ausgaben: Was kommt heraus? Ein Beispiel.
5. Daten: Wo liegen sie, wer darf sie sehen, was passiert beim Löschen?
6. Läuft wo: Rechner, Netz, Dienst; was muss installiert sein?
7. Erfolgskriterium: Woran sieht die Person in fünf Minuten, dass es funktioniert?
8. Risiken: Was passiert, wenn es falsch rechnet oder ausfällt?
```

## Prüfung vor der Ausgabe

- Versteht jemand mit dem genannten Kenntnisstand jeden Satz?
- Ist das Erfolgskriterium ein Test, den die Person selbst ausführen kann?
- Verarbeitet das Werkzeug personenbezogene Daten oder Geld? Dann gehört der Skill `sicherheits-kurzpruefung` vor den ersten echten Einsatz; schreib das unter Risiken.

## Grenzen

- Ein Werkzeug, das Rechnungen bucht, Geld bewegt oder Kundendaten nach außen gibt, ist kein Wegwerf-Prototyp. Sag das, bevor gebaut wird.
- Die Spezifikation ersetzt keine Abnahme. Getestet wird mit echten, aber unkritischen Fällen.

## Beispiel

Eingabe: „Bau mir was, das aus unseren Stundenzetteln (Excel) jeden Monat eine Abrechnung je Kunde macht."

Ausgabe (Auszug):

```
Spezifikation: Monatsabrechnung aus Stundenzetteln

1. Zweck: Liest alle Stundenzettel eines Monats aus einem Ordner, summiert die Stunden je Kunde und Tätigkeit und schreibt eine Excel-Datei mit einem Blatt je Kunde.
2. Nicht enthalten: keine Rechnung, kein Versand, keine Änderung an den Stundenzetteln.
3. Eingaben: Ordner mit .xlsx-Dateien, Spalten Datum, Kunde, Tätigkeit, Stunden. Beispiel: 06.10.2026 | Bäckerei Lind | Wartung | 2,5
...
7. Erfolgskriterium: Für September stimmt die Summe für Bäckerei Lind mit der Handrechnung von 14,5 Stunden überein.
```

Weiter erst nach Ihrem OK.
