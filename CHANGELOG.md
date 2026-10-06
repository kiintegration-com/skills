# Änderungen

Alle nennenswerten Änderungen an diesem Repo. Format nach [Keep a Changelog](https://keepachangelog.com/de/1.1.0/), Versionen nach [Semantic Versioning](https://semver.org/lang/de/): Eine neue Hauptversion ändert Namen oder Ausgabeformat eines Skills, eine Nebenversion bringt neue Skills oder Abschnitte, eine Fehlerkorrektur ändert Inhalt ohne das Format.

## [1.0.0] – 2026-10-06

Erste öffentliche Fassung.

### Neu

- 20 Skills im Agent-Skills-Format, Rechtsstand Oktober 2026:
  - Angebot und Verkauf: `kalkulationsschema`, `aufwandsschaetzung`, `nachfassen`, `ausschreibung-pruefen`
  - Einkauf und Buchhaltung: `rechnungspruefung`, `zahlungserinnerung`, `angebotsvergleich`
  - Kommunikation und Organisation: `hausstil`, `anfragen-sortieren`, `protokoll-zu-aufgaben`, `fristenwaechter`
  - Daten und Wissen: `tabelle-saeubern`, `kennzahlen-bericht`, `antworten-aus-unterlagen`
  - Datenschutz und KI-Verordnung: `dsgvo-vorpruefung`, `pseudonymisieren`, `ki-vo-einordnung`
  - Eigene Werkzeuge bauen: `spec-vor-code`, `sicherheits-kurzpruefung`, `uebergabe-doku`
- Plugin-Marktplatz für Claude Code (`/plugin marketplace add kiintegration-com/skills`).
- Anleitung für ChatGPT, Gemini und Microsoft 365 Copilot.
- Prüfskript `scripts/validate.mjs` und Prüfung bei jedem Push.
- ZIP je Skill an jedem Release, zum Hochladen in Claude.ai.

[1.0.0]: https://github.com/kiintegration-com/skills/releases/tag/v1.0.0
