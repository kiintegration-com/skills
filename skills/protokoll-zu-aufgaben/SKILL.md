---
name: protokoll-zu-aufgaben
description: Macht aus Besprechungsnotizen, Transkripten oder Sprachmemos ein Ergebnisprotokoll mit Beschlüssen, Aufgaben (Verantwortliche, Fälligkeit) und offenen Fragen, ohne Aufgaben oder Namen zu erfinden. Verwenden nach jeder Besprechung, jedem Kundentermin, jeder Teamrunde oder jedem Telefonat, wenn jemand Notizen, ein Transkript oder eine Mitschrift zusammenfassen oder in To-dos verwandeln will.
license: CC-BY-4.0
metadata:
  author: kiintegration.com
  version: "1.0.0"
---

# Protokoll zu Aufgaben

Das Ergebnis einer Besprechung verschwindet sonst in einer Notiz. Dieser Skill macht daraus Aufgaben, die jemandem gehören und ein Datum haben.

## Betriebsangaben

Diese Angaben trägt der Betrieb einmal ein. Steht hier noch eine eckige Klammer, frag beim ersten Einsatz danach und sag, wo die Angabe hingehört. Rate keine Betriebsangabe.

- Kürzel und Namen im Team: [z. B. AR = Anna Roth, MK = Mehmet Kaya]
- Ziel der Aufgaben: [z. B. Tabelle zum Einfügen in Planner, Trello, Excel]

## Eingaben

Notizen, Transkript oder Mitschrift, dazu Datum und Teilnehmende der Besprechung. Fehlt das Datum, frag danach, bevor du Fristen rechnest.

## Vorgehen

1. Lies alles einmal ganz, bevor du schreibst. Ein später Satz hebt oft einen früheren Beschluss auf.
2. Beschlüsse: was entschieden ist, je ein Satz. Nur, was entschieden ist, nicht, was diskutiert wurde.
3. Aufgaben: jede mit einem Verb am Anfang, einer verantwortlichen Person und einem Datum. Relative Angaben („bis nächste Woche") rechnest du vom Besprechungsdatum aus und zeigst die Umrechnung.
4. Offene Fragen: was ungeklärt blieb, und wer es klären soll, wenn das genannt ist.

## Ausgabe

```
Besprechung: Thema, Datum, Teilnehmende

Beschlüsse
1. …

Aufgaben
| Nr. | Aufgabe | verantwortlich | fällig am | Quelle |

Offene Fragen
- … (klärt: …)
```

Die Spalte „Quelle" zitiert die Stelle der Notiz in wenigen Wörtern, damit sich jede Aufgabe nachprüfen lässt.

## Prüfung vor der Ausgabe

- Ist jede verantwortliche Person in den Notizen genannt? Wenn nicht, steht dort „offen".
- Hat jede Aufgabe ein Datum oder „ohne Termin"?
- Gibt es eine Aufgabe ohne Stelle in den Notizen? Dann streichen.

## Grenzen

- Du erfindest weder Aufgaben noch Verantwortliche noch Termine. Unklares steht unter offene Fragen.
- Transkripte enthalten oft Namen und Gesprächsinhalte Dritter. Kläre vorher, ob sie in das genutzte Werkzeug dürfen (Skill `dsgvo-vorpruefung`).

## Beispiel

Eingabe: „Teamrunde 06.10.2026, AR, MK, JS. Messestand Hannover: wir machen es. MK holt bis Freitag zwei Angebote für den Standbau. Flyer? JS kümmert sich irgendwann. Budget noch offen, Chef fragen."

Ausgabe:

```
Besprechung: Teamrunde, 06.10.2026, Anna Roth, Mehmet Kaya, J. S.

Beschlüsse
1. Wir nehmen mit einem Stand an der Messe in Hannover teil.

Aufgaben
| Nr. | Aufgabe | verantwortlich | fällig am | Quelle |
| 1 | Zwei Angebote für den Standbau einholen | Mehmet Kaya | 09.10.2026 (Freitag nach dem 06.10.) | „MK holt bis Freitag" |
| 2 | Flyer für die Messe erstellen | J. S. | ohne Termin | „JS kümmert sich irgendwann" |

Offene Fragen
- Budget für den Messestand (klärt: Geschäftsleitung)
```

Hinweis: Das Kürzel JS fehlt in der Teamliste. Bitte ergänzen.
