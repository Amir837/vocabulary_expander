---
name: session-summary
description:
  Use this skill when capturing a short end-of-session summary of project,
  business, architecture, or contract decisions for Vocabulary Expander.
  Writes reviewable draft summaries under docs/contracts/session-summaries.
---

# Session Summary

Create a concise draft summary at `docs/contracts/session-summaries/YYYY-MM-DD-short-topic.md`.

## Workflow

1. Read the relevant docs, contract files, and changed files from the session.
2. Capture only decisions, rationale, unresolved questions, and contract follow-up.
3. Mark the summary as `Status: Draft` unless the user explicitly says it is reviewed.
4. Keep the summary short enough to scan before a future implementation pass.
5. Do not update contract specs from this skill unless the user asks for that explicitly; use `agent/skills/contract-sync` for reconciliation.

## Required Sections

```markdown
# YYYY-MM-DD - Short Topic

Status: Draft

## Context

## Decisions

## Rationale

## Open Questions

## Contract Follow-Up
```
