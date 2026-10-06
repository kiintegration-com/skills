# Mitmachen

Danke, dass Sie die Skills besser machen wollen. Am meisten helfen:

- **Fehler melden**: eine falsche Rechnung, eine veraltete Vorschrift, ein Beispiel, das nicht aufgeht.
- **Rechtsstand nachziehen**: geänderte Steuersätze, Fristen, Stichtage der KI-Verordnung, Abweichungen in Österreich oder der Schweiz, mit Quelle.
- **Einen Skill vorschlagen**, den viele Betriebe brauchen und der hier fehlt.

Für alles davon reicht ein [Issue](https://github.com/kiintegration-com/skills/issues/new/choose). Pull Requests sind willkommen; bei einem neuen Skill bitte erst ein Issue, damit wir vor der Arbeit klären, ob er passt.

## Was ein Skill hier mitbringen muss

1. **Ein Ordner** `skills/<name>/` mit einer Datei `SKILL.md`. Der Name ist kebab-case, ohne Umlaute, höchstens 64 Zeichen, und steht gleich im Kopf unter `name`.
2. **Ein Kopf** mit `name`, `description`, `license: CC-BY-4.0` und `metadata` (`author`, `version`). Die `description` sagt in der dritten Person, was der Skill tut, und mit „Verwenden, wenn …", wann er gilt. Höchstens 1024 Zeichen, keine spitzen Klammern, kein Doppelpunkt mit Leerzeichen.
3. **Diese Abschnitte** in dieser Reihenfolge: `## Betriebsangaben`, `## Eingaben` (wenn nötig), `## Vorgehen`, `## Ausgabe`, `## Prüfung vor der Ausgabe`, `## Grenzen`, `## Beispiel`.
4. **Betriebsangaben in eckigen Klammern** mit Beispielwert, und der Satz, dass der Skill bei einer offenen Klammer fragt statt rät.
5. **Ein festes Ausgabeformat**, das jedes Mal gleich aussieht.
6. **Ein Beispiel**, dessen Zahlen stimmen. Wir rechnen nach.
7. **Ehrliche Grenzen**: was der Skill nicht tut und wann ein Mensch oder eine Fachperson entscheiden muss.
8. **Höchstens 500 Zeilen.** Was länger ist, gehört in `references/` neben die `SKILL.md`, mit einem Verweis, wann es zu lesen ist.

## Was hier nicht aufgenommen wird

- Skills, die über Menschen entscheiden oder sie bewerten: Bewerbungen sichten, Leistung beurteilen, Kreditwürdigkeit prüfen. Das sind Hochrisiko-Einsätze nach Anhang III der KI-Verordnung und gehören nicht in eine Textvorlage.
- Skills, die Rechts- oder Steuerberatung versprechen.
- Werbung für Produkte oder Dienstleister.

## Sprache

Deutsch, mit Umlauten. Kurze Sätze, Verb statt Substantivkette, Zahlen statt Adjektive. An das Modell im Du und im Imperativ („Prüfe …", „Nenne …"), an Menschen in Beispieltexten so, wie der Betrieb es festlegt.

## Vor dem Einreichen

```bash
node scripts/validate.mjs            # Kopf, Abschnitte, Links im Repo
node scripts/validate.mjs --extern   # zusätzlich Links nach außen
```

Testen Sie den Skill mit mindestens drei echten, unkritischen Fällen in Claude und in einem zweiten Werkzeug. Nennen Sie im Pull Request, womit Sie getestet haben.

## Woher die Skills kommen

Die Skills werden auf [kiintegration.com/prompts/skills](https://kiintegration.com/prompts/skills/) und hier gleichzeitig veröffentlicht. Angenommene Änderungen übernehmen wir in die Quelle der Website und spielen sie von dort zurück ins Repo; Ihr Beitrag bleibt in der Versionsgeschichte und im [CHANGELOG](CHANGELOG.md) genannt.

Mit einem Beitrag stimmen Sie zu, dass er unter denselben Lizenzen steht wie das Repo (CC BY 4.0 für Texte, MIT für Code).
