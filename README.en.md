<p align="center">
  <a href="https://kiintegration.com/?utm_source=github&utm_medium=referral&utm_campaign=skills">
    <img src="assets/og.png" alt="kiintegration.com, the register of AI implementation partners in Germany, Austria and Switzerland" width="100%">
  </a>
</p>

<h1 align="center">Skills for SMEs</h1>

<p align="center">
  20 ready-to-use skills for Claude, ChatGPT, Gemini and Copilot, written for small and mid-sized businesses in Germany, Austria and Switzerland.<br>
  <a href="README.md">Deutsch</a> · English
</p>

---

The skills are written in German, because the businesses they are for work in German and under German, Austrian or Swiss law. This page explains what they are and how to install them.

## What a skill does here

Each skill is a single `SKILL.md` file in the [Agent Skills](https://agentskills.io) format: a short header (`name`, `description`) that tells Claude when to use it, followed by instructions with a fixed output format, a self-check, an example and stated limits. Anything only the business knows (hourly rate, people in charge, tolerances) sits in a section called *Betriebsangaben* in square brackets; while a bracket is empty, the skill asks instead of guessing.

| Area | Skills |
|---|---|
| Quotes and sales | cost calculation, effort estimation, follow-ups, tender review |
| Purchasing and accounting | incoming invoice check (§ 14 UStG), payment reminders with default interest (§§ 286, 288 BGB), comparing supplier offers |
| Communication and organisation | house style, inbox triage with escalation rules, meeting notes to tasks, deadline finder (§§ 187 ff. BGB) |
| Data and knowledge | spreadsheet cleaning, KPI report with fixed formulas, answers grounded in your own documents |
| Data protection and the EU AI Act | GDPR pre-check, pseudonymisation, AI Act classification |
| Building your own tools | spec before code, security quick check, handover documentation |

The full list with links is in the [German README](README.md#alle-skills).

## Install

**Claude Code, as a plugin**

```text
/plugin marketplace add kiintegration-com/skills
/plugin install kmu-skills@kiintegration
```

**Claude Code, single skills:** copy a folder from `skills/` to `~/.claude/skills/`.

**Claude.ai and Claude Desktop:** zip a skill folder (or take the zip from a [release](https://github.com/kiintegration-com/skills/releases)) and upload it under Skills in the settings. Code execution must be enabled.

**ChatGPT, Gemini, Microsoft 365 Copilot:** paste the content of a `SKILL.md` into the instructions of a project, custom GPT, Gem or Copilot agent. See [docs/andere-werkzeuge.md](docs/andere-werkzeuge.md).

## Limits

The skills cite the law they rely on and mark edge cases, but they are not legal or tax advice. None of them makes decisions about people (hiring, performance, credit); such uses are high-risk under Annex III of the EU AI Act. Personal data belongs only in tools covered by a data processing agreement.

## About

Maintained by [kiintegration.com](https://kiintegration.com/?utm_source=github&utm_medium=referral&utm_campaign=skills), the register of AI agencies and service providers in Germany, Austria and Switzerland.

## License

Skills and texts: [CC BY 4.0](LICENSE). Scripts and workflows: [MIT](LICENSE-CODE). When you publish or redistribute the skills, credit *"Skills für KMU" by kiintegration.com, CC BY 4.0*.
