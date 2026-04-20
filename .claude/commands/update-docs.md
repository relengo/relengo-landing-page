# Update CLAUDE.md

Scan the repository for changes since the last CLAUDE.md update and apply all necessary updates to `/CLAUDE.md`.

## What to check and update

### 1. Pages & Routes
Scan `flutter-app/lib/pages/` for any new or removed page folders.
For each page widget, check its `routeName` and `routePath` static fields.
Update the **Pages (routes)** table in CLAUDE.md to reflect the current state.

### 2. Rental Statuses
Read `backend/firebase/functions/src/rentals/constants.ts` (source of truth).
Read `flutter-app/lib/models/rental_model.dart` (Flutter mirror).
Update the **Rental Statuses** section in CLAUDE.md — active flow, terminal, deprecated.
If the two files are out of sync, flag it as a warning comment in your response.

### 3. Backend Functions
Scan `backend/firebase/functions/src/` for any new or removed `.ts` files across all subdirectories.
Update the **Backend (Cloud Functions) Structure** section in CLAUDE.md.

### 4. Feature Status Table
Review the **Currently Implemented ✅ / ⏳** table.
For each ⏳ item, check whether it now has implementation in the codebase (look for relevant files, function names, or status constants that indicate it shipped).
For any new features you find that aren't listed at all, add them.
Update statuses accordingly.

### 5. Flutter Structure
Check `flutter-app/lib/` for any new top-level folders or significant new files (new services, new models, new repositories).
Update the **Flutter App Structure** section if anything was added or removed.

### 6. Dev Commands
Re-read `flutter-app/Makefile` and `backend/firebase/Makefile`.
Update the **Dev Commands** section if any targets changed.
Re-read `flutter-app/.flutter-version` and update the Flutter version if it changed.

### 7. Product / Money Flow
Check `backend/firebase/functions/src/rentals/helpers.ts` for the current values of `PLATFORM_FEE_PERCENT` and `SERVICE_FEE_CENTS`.
If either changed, update the **Money Flow** section and the worked examples if they exist.

### 8. Environment Variables
Re-read `flutter-app/.env.example`.
Update the **Environment Variables** section if new keys were added.

## Instructions

- Make surgical edits — only change what has actually changed. Do not rewrite sections that are still accurate.
- If you find something ambiguous (e.g. a new file whose purpose isn't clear), read the file before deciding whether to document it.
- After all updates, add a one-line note at the top of CLAUDE.md under a `_Last reviewed:_` label with today's date.
- Summarise what you changed at the end of your response so the developer knows what was updated.
