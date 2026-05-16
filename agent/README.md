# Agent Guidance

This directory contains repo-local instructions for Codex.

## Skills

Create skills under `agent/skills/[skill-name]/SKILL.md`.

Each skill should include YAML frontmatter with `name` and `description`, followed by concise Markdown instructions. The description should explain when Codex should use the skill.

Ask Codex to use a skill explicitly, for example:

```txt
Use agent/skills/spec to write an implementation spec for search.
```

Current repo-local skills:

- `spec` - create feature implementation specs under `docs/feature-implementation`.
- `session-summary` - capture short draft summaries under `docs/contracts/session-summaries`.
- `contract-sync` - validate session summaries against code and update `docs/contracts`.

## Flows

Create flows under `agent/flows/[flow-name].md`.

A flow is a reusable checklist or playbook for a repeated project workflow, such as creating a new feature, fixing a bug, or preparing a release. A flow can reference one or more skills.

Ask Codex to use a flow explicitly, for example:

```txt
Use agent/flows/new-feature.md for this task.
```
