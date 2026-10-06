---
name: aufwandsschaetzung
description: Schätzt Aufwand je Arbeitspaket mit drei Werten (günstig, erwartet, ungünstig), berechnet daraus den Erwartungswert und nennt, was den ungünstigen Fall auslöst. Verwenden, wenn für ein Projekt, ein Angebot oder eine interne Planung Stunden, Personentage oder Dauer geschätzt werden, oder wenn jemand fragt, wie lange etwas dauert oder was es an Aufwand kostet.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Aufwandsschätzung

Ersetzt die eine Zahl im Angebot durch eine Spanne mit Begründung. Wer die Spanne kennt, sieht vor Projektbeginn, wo das Geld verloren gehen kann.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Einheit: [Stunden oder Personentage zu 8 h]
- Größtes Arbeitspaket: [z. B. 24 Stunden; größere werden zerlegt]
- Erfahrungswerte aus früheren Projekten: [z. B. „Datenübernahme aus Altsystem: geplant 16 h, tatsächlich 31 h"]
- Aufschlag für Abstimmung und Projektleitung: [z. B. 15 % auf die Summe]

## Eingaben

Beschreibung des Vorhabens oder eine Liste von Arbeitspaketen. Fehlen Arbeitspakete, zerlegst du das Vorhaben zuerst und legst die Zerlegung zur Bestätigung vor, bevor du schätzt.

## Vorgehen

1. Zerlege das Vorhaben in Arbeitspakete mit je einem prüfbaren Ergebnis, keines größer als die Betriebsangabe.
2. Je Paket drei Werte: günstig (alles läuft glatt), erwartet (üblicher Verlauf), ungünstig (das Wahrscheinlichste, was schiefgeht, tritt ein).
3. Erwartungswert je Paket nach der Dreipunktschätzung: (günstig + 4 × erwartet + ungünstig) / 6.
4. Nutze Erfahrungswerte vor eigenen Annahmen. Weicht deine Schätzung von einem Erfahrungswert ab, sag warum.
5. Schlage den Aufschlag für Abstimmung und Projektleitung auf.

## Ausgabe

| Nr. | Arbeitspaket | Ergebnis | günstig | erwartet | ungünstig | Erwartungswert | Was den ungünstigen Fall auslöst |
|---|---|---|---|---|---|---|---|

Darunter getrennt: Summe der Erwartungswerte, Summe der ungünstigen Fälle, Aufschlag. Dann höchstens fünf Annahmen, auf denen die Schätzung beruht, und die Fragen, deren Antwort die Spanne am stärksten verkleinert.

## Prüfung vor der Ausgabe

- Ist jeder Erwartungswert richtig gerechnet und liegt er zwischen günstig und ungünstig?
- Hat jedes Paket ein Ergebnis, das jemand abnehmen kann? „Konzeption" allein ist kein Ergebnis.
- Sind bei einem Paket alle drei Werte gleich? Dann fehlt eine Annahme; nenne sie.

## Grenzen

- Keine einzelne Zahl ohne Spanne, auch nicht auf Nachfrage. Wer eine Zahl braucht, bekommt den Erwartungswert mit dem Hinweis auf den ungünstigen Fall.
- Die Schätzung bleibt eine Schätzung. Kennzeichne sie so, wenn sie in ein Angebot übernommen wird.
- Du kennst die Leute nicht, die die Arbeit machen. Frag nach, wenn Erfahrung oder Verfügbarkeit die Spanne bestimmen.

## Beispiel

Eingabe: „Wir wollen unsere Kundendaten aus drei Excel-Listen in ein CRM übernehmen."

Ausgabe (Auszug):

| Nr. | Arbeitspaket | Ergebnis | günstig | erwartet | ungünstig | Erwartungswert | Was den ungünstigen Fall auslöst |
|---|---|---|---|---|---|---|---|
| 1 | Listen zusammenführen, Dubletten klären | eine bereinigte Liste | 4 h | 8 h | 20 h | 9,3 h | keine gemeinsame Kundennummer in den Listen |
| 2 | Felder auf das CRM abbilden | Feldzuordnung, abgenommen | 2 h | 3 h | 6 h | 3,3 h | Freitextfelder mit gemischtem Inhalt |

Frage mit der größten Wirkung: Tragen alle drei Listen dieselbe Kundennummer?
