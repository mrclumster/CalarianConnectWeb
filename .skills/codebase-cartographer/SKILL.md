---
name: codebase-cartographer
description: Maps the project architecture and explains the relationship between components. Use when the user asks for a project overview or wants to understand how the codebase is organized.
---

# Codebase Cartographer

This skill helps you understand the "big picture" of a project.

## Workflow

1.  **Generate Map**: Run the mapping script to see the directory tree.
    ```bash
    node scripts/map_files.cjs
    ```
2.  **Identify Entry Points**: Look for `index.html`, `main.ts`, `app.py`, etc.
3.  **Analyze Folders**:
    *   `assets/`: Images and static resources.
    *   `src/`: Main source code.
    *   `docs/`: Project documentation.
    *   `team/`: Specific sub-pages or modules.
4.  **Explain**: Provide a high-level summary of the architecture.
