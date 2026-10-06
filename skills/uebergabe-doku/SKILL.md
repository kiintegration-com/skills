---
name: uebergabe-doku
description: Schreibt zu selbst gebautem oder KI-erzeugtem Code eine Übergabe-Dokumentation (Zweck, Starten auf einem neuen Rechner, Konfiguration ohne Geheimnisse, Datenablage und Sicherung, bekannte Schwächen), nur aus dem, was im Code steht. Verwenden, wenn ein Prototyp, Skript oder internes Werkzeug an Kollegen, einen Dienstleister oder das eigene spätere Ich übergeben wird, oder wenn eine README fehlt.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Übergabe-Dokumentation

In einem Jahr fragt jemand, wie das Werkzeug funktioniert, und niemand weiß es mehr. Diese Dokumentation beantwortet die Frage, solange der Code noch frisch ist.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Verantwortlich für das Werkzeug: [NAME, VERTRETUNG]
- Wo Zugangsdaten verwahrt werden: [z. B. Passwortmanager, Tresor „IT"]

## Eingaben

Der Code, am besten das ganze Projekt mit Konfigurationsdateien und Abhängigkeitsliste.

## Vorgehen

1. Lies den Code vollständig, bevor du schreibst. Starte ihn, wenn das Werkzeug Befehle ausführen kann, und prüfe die Startanleitung am Ergebnis.
2. Schreib die README mit den Abschnitten unten. Jeder Satz muss sich am Code belegen lassen.
3. Was du nicht prüfen kannst (Server, Zugänge, Absprachen), markierst du mit [UNGEPRÜFT].
4. Geheimnisse nennst du nur mit Namen und Ablageort, nie mit Wert.

## Ausgabe

Eine Datei `README.md`:

```
# Name des Werkzeugs

Zweck in zwei Sätzen. Verantwortlich: …

## Starten
Voraussetzungen und Befehle, Schritt für Schritt, für einen neuen Rechner.

## Konfiguration
| Einstellung | Wofür | Wo gesetzt | Beispielwert (kein echter) |

## Daten
Wo sie liegen, wie man sichert, wie man zurückspielt.

## Bekannte Schwächen
Wo es kaputtgeht und was dann zu tun ist.

## Änderungen
Datum, Name, was.
```

## Prüfung vor der Ausgabe

- Kann jemand ohne Vorwissen das Werkzeug nach dem Abschnitt „Starten" auf einem neuen Rechner starten? Geh jeden Schritt gedanklich durch.
- Steht irgendwo ein echter Schlüssel, ein Passwort oder eine personenbezogene Angabe? Dann ersetzen.
- Ist jede Einstellung aus dem Code in der Tabelle?

## Grenzen

- Nur, was im Code steht. Gute Absichten des Entwicklers sind keine Dokumentation.
- Die README ersetzt keine Sicherheitsprüfung (Skill `sicherheits-kurzpruefung`).

## Beispiel

Eingabe: Ordner `stundenauswertung/` mit `auswerten.py`, `requirements.txt`, `.env.example`.

Ausgabe (Auszug):

```
## Konfiguration
| Einstellung | Wofür | Wo gesetzt | Beispielwert (kein echter) |
| QUELL_ORDNER | Ordner mit den Stundenzetteln | .env | Z:\Stunden\2026 |
| SMTP_PASSWORT | Versand der Auswertung per Mail | .env, Wert im Passwortmanager „IT" | – |

## Bekannte Schwächen
- Eine geöffnete Excel-Datei im Quellordner bricht den Lauf ab (auswerten.py:58). Datei schließen, neu starten.
- Kein Schutz gegen doppelte Stundenzettel [UNGEPRÜFT, ob das vorkommt].
```
