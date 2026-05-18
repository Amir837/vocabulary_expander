# Vocabulary Expander

Vocabulary Expander is a focused vocabulary expansion tool for learning a new
language by domain/context, not by generic word lists.

The user says something like: "I want to be able to talk about restaurants."
They provide anchor words such as "restaurant," "menu," "waiter," "dish,"
"bill," etc. Then the system scans real language usage online, finds words and
phrases that frequently appear near those anchors, and builds a practical domain
dictionary.

The important part is that it does not just teach isolated words. It also saves
real sentences where the anchor words and related vocabulary appear, so learners
absorb vocabulary through useful sentence patterns and context.

So the project is about:

- learning the vocabulary needed for a specific real-world situation
- starting from a few user-provided anchor words
- discovering nearby/frequently associated words from real text
- prioritizing relevant vocabulary over unrelated general vocabulary
- teaching through words plus example sentences

A clean phrase for the project direction:

> Vocabulary Expander helps language learners build focused,
> situation-specific vocabulary from real-world text, starting with a few anchor
> words and expanding into the words, phrases, and sentences they are most likely
> to need.

This repository is a TypeScript monorepo for a visualization web app, server
orchestrator, background processes, shared code, docs, and repo-local agent
guidance.

## Layout

- `app/web` - React visualization application.
- `server` - API and orchestration layer.
- `background` - jobs, queues, schedulers, and long-running background work.
- `packages/shared` - shared TypeScript types, schemas, constants, API contracts, and utilities.
- `docs` - implementation specs and architecture notes.
- `agent` - repo-local skills and flows for Codex.

