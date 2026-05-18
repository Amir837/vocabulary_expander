# Component Plan and Contracts

This project is a focused vocabulary expansion tool for learning a new language
by domain/context. A learner starts with a real-world topic and a few anchor
words. The system expands those anchors into related words, phrases, and example
sentences found in real language use.

## High-Level Product Flow

1. The learner creates a learning topic, for example "restaurant conversations."
2. The learner provides target language information and several anchor words,
   such as "restaurant," "menu," "waiter," "dish," and "bill."
3. The server validates the topic and starts an expansion job.
4. The background process searches or scans external text sources for real
   examples around the anchor words.
5. The background process extracts nearby words, phrases, and sentence examples,
   then records simple co-occurrence signals, such as how often words appear in
   the same sentence or nearby context.
6. The server stores the resulting domain dictionary, sentence examples, source
   metadata, and job status.
7. The web app lets the learner explore, review, and study the words in context.

## Core Domain Concepts

These concepts should become shared contracts before feature code depends on
them:

- `LearningTopic` - the learner's focused domain, target language, optional
  source language, and study goal.
- `AnchorWord` - a user-provided starting word or phrase for expansion.
- `ExpansionJob` - a background task that discovers related vocabulary for a
  topic.
- `SourceDocument` - source metadata for external text used during expansion.
- `SentenceExample` - a real sentence or short context window where an anchor or
  related term appears.
- `CandidateTerm` - a discovered word or phrase before the learner accepts it
  into the dictionary.
- `VocabularyEntry` - a selected or promoted term with definitions, examples,
  and learning metadata.
- `TermRelation` - a relationship between an anchor word and a discovered term,
  based on proximity, frequency, or co-occurrence.

## Component Contracts

### `app/web`

The web app owns the learner-facing experience.

It should let the learner create a topic, enter anchor words, start expansion,
watch progress, inspect discovered vocabulary, and study example sentences.

It may depend on shared types and server APIs. It should treat expansion results
as server-owned data.

It should not scrape the internet, run ranking logic, own durable storage rules,
or decide background job behavior.

### `server`

The server owns the product API and orchestration boundary.

It should validate learner input, create and update learning topics, expose job
status, persist accepted vocabulary data, and coordinate background expansion
jobs.

It may depend on shared contracts, persistence adapters, and background job
interfaces.

It should not contain UI rendering logic or perform long-running scanning work
inside request/response flows.

### `background`

The background process owns long-running vocabulary expansion work.

It should search or scan configured text sources, collect context around anchor
words, extract nearby terms and phrases, rank candidate vocabulary, deduplicate
results, and report progress back to the server.

It may depend on shared job payloads, source-provider adapters, tokenization or
NLP utilities, and persistence/job infrastructure chosen later.

It should not expose the primary product API directly to the web app.

### `packages/shared`

The shared package owns cross-component language.

It should define framework-neutral types, schemas, API request/response shapes,
job payloads, job statuses, and domain constants used by the web app, server,
and background process.

It should not contain browser-only UI behavior, server persistence details, or
background implementation details.

### `docs`

The docs folder owns durable project intent.

Contract docs describe accepted component responsibilities. Feature specs
translate product intent into implementation steps. Session summaries capture
draft decisions that may later become contracts.

### `agent`

The agent folder owns repo-local workflows for repeatable implementation work.

Skills and flows should help future Codex sessions write specs, capture
decisions, and synchronize contracts with implementation.

## Data and Boundary Rules

- The web app sends learner intent: topic, language choices, and anchor words.
- The server returns stable topic, job, vocabulary, and sentence contracts.
- Background jobs receive explicit job payloads and write structured results.
- Expansion output should preserve provenance: source URL or identifier, matched
  anchor, sentence/context text, language, and extraction metadata.
- Ranking should be explainable enough to debug: frequency, proximity to
  anchors, source count, or similar signals.
- The system should prefer storing useful sentence examples and source metadata
  over storing whole copied pages.
- Generated definitions, translations, pronunciations, or study hints are
  optional future layers, not required for the first vocabulary expansion loop.

## Open Decisions

- Which storage layer will hold topics, jobs, source metadata, sentences, and
  vocabulary entries.
- Which external text sources or search APIs will be used first.
- Which languages are supported in the first implementation pass.
- Which tokenizer, sentence splitter, or NLP library should handle each target
  language.
- Whether definitions and translations are generated, user-provided, imported
  from dictionaries, or postponed.
- How learners accept, reject, hide, or mark discovered candidate terms.
- How candidate terms should be scored from co-occurrence, sentence proximity,
  source count, or other signals.
- Whether the first version supports accounts and multiple learners, or starts
  as a local/single-user tool.
