---
name: hausstil
description: Legt Anrede, Tonfall, Schreibweisen, verbotene Wörter, Grußformel und Signatur eines Betriebs fest und wendet sie auf jeden Text an, der nach außen geht. Verwenden bei jeder Mail, jedem Angebotstext, jeder Kundenantwort, jedem Beitrag oder Webtext im Namen des Betriebs, und wenn jemand einen Text umformulieren, glätten oder „in unserem Stil" schreiben lassen will.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Hausstil

Sobald mehr als eine Person nach außen schreibt, klingt der Betrieb sonst nach mehreren Betrieben. Dieser Skill hält Anrede, Ton und Schreibweisen fest.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Anrede: [Sie oder du; Kunden mit Nachnamen, wenn bekannt]
- Region und Rechtschreibung: [DE, AT (z. B. „Jänner") oder CH (ss statt ß)]
- Tonfall in drei Wörtern: [z. B. sachlich, freundlich, knapp]
- Geschlechtergerechte Sprache: [z. B. Doppelnennung, neutrale Formen, keine Sonderzeichen]
- Wörter, die wir nicht verwenden: [z. B. „zeitnah", „leider", „Problem" → „Frage"]
- Begriffe, die wir genau so schreiben: [PRODUKTNAMEN, FACHBEGRIFFE]
- Datum, Beträge, Telefon: [z. B. 6. Oktober 2026 · 1.234,56 EUR · +49 221 123456]
- Grußformel und Signatur: [GRUSS, NAME, FUNKTION, TELEFON]
- Ein Text, der genau richtig klingt: [BEISPIELTEXT]

## Vorgehen

1. Schreib oder überarbeite den Text nach den Betriebsangaben. Das Beispiel ist der Maßstab für den Klang.
2. Sätze unter 20 Wörtern. Ein Gedanke je Satz. Verb statt Substantivkette: „Wir prüfen die Rechnung", nicht „Die Prüfung der Rechnung erfolgt".
3. Das Wichtigste steht im ersten Satz: Antwort, Termin oder Bitte.
4. Keine Zusage zu Preis, Termin oder Gewährleistung, die nicht in den Eingaben steht.

## Ausgabe

Der fertige Text. Darunter, abgesetzt, eine Zeile „Angepasst:" mit den Änderungen gegenüber der Vorlage (zum Beispiel „‚zeitnah' → ‚bis Freitag', Anrede auf Sie"). Bei einem neuen Text entfällt die Zeile.

## Prüfung vor der Ausgabe

- Liste der verbotenen Wörter durchgehen, Wort für Wort.
- Anrede durchgehend gleich, auch in Betreff und Gruß?
- Region beachtet: In der Schweiz kein ß.
- Beträge und Daten im festgelegten Format?

## Grenzen

- Der Skill regelt den Ton, nicht den Inhalt. Fakten, Preise und Zusagen kommen aus den Eingaben.
- Rechtlich verbindliche Texte (AGB, Kündigungen, Abmahnungen) glättet er nicht. Dort zählt der Wortlaut.

## Beispiel

Eingabe: „Umschreiben: ‚Leider können wir Ihre Anfrage zeitnah nicht bearbeiten, da unser Team ausgelastet ist. Wir melden uns.'" (Hausstil: Sie, sachlich und freundlich, ohne „leider" und „zeitnah".)

Ausgabe:

> Guten Tag Herr Albers, Ihre Anfrage ist angekommen. Wir melden uns bis Donnerstag, 9. Oktober, mit einem Terminvorschlag.
>
> Viele Grüße
> Jana Roth, Kundenservice

Angepasst: „leider" und „zeitnah" gestrichen, „Wir melden uns" mit Datum, Begründung zur Auslastung weggelassen. Das Datum bitte bestätigen.
