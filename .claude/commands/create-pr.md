# How to Create a Pull Request Using GitHub CLI

This guide explains how to create pull requests using GitHub CLI in our project.

**Important**: All PR titles and descriptions should be written in English.

## Prerequisites

1. Install GitHub CLI if you haven't already:

   ```bash
   # macOS
   brew install gh

   # Windows
   winget install --id GitHub.cli

   # Linux
   # Follow instructions at https://github.com/cli/cli/blob/trunk/docs/install_linux.md
   ```

2. Authenticate with GitHub:
   ```bash
   gh auth login
   ```

## Creating a New Pull Request

1. First, prepare your PR description following the template in @.github/pull_request_template.md

2. Use the `gh pr create --draft` command to create a new pull request:

   ```bash
   # Basic command structure
   gh pr create --draft --title "type(scope): Your descriptive title" --body "Your PR description" --base main
   ```

   For more complex PR descriptions with proper formatting, use the `--body-file` option with the exact PR template structure:

   ```bash
   # Create PR with proper template structure
   gh pr create --draft --title "type(scope): Your descriptive title" --body-file .github/pull_request_template.md --base main
   ```

3. After creating the PR, immediately request a Copilot code review:

   ```bash
   gh pr edit --add-reviewer @copilot
   ```

   This triggers GitHub Copilot to automatically review the PR and leave inline comments with suggestions.

## Best Practices

1. **Language**: Always use English for PR titles and descriptions

2. **PR Title Format**: Use conventional commit format

   - `type(scope): description` — all lowercase, imperative mood
   - Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`
   - Examples:
     - `feat(auth): add phone verification consent step`
     - `fix(chat): correct bubble alignment on renter view`
     - `refactor(checkout): extract shared participant section`

3. **Description Template**: Always use our PR template structure from @.github/pull_request_template.md

4. **Template Accuracy**: Ensure your PR description precisely follows the current template:

   - Keep all section headers exactly as they appear in @.github/pull_request_template.md
   - Include every section required by the template, even if the content is `N/A` or `None`
   - Don't add custom sections unless the template explicitly calls for them

5. **Draft PRs**: Start as draft when the work is in progress
   - Use `--draft` flag in the command
   - Convert to ready for review when complete using `gh pr ready`

### Common Mistakes to Avoid

1. **Using Non-English Text**: All PR content must be in English
2. **Incorrect Section Headers**: Always use the exact section headers from the template
3. **Adding Custom Sections**: Stick to the sections defined in the template
4. **Using Outdated Templates**: Always refer to the current @.github/pull_request_template.md file

### Missing Sections

Always include all template sections, even if some are marked as "N/A" or "None"

## Additional GitHub CLI PR Commands

Here are some additional useful GitHub CLI commands for managing PRs:

```bash
# List your open pull requests
gh pr list --author "@me"

# Check PR status
gh pr status

# View a specific PR
gh pr view <PR-NUMBER>

# Check out a PR branch locally
gh pr checkout <PR-NUMBER>

# Convert a draft PR to ready for review
gh pr ready <PR-NUMBER>

# Add reviewers to a PR
gh pr edit <PR-NUMBER> --add-reviewer username1,username2

# Request Copilot code review on an existing PR
gh pr edit <PR-NUMBER> --add-reviewer @copilot

# Merge a PR
gh pr merge <PR-NUMBER> --squash
```

## Using Templates for PR Creation

To simplify PR creation with consistent descriptions, you can create a template file:

1. Create a file named `pr-template.md` with your PR template
2. Use it when creating PRs:

```bash
gh pr create --draft --title "type(scope): Your title" --body-file pr-template.md --base main
```

## Related Documentation

- [PR Template](.github/pull_request_template.md)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub CLI documentation](https://cli.github.com/manual/)
