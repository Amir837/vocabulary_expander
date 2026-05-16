# Component Contract Descriptions

## Contract Principles

- `packages/shared` defines shared vocabulary before feature code depends on it.
- `server` owns application orchestration and validates external input before it reaches domain workflows.
- `background` owns asynchronous work that should not block request or UI flows.
- `app/web` owns presentation, interaction, and visualization, while consuming shared contracts and server APIs.
- Contracts should describe current intent and accepted boundaries, not temporary implementation details.

## `app/web`

The web app is the user-facing surface. It should render vocabulary data, expose workflows for exploration and review, and keep UI state local unless that state needs to become durable project data.

It may depend on `packages/shared` for types and contracts, and on `server` APIs for persisted or orchestrated behavior.

It should not own durable storage rules, background job behavior, or server-only validation.

## `server`

The server is the API and orchestration boundary. It should translate client requests into validated domain operations, coordinate persistence or external services when those are introduced, and expose stable API contracts to the web app.

It may depend on `packages/shared` for shared types, schemas, constants, and API contracts.

It should not contain UI-specific rendering behavior or long-running work that belongs in `background`.

## `background`

The background process owns jobs, queues, schedulers, and other asynchronous tasks. It should run work that can happen outside the immediate user request lifecycle.

It may depend on `packages/shared` for job payloads, vocabulary types, and contract definitions.

It should not expose UI behavior directly or become the primary API surface for the web app.

## `packages/shared`

The shared package owns the common language of the system: vocabulary types, schemas, constants, API contracts, and utilities that must remain consistent across components.

It should stay framework-neutral. Browser-only, server-only, and background-only implementation details should remain in their owning component.

## `docs`

The docs folder records durable project intent. Contract docs describe stable boundaries. Session summaries record draft decisions and rationale. Feature implementation specs translate accepted intent into concrete implementation steps.

## `agent`

The agent folder contains repo-local Codex instructions. Skills and flows should keep future implementation work consistent with these docs.

## Open Contract Questions

- The domain model currently contains only the placeholder `VocabularyEntry` type.
- Persistence, API transport, vocabulary generation, user workflows, and background job contracts are not specified yet.
- The first feature specs should refine shared types before adding behavior that depends on them.
