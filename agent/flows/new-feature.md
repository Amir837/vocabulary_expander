# New Feature Flow

1. Read the relevant files in `docs`.
2. Identify whether the feature touches `app/web`, `server`, `background`, or `packages/shared`.
3. Update shared types, schemas, constants, and API contracts first when needed.
4. Implement server or background behavior before wiring the web UI.
5. Update the web visualization.
6. Run focused checks for the changed workspace.
7. Update docs when behavior or contracts change.

