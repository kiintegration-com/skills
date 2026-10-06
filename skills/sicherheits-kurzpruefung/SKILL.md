---
name: sicherheits-kurzpruefung
description: Prüft selbst gebauten oder KI-erzeugten Code vor dem ersten Einsatz mit echten Daten auf die häufigsten Lücken (Zugriff ohne Anmeldung, ungeprüfte Eingaben, Geheimnisse im Code, Datenverlust, veraltete Abhängigkeiten) und nennt je Fund Datei, Zeile, schlimmsten Fall und kleinsten Fix. Verwenden, bevor ein Prototyp, Skript, eine interne Web-App oder eine Automatisierung mit Kundendaten, Zugangsdaten oder Geld arbeitet oder anderen zugänglich gemacht wird.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Sicherheits-Kurzprüfung

Ein Prototyp, der funktioniert, ist noch nicht betriebstauglich. Diese Prüfung findet die Lücken, die bei schnell gebautem Code fast immer auftreten. Sie ersetzt kein Audit.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Die Anwendung: [WAS SIE TUT, WER SIE NUTZT, WO SIE LÄUFT]
- Welche Daten sie verarbeitet: [z. B. Kundenanschriften, Preise, Zugangsdaten zum Buchhaltungssystem]
- Erreichbar aus: [nur lokal / Firmennetz / Internet]

## Eingaben

Der Code, am besten das ganze Projekt. Fehlen Teile (Konfiguration, Abhängigkeitsliste), nenne sie; was du nicht siehst, kannst du nicht freigeben.

## Vorgehen

Prüfe in dieser Reihenfolge, die schweren Fälle zuerst:

1. **Zugriff**: Kommt jemand ohne Anmeldung an Daten oder Funktionen? Sieht ein angemeldeter Nutzer fremde Daten, wenn er eine Nummer in der Adresse ändert?
2. **Eingaben**: Landen ungeprüfte Eingaben in Datenbankabfragen, Dateipfaden, Shell-Befehlen oder im HTML einer Seite?
3. **Geheimnisse**: Passwörter, API-Schlüssel oder Tokens im Code, im Repository, in Logs oder im Browser?
4. **Datenverlust**: Was passiert bei Absturz, Doppelklick, gleichzeitigem Zugriff? Gibt es eine Sicherung, und ist das Zurückspielen getestet?
5. **Abhängigkeiten**: veraltete, unbekannte oder ungenutzte Pakete. Kann das Werkzeug Befehle ausführen, lass `npm audit`, `pip-audit` oder Entsprechendes laufen.
6. **Fehlermeldungen**: Zeigen sie Nutzern interne Details (Pfade, SQL, Schlüssel)?

## Ausgabe

```
Urteil: einsatzbereit / einsatzbereit nach Fix von Nr. … / nicht einsatzbereit

| Nr. | Schwere | Datei:Zeile | Fund | schlimmster Fall | kleinster Fix |
```

Schwere: kritisch (sofort ausnutzbar, Daten weg oder offen), hoch, mittel, niedrig. Sortiert nach Schwere.

## Prüfung vor der Ausgabe

- Ist jeder Fund mit Datei und Zeile belegt?
- Ist der kleinste Fix etwas, das die Person mit ihrem Kenntnisstand umsetzen kann, oder steht dabei, dass sie Hilfe braucht?
- Hast du „keine Funde" nur geschrieben, wenn du den ganzen Code gesehen hast?

## Grenzen

- Diese Prüfung ersetzt kein Audit und keinen Penetrationstest. Bei Anwendungen im Internet mit Kundendaten oder Zahlungen gehört eine fachkundige Prüfung dazu.
- Sei streng. Ein falsches „einsatzbereit" kostet mehr als ein unnötiger Fix.
- Du prüfst nur Code, den du siehst. Server, Hosting und Konten außerhalb des Codes prüfst du nicht.

## Beispiel

Eingabe: kleine Flask-App „Urlaubsplaner", im Firmennetz, Anmeldung über ein gemeinsames Passwort.

Ausgabe (Auszug):

```
Urteil: einsatzbereit nach Fix von Nr. 1 und 2

| Nr. | Schwere | Datei:Zeile | Fund | schlimmster Fall | kleinster Fix |
| 1 | kritisch | app.py:41 | SQL aus Eingabe zusammengesetzt: f"... WHERE name = '{name}'" | jeder im Netz liest oder löscht alle Einträge | Platzhalter verwenden: cursor.execute("... WHERE name = ?", (name,)) |
| 2 | hoch | config.py:3 | Passwort im Code, liegt im Git-Repository | wer das Repository sieht, kommt hinein | in Umgebungsvariable verschieben, Passwort ändern |
| 3 | mittel | – | keine Sicherung der SQLite-Datei | Urlaubsplanung nach Festplattenschaden verloren | tägliche Kopie auf das Netzlaufwerk |
```
