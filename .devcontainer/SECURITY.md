# Automatically executed code in this repository

This repository contains configuration that **executes code without being asked**.
Nothing here is known to be wrong — this note exists so the behaviour is visible,
and so changes to these paths get reviewed accordingly.

## Dev container lifecycle — `.devcontainer/devcontainer.json`

This repository currently configures:

- `postCreateCommand` — runs once, after the container is created

These fire at their lifecycle stage without confirmation, before you have
necessarily read the code you just pulled. Other lifecycle keys
(`initializeCommand`, `postStartCommand`, `postAttachCommand`, …) behave the
same way if they are added later — `initializeCommand` in particular runs on
the **host**, not inside the container.

## Husky — `.husky/`

This repository currently ships:

- `commit-msg`
- `pre-commit`

Husky activates through the `prepare` lifecycle script, so `npm install` is
enough to enable these. They then run on ordinary git operations.

## What to check when these files change

- Every command referenced here lives in this repo and has been reviewed
- No fetch-and-execute patterns (`curl … | sh`). Downloads are fine when the
  URL is pinned and the artefact's checksum or signature is verified
- Changes under `.claude/`, `.vscode/`, `.cursor/`, `.idea/`, `.devcontainer/`,
  `.githooks/` and `.husky/` get the same review scrutiny as production code
- Confirm, via CODEOWNERS or branch protection, that automation cannot modify
  these paths without human review

Editor, agent and container configuration is an executable surface. Treat it as such.
