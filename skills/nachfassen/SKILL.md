---
name: nachfassen
description: Schreibt Nachfass-Nachrichten zu offenen Angeboten und Anfragen, jede mit neuem Anlass statt bloßer Erinnerung, höchstens drei je Vorgang. Verwenden, wenn ein Angebot unbeantwortet ist, ein Interessent sich nicht meldet oder jemand eine Erinnerungsmail, ein Follow-up oder eine kurze Nachfrage an einen Kunden schreiben will.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Nachfassen

Angebote bleiben liegen, weil niemand gern erinnert. Dieser Skill schreibt die zweite und dritte Nachricht so, dass sie dem Kunden etwas bringen, statt zu drängen.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Abstand: [z. B. zweite Nachricht nach 5 Werktagen, dritte nach weiteren 10]
- Anrede: [Sie oder du]
- Signatur: [NAME, FUNKTION, TELEFON]
- Anlässe, die wir anbieten können: [z. B. Termin vor Ort, Referenz aus derselben Branche, Variante mit kleinerem Umfang, Hinweis auf Lieferzeit]

Gibt es den Skill `hausstil`, gelten seine Regeln für Ton und Wortwahl.

## Eingaben

Das ursprüngliche Angebot oder die Anfrage mit Datum, bisherige Nachrichten und alles, was seitdem passiert ist: Preisänderung, freie Termine, eine Rückfrage des Kunden.

## Vorgehen

1. Stell fest, die wievielte Nachricht es wird. Nach der dritten schreibst du keine weitere, sondern schlägst vor, den Vorgang zu schließen.
2. Wähle einen Anlass, der dem Kunden etwas Neues gibt: eine Information, eine Entscheidungshilfe, einen konkreten Termin. „Ich wollte nur nachhören" ist kein Anlass.
3. Schreib höchstens 80 Wörter und am Ende eine Frage, die sich mit einem Satz beantworten lässt.
4. Die dritte Nachricht bietet ausdrücklich an, das Thema zu schließen („Passt es gerade nicht, ist das auch eine Antwort").

## Ausgabe

```
Betreff: …
Text: …
Anlass: … (eine Zeile, nicht zum Versand)
Nächster Schritt: Datum der nächsten Nachricht oder „Vorgang schließen"
```

## Prüfung vor der Ausgabe

- Unter 80 Wörtern, genau eine Frage?
- Kein künstlicher Druck: keine erfundene Frist, kein „nur noch heute", kein Rabatt, der nicht freigegeben ist.
- Steht etwas drin, das der Kunde schon weiß? Dann streichen.

## Grenzen

- Nachfassen bezieht sich nur auf das angefragte Angebot. Werbung für andere Leistungen per Mail braucht eine Einwilligung (§ 7 UWG); die schreibt dieser Skill nicht.
- Keine Zusage zu Preis oder Termin, die nicht im Angebot oder in den Eingaben steht.

## Beispiel

Eingabe: „Angebot Wartungsvertrag an Praxis Dr. Berger, am 12.09. verschickt, keine Antwort. Am 21.10. ist ein Techniker in der Nähe."

Ausgabe:

```
Betreff: Wartung Ihrer Praxis – Termin am 21. Oktober möglich
Text: Guten Tag Frau Dr. Berger, am 21. Oktober ist unser Techniker bei Ihnen in der Nähe. Geben Sie den Wartungsvertrag bis dahin frei, übernimmt er die Erstprüfung gleich mit, ohne eigene Anfahrt. Soll ich den Termin für Sie vormerken? Viele Grüße, …
Anlass: freier Termin in der Nähe, Anfahrt entfällt
Nächster Schritt: dritte Nachricht am 02.11. oder Vorgang schließen
```
