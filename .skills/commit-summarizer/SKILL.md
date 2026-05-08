---
name: commit-summarizer
description: Analyzes git changes and generates professional, categorized commit messages. Use when the user wants to commit code or needs a summary of their recent work.
---

# Commit Summarizer

This skill helps you generate high-quality commit messages based on the actual changes in your repository.

## Workflow

1.  **Gather Context**: Run the provided script to get the current git status and diff.
    ```bash
    node scripts/get_diff.cjs
    ```
2.  **Analyze**: Look at the files changed and the specific lines added/removed.
3.  **Categorize**: Use the Conventional Commits standard:
    *   `feat`: A new feature
    *   `fix`: A bug fix
    *   `docs`: Documentation only changes
    *   `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    *   `refactor`: A code change that neither fixes a bug nor adds a feature
    *   `perf`: A code change that improves performance
    *   `test`: Adding missing tests or correcting existing tests
    *   `build`: Changes that affect the build system or external dependencies
    *   `ci`: Changes to our CI configuration files and scripts
    *   `chore`: Other changes that don't modify src or test files
4.  **Draft**: Propose a message in the format: `<type>: <description>`.

## Example
If `index.html` was updated with a new footer link:
`feat: add link to Kendrick's presentation in team section`
