# Address PR Feedback

Given a PR number (passed as argument or auto-detected from the current branch), fetch all review comments left on the PR, fix the valid ones directly in the codebase, and reply to any being declined with a clear explanation.

## Steps

### 1. Resolve the PR number
If a PR number was passed as an argument, use it directly. Otherwise, auto-detect it from the current branch:
```bash
gh pr view --json number --jq '.number'
```
If that returns no PR, ask the user for the number before continuing.

### 2. Fetch comments
```bash
gh api repos/relengo/flutter-app/pulls/<PR_NUMBER>/comments
```
Read the JSON response directly — extract each comment's `id`, `path`, `body`, and any `suggestion` block.

### 3. Evaluate each comment
For each comment decide:
- **Fix it** — the issue is valid and worth addressing in the current codebase
- **Decline it** — the issue is irrelevant (e.g. no production/legacy data yet, premature optimisation, won't happen given our architecture)

Use context from CLAUDE.md and the current codebase to make this judgement. When in doubt, fix it.

### 4. Present a plan
Before touching any code, summarise what you intend to fix and what you intend to decline, with a brief reason for each decision. Wait for the user to confirm before proceeding.

### 5. Apply fixes
After the user approves the plan, make the code changes.

### 6. Reply to declined comments
For every comment you are NOT fixing, post a reply explaining why:
```bash
gh api repos/relengo/flutter-app/pulls/<PR_NUMBER>/comments \
  -X POST \
  -F in_reply_to=<COMMENT_ID> \
  -f body="<explanation>"
```
Use `-F` (not `-f`) for `in_reply_to` so it is sent as an integer.

### 7. Show a diff and wait for approval
After applying all fixes, show the user a summary of the changes and wait for explicit approval before committing.

### 8. Commit the fixes
Only commit after the user has approved the changes. Stage and commit all changed files with a clear message referencing the PR review.

## Notes
- Run `dart format` on changed Flutter files before staging, to avoid pre-commit hook failures
- Run `flutter analyze` to confirm no issues before committing
- Only reply to comments you are declining — fixed comments speak for themselves
