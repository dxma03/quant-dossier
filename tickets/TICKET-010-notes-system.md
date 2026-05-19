# TICKET-010 — Notes system

## Objective
Create MDX-powered notes system.

## Implemented

- Added MDX note content directory at `src/content/notes`.
- Seeded initial notes:
  - Why market makers fear adverse selection
  - Why backtests lie
  - American options as a free-boundary problem
- Added notes loader utilities in `src/lib/notes.ts` for:
  - listing all notes metadata,
  - loading note content by slug.
- Added Next.js routes:
  - `/notes` index page,
  - `/notes/[slug]` detail page with static params generation.
