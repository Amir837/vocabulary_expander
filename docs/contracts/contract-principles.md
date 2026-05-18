## Contract Principles

- `packages/shared` defines shared vocabulary before feature code depends on it.
- `server` owns application orchestration and validates external input before it reaches domain workflows.
- `background` owns asynchronous work that should not block request or UI flows.
- `app/web` owns presentation, interaction, and visualization, while consuming shared contracts and server APIs.
- Contracts should describe current intent and accepted boundaries, not temporary implementation details.