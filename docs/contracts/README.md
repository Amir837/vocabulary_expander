# Contracts

Contracts describe the promises between project components. They should be stable enough for an unattended implementation pass to know where behavior belongs, what each boundary may depend on, and which decisions are still unresolved.

## Contract Files

- `component-contracts.md` - current responsibilities and relationships between components.
- `session-summaries` - reviewable notes from project sessions that may later update the contract files.

## Maintenance

Session summaries are inputs, not binding contracts. Use `agent/skills/contract-sync` to read summaries, validate them against code and docs, and update contract files when a decision is accepted or reflected by the implementation.
