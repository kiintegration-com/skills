# Skills in ChatGPT, Gemini und Copilot

Eine `SKILL.md` ist gewöhnlicher Text. Claude liest den Kopf zwischen den Strichen, um zu entscheiden, wann der Skill gilt; die anderen Werkzeuge kennen dieses Format nicht, verstehen den Text aber genauso. Dort wirkt er als dauerhafte Anweisung für einen Arbeitsbereich.

Die Menüs der Anbieter ändern sich mit fast jeder Version. Deshalb steht hier der Name der Funktion und das Feld, in das der Text gehört, nicht jeder Klick.

## Vorher: Betriebsangaben ausfüllen

Füllen Sie im Abschnitt „Betriebsangaben" aus, was Sie schon wissen. Was offen bleibt, fragt der Skill beim ersten Einsatz ab. In ChatGPT, Gemini und Copilot bleibt die Antwort aber nur in diesem einen Chat; tragen Sie sie danach in die Anweisungen nach, sonst fragt der Skill im nächsten Chat erneut.

## ChatGPT

**Projekt** (empfohlen, wenn mehrere Skills zusammen gelten sollen):

1. Ein Projekt anlegen, zum Beispiel „Buchhaltung".
2. In die Anweisungen des Projekts den Text der `SKILL.md` einfügen. Mehrere Skills: nacheinander einfügen, jeweils mit ihrer Überschrift.
3. Jeder Chat in diesem Projekt arbeitet nach diesen Regeln.

**Eigener GPT** (wenn ein Skill im Team geteilt werden soll):

1. Einen GPT erstellen und im Bereich „Konfigurieren" den Text in das Feld für Anweisungen einfügen.
2. Den Abschnitt „Beispiel" können Sie zusätzlich als Datei unter Wissen hochladen, wenn das Anweisungsfeld zu kurz wird.
3. Im Team teilen.

Für Kunden- oder Beschäftigtendaten nur einen Tarif nutzen, für den ein Vertrag zur Auftragsverarbeitung besteht, und das Training mit Ihren Eingaben abschalten.

## Google Gemini

1. Einen **Gem** anlegen.
2. Den Text der `SKILL.md` in die Anweisungen des Gems einfügen.
3. Den Gem für jede Aufgabe dieser Art öffnen.

In Google Workspace gelten die Datenschutzzusagen des Workspace-Vertrags; im privaten Konto nicht.

## Microsoft 365 Copilot

1. Einen **Agent** anlegen (im Copilot-Chat oder in Copilot Studio).
2. Den Text der `SKILL.md` in die Anweisungen des Agents einfügen.
3. Wo der Skill auf Unterlagen arbeitet (etwa `antworten-aus-unterlagen`), die Dateien oder die SharePoint-Bibliothek als Wissensquelle hinzufügen.

Der Agent sieht nur, worauf die Person, die ihn nutzt, ohnehin Zugriff hat.

## Jedes andere Modell

Den Text der `SKILL.md` vor den eigentlichen Auftrag kopieren. Er gilt dann für diesen Chat. Für Modelle auf eigenem Rechner (etwa über Ollama oder LM Studio) gehört er in den Systemprompt.

## Was verloren geht

Claude lädt einen Skill nur, wenn die Aufgabe dazu passt, und kann viele Skills gleichzeitig bereithalten. In den anderen Werkzeugen steht der ganze Text immer in den Anweisungen. Legen Sie deshalb lieber mehrere kleine Projekte, Gems oder Agents mit je zwei, drei Skills an als einen mit allen.
