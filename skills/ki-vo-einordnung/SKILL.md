---
name: ki-vo-einordnung
description: Ordnet einen geplanten oder laufenden KI-Einsatz im Betrieb nach der EU-KI-Verordnung (AI Act) ein, prüft verbotene Praktiken (Art. 5), Hochrisiko-Bereiche nach Anhang III, Transparenzpflichten (Art. 50) und die Pflicht zur KI-Kompetenz (Art. 4) und nennt die Rolle des Betriebs (Betreiber oder Anbieter). Verwenden, wenn jemand fragt, ob ein KI-Werkzeug, Chatbot oder eine Automatisierung erlaubt ist, welche Pflichten daraus folgen, oder bevor KI in Personal, Kredit, Bildung oder Kundenkontakt eingesetzt wird.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# KI-VO-Einordnung

Die meisten KI-Einsätze im Mittelstand sind nach der KI-Verordnung unkritisch, einige wenige nicht. Dieser Skill sortiert einen Einsatz ein und sagt, welche Pflichten daraus folgen und welche nicht.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Eingesetzte KI-Werkzeuge: [z. B. Microsoft 365 Copilot, Chatbot auf der Website, Belegerkennung in der Buchhaltung]
- Selbst entwickelte oder unter eigenem Namen angebotene KI: [ja, welche / nein]
- Schulung der Beschäftigten zu KI: [z. B. Unterweisung am 15.03.2026 / keine]
- Ansprechperson für KI-Fragen: [NAME]

## Eingaben

Der Einsatz in wenigen Sätzen: Was tut das System, wer nutzt es, wen betrifft das Ergebnis, entscheidet es über Menschen oder bereitet es nur vor?

## Vorgehen

1. **Rolle**: Betreiber (nutzt ein fremdes System unter eigener Aufsicht) oder Anbieter (entwickelt oder bringt unter eigenem Namen in Verkehr). Wer ein Hochrisiko-System wesentlich verändert oder für einen Hochrisiko-Zweck umwidmet, kann selbst Anbieter werden.
2. **Verbotene Praktiken** (Art. 5): unter anderem unterschwellige Manipulation, Ausnutzen von Schwächen, Social Scoring, Emotionserkennung am Arbeitsplatz und in Bildungseinrichtungen (außer aus medizinischen oder Sicherheitsgründen), ungezieltes Auslesen von Gesichtsbildern. Trifft eines zu: Ergebnis „verboten", Prüfung endet.
3. **Hochrisiko** (Anhang III): Prüfe die Bereiche biometrische Identifizierung, kritische Infrastruktur, Bildung, **Beschäftigung und Personalmanagement** (Stellenanzeigen gezielt ausspielen, Bewerbungen sichten oder bewerten, Entscheidungen über Beförderung, Kündigung, Aufgabenzuteilung, Leistungsüberwachung), Zugang zu wichtigen Leistungen (Kreditwürdigkeit, Lebens- und Krankenversicherungstarife, öffentliche Leistungen), Strafverfolgung, Migration, Justiz und Wahlen.
4. **Transparenz** (Art. 50): Chatbots müssen sich als KI zu erkennen geben; KI-erzeugte oder manipulierte Bilder, Töne und Videos (Deepfakes) sind zu kennzeichnen; KI-Texte, die die Öffentlichkeit über Angelegenheiten von öffentlichem Interesse informieren, ebenso, sofern kein Mensch sie redaktionell verantwortet.
5. **KI-Kompetenz** (Art. 4, gilt seit 2. Februar 2025): Wer KI-Systeme einsetzt, sorgt dafür, dass die Beschäftigten, die damit arbeiten, ausreichend geschult sind. Gilt für jeden Einsatz.
6. **Daneben**: DSGVO, Arbeitsrecht (Mitbestimmung bei technischer Überwachung), Urheberrecht. Nur nennen, nicht prüfen; für die DSGVO den Skill `dsgvo-vorpruefung`.

## Ausgabe

```
Einsatz: … (ein Satz)
Rolle des Betriebs: Betreiber / Anbieter
Einstufung: verboten / Hochrisiko (Anhang III, Bereich …) / Transparenzpflicht / geringes Risiko
Begründung: zwei bis vier Sätze mit Artikel
Pflichten daraus:
- [ ] …
Daneben zu beachten: …
Stand der Fristen prüfen: ja
```

## Prüfung vor der Ausgabe

- Hast du bei Personal- und Kundenthemen jeden Unterpunkt von Anhang III Nr. 4 und Nr. 5 geprüft?
- Steht bei jeder Pflicht der Artikel?
- Hast du die KI-Kompetenz genannt? Sie gilt immer.

## Grenzen

- Keine Rechtsberatung. Eine Einstufung als Hochrisiko oder ein Grenzfall gehört zu einer Fachkanzlei oder zur zuständigen Stelle; in Deutschland ist die Bundesnetzagentur als Marktüberwachung vorgesehen.
- Die Stichtage für Hochrisiko-Pflichten werden in der EU derzeit neu verhandelt. Nenne keinen Stichtag für Anhang III als sicher, sondern verweise auf den aktuellen Stand im Amtsblatt.
- Dieser Skill trifft selbst keine Entscheidung über Menschen und eignet sich nicht dazu, Bewerbungen oder Beschäftigte zu bewerten.

## Beispiel

Eingabe: „Wir wollen eingehende Bewerbungen von einer KI vorsortieren lassen: passt, passt vielleicht, passt nicht."

Ausgabe:

```
Einsatz: KI sortiert Bewerbungen nach Eignung vor.
Rolle des Betriebs: Betreiber (fremdes Werkzeug), Anbieter, falls selbst gebaut
Einstufung: Hochrisiko (Anhang III Nr. 4 a, Sichten und Bewerten von Bewerbungen)
Begründung: Das System bewertet Bewerbende und beeinflusst, wer eingeladen wird. Genau das nennt Anhang III Nr. 4 a.
Pflichten daraus:
- [ ] Nur ein System einsetzen, dessen Anbieter die Hochrisiko-Anforderungen erfüllt (Konformität, Gebrauchsanweisung)
- [ ] Menschliche Aufsicht durch geschulte Person, die Ergebnisse überstimmen kann (Art. 26)
- [ ] Betroffene und Betriebsrat informieren (Art. 26 Abs. 7, 11)
- [ ] Protokolle aufbewahren (Art. 26 Abs. 6)
- [ ] KI-Kompetenz der Personalabteilung sicherstellen (Art. 4)
Daneben zu beachten: DSGVO (Art. 22, automatisierte Entscheidung), AGG, Mitbestimmung (§ 87 Abs. 1 Nr. 6 BetrVG)
Stand der Fristen prüfen: ja
```
