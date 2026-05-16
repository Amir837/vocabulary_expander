---
name: contract-sync
description:
  Use this skill when reviewing session summaries in
  docs/contracts/session-summaries, validating them against current code and
  docs, and updating contract specifications under docs/contracts accordingly.
---

# Contract Sync

Reconcile session summaries with the current codebase and update contract docs only when the contract should become durable project intent.

## Workflow

1. Read `docs/README.md`, `docs/contracts/README.md`, existing contract files, and relevant session summaries.
2. Inspect the code touched by the summarized decisions.
3. Classify each decision as reflected, implemented, accepted but not implemented, contradicted, stale, or still open.
4. Update files under `docs/contracts` for reflected, implemented, or explicitly accepted decisions.
5. Preserve open questions rather than turning them into contracts.
6. Keep contract docs concise and component-oriented.
7. In the final response, list the summaries reviewed, contract files changed, and any unresolved mismatches.

Do not edit feature implementation specs unless the user asks for a feature planning update too.
