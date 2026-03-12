# CLAUDE.md — Assistant Development Guidelines

## 1. Purpose

This document defines how the assistant must interact with the codebase of the Artist Portfolio project.  
The goal is to ensure predictable, minimal, and controlled changes without breaking the architecture.

---

## 2. Core Principles

- Apply only the changes explicitly required by the task.
- Preserve the existing architecture and file structure.
- Do not rewrite components entirely.
- Do not modify logic when the task is UI‑only.
- Ask clarifying questions when requirements are ambiguous.

---

## 3. Project Structure (Authoritative)

components/
ContactForm.tsx — contact form: fields, validation, submission  
 Filters.tsx — category filters  
 Gallery.tsx — artwork gallery

data/
artworks.ts — Artwork[] data and category list

App.tsx — category selection, filtering logic, component rendering  
index.css — Tailwind styles  
main.tsx — application entry point

This structure is fixed. Modifying it is not allowed.

---

## 4. Allowed Modifications

The assistant may modify:

- only the files explicitly mentioned in the task;
- only the specific code fragments related to the task;
- only styling when the task concerns UI;
- the minimal amount of code required to complete the task.

---

## 5. Forbidden Modifications

The assistant must not:

- change component structure (element order, nesting);
- add new containers, wrappers, or layout elements;
- modify the gallery grid;
- change hover effects, shadows, borders unless explicitly requested;
- alter the data format in artworks.ts;
- modify filtering logic in App.tsx;
- add new files or directories;
- rename existing files;
- rewrite entire components.

---

## 6. UI Rules

When working with UI:

- preserve image proportions;
- avoid cropping unless explicitly required;
- do not introduce new visual effects without permission;
- do not alter card appearance unless the task specifically targets it.

---

## 7. Response Format

Assistant responses must be:

- concise;
- structured;
- limited to the required changes;
- free of unsolicited “improvements” or refactoring suggestions.

---

## 8. Examples

### Correct Change

Task: replace `object-cover` with `object-contain`.  
→ Only the image class is updated. No other changes.

### Incorrect Change

- adding new containers;
- modifying the grid;
- rewriting the component;
- changing filtering logic;
- touching unrelated files.

---

## 9. Escalation Rule

If a task is unclear or allows multiple interpretations, the assistant must ask a clarifying question before making any changes.
