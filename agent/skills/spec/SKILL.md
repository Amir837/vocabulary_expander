---
name: spec
description:
  Use this skill when creating spec documents that describe implementation steps
  to achieve a goal. Covers spec structure, format, and content guidelines.
---

# Spec Writing

Create MD spec file at `./docs/feature-implementation/[spec-name].spec.md` focused on implementation
steps to achieve the goal given in a prompt.

Use the simplest possible solution. Read `docs/README.md` and `docs/contracts` first so the spec
respects component responsibilities and contracts. Research online examples and documentation for
completeness and correctness when needed. Spec must be concise.

## Structure

- Particular problem to solve or objective in title of the spec.
- Short overview for the approach.
  - If needed - very short overview of the design.
- List of the files to be modified as links relative to spec.
- Implementation steps - each step must be self-contained and testable.
  - Brief summary of the change in the step. Do not quote the code, UNLESS it's more concise to
    explain the change.
  - Testing instructions after the step is done.
- When notable alternative approaches to entire solution exist - mention them very briefly in the
  end. Skip if only trivial alternatives exist.
- Do not include anything else.

## Format

```markdown
# [Objective]
...

## Overview
...

## Files to change
...

## Implementation steps
...

## Alternative approaches
...
```
