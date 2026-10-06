---
name: dsgvo-vorpruefung
description: Prüft vor dem Einsatz eines KI-Werkzeugs, welche personenbezogenen Daten im Material stecken, ob besondere Kategorien nach Art. 9 DSGVO dabei sind, ob die Aufgabe ohne sie geht und was vorher zu klären ist (Auftragsverarbeitung, Drittland, Training, Information der Betroffenen). Verwenden, bevor Kunden-, Beschäftigten-, Patienten- oder Bewerberdaten in ChatGPT, Claude, Copilot, Gemini oder ein anderes Modell gegeben werden, oder wenn jemand fragt, ob er etwas einfügen darf.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# DSGVO-Vorprüfung

Die Frage „Darf ich das hier einfügen?" stellt im Alltag kaum jemand. Dieser Skill stellt sie vor jedem Einsatz mit echten Daten und sagt, was vorher zu klären ist.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Genutztes Werkzeug und Tarif: [z. B. Claude Team, ChatGPT Enterprise, Microsoft 365 Copilot]
- Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO) abgeschlossen: [ja, Datum / nein / unbekannt]
- Verarbeitungsort laut Vertrag: [z. B. EU, USA mit Data Privacy Framework]
- Nutzung der Eingaben zum Training: [abgeschaltet / unbekannt]
- Datenschutzbeauftragte Person: [NAME ODER „keine"]

## Eingaben

Die geplante Aufgabe in einem Satz und das Material oder eine Beschreibung davon. Echte Daten musst du dafür nicht sehen; eine Beschreibung der Spalten oder ein Muster mit erfundenen Werten reicht.

## Vorgehen

1. **Daten finden**: Namen, Kontaktdaten, Kennnummern (Kunden-, Personal-, Versicherungsnummer), Bankdaten, Standort, Fotos, Stimmen, freie Texte über Personen.
2. **Besondere Kategorien** nach Art. 9 DSGVO: Gesundheit, Religion, Gewerkschaft, ethnische Herkunft, politische Meinung, Sexualleben, biometrische und genetische Daten. Jede Fundstelle nennen.
3. **Datensparsamkeit**: Geht die Aufgabe ohne Personenbezug, mit Platzhaltern oder nur mit Spalten ohne Namen? Wenn ja, wie genau (Skill `pseudonymisieren`).
4. **Voraussetzungen** gegen die Betriebsangaben prüfen: Auftragsverarbeitung, Drittlandübermittlung (Art. 44 ff. DSGVO), Training abgeschaltet, Rechtsgrundlage für den Zweck, Information der Betroffenen (Art. 13, 14).
5. **Hohes Risiko**: Bewertung von Personen, Beschäftigtendaten in großem Umfang, besondere Kategorien in großem Umfang. Dann den Hinweis auf eine Datenschutz-Folgenabschätzung (Art. 35).
6. Entscheidet die Aufgabe über Menschen (Bewerbung, Kredit, Leistung), auch den Skill `ki-vo-einordnung` nennen.

## Ausgabe

```
Ergebnis: Einsetzen / Einsetzen nach Klärung / So nicht einsetzen

Gefundene Daten: … (mit Fundstelle oder Spalte)
Besondere Kategorien: keine / …
Ohne Personenbezug möglich: ja, so: … / nein, weil …
Vor dem Einsatz klären:
- [ ] …
Mit der datenschutzbeauftragten Person klären: …
```

## Prüfung vor der Ausgabe

- Hast du auch Freitextfelder und Dateinamen durchsucht? Dort stehen oft Gesundheitsangaben („krank seit …").
- Ist jeder Punkt der Checkliste etwas, das jemand im Betrieb erledigen kann?

## Grenzen

- Keine Rechtsberatung. Bist du unsicher, schreib: „Mit der datenschutzbeauftragten Person oder einer Fachkanzlei klären."
- Du prüfst den Vertrag des Anbieters nicht; du fragst, ob er vorliegt.
- Diese Vorprüfung selbst sollte mit Beschreibungen oder Mustern laufen, nicht mit den echten Daten.

## Beispiel

Eingabe: „Wir wollen die Krankmeldungen des letzten Jahres mit ChatGPT auswerten, um Ausfallmuster zu sehen. Tarif: ChatGPT Plus."

Ausgabe:

```
Ergebnis: So nicht einsetzen

Gefundene Daten: Namen, Personalnummern, Zeiträume der Arbeitsunfähigkeit
Besondere Kategorien: ja, Gesundheitsdaten (Art. 9 DSGVO), Beschäftigtendaten
Ohne Personenbezug möglich: ja, so: Ausfalltage je Abteilung und Kalenderwoche als Summen auswerten, ohne Namen und Personalnummern
Vor dem Einsatz klären:
- [ ] Ein Privatkonto-Tarif ohne Vertrag zur Auftragsverarbeitung ist für Beschäftigtendaten ungeeignet; Geschäftstarif mit AV-Vertrag prüfen
- [ ] Betriebsrat beteiligen, falls vorhanden (Auswertung von Beschäftigtendaten)
Mit der datenschutzbeauftragten Person klären: ob schon die Summen je Abteilung bei kleinen Abteilungen auf Einzelne schließen lassen
```
