# Update a Feature Doc

Update a specific document in `docs/` to reflect what has actually been built in the codebase.

## How to use this command

Run it like this:
```
/project:update-feature-doc [doc name or topic]
```

Examples:
- `/project:update-feature-doc pickup-return-flow`
- `/project:update-feature-doc cancellation`
- `/project:update-feature-doc rental statuses`

If you don't specify a doc, ask the user which one they want to update before proceeding.

## Available docs in docs/

| File | Topic |
|------|-------|
| `payment-model-overview.md` | Escrow model, money flow, Stripe operations |
| `revenue-model.md` | Fee constants, discount rules, worked examples |
| `rental-payment-flow.md` | Stripe integration details (SetupIntent, PaymentIntent, Transfer) |
| `RENTAL_STATUS_SYNC.md` | Status list, sync rules between Flutter and backend |
| `pickup-return-flow.md` | QR handoff, condition confirmation, dispute flow |
| `rental-approval-architecture-decisions.md` | Approval flow design decisions |
| `request-expiration-analysis.md` | Request expiration logic |

## Step 1 — Identify the target doc

Map the user's input to the correct file in `docs/`. If ambiguous, confirm with the user.

## Step 2 — Read the current doc

Read the full content of the target doc so you know exactly what it currently claims.

## Step 3 — Scan the relevant codebase

Based on the doc topic, read the relevant source files to understand what is *actually* implemented today. Focus on:

- **Payment/fees:** `backend/firebase/functions/src/rentals/helpers.ts`, `getRentalQuote.ts`, `approveRental.ts`, `flutter-app/lib/backend/stripe/payment_manager.dart`
- **Rental statuses:** `backend/firebase/functions/src/rentals/constants.ts`, `flutter-app/lib/models/rental_model.dart`
- **Pickup/return flow:** `backend/firebase/functions/src/rentals/pickupRental.ts`, `returnRental.ts`, `reportPickupIssue.ts`, relevant Flutter pages in `lib/pages/renter_active_rental_detail_page/` and `lib/pages/active_rental_detail_page/`
- **Approval flow:** `backend/firebase/functions/src/rentals/approveRental.ts`, `rejectRental.ts`, `cancelRental.ts`
- **Expiration:** `backend/firebase/functions/src/rentals/expireRequests.ts`, `expirationTaskScheduler.ts`

## Step 4 — Identify gaps between the doc and the code

Look for:
- Features marked as `⏳` or "not yet implemented" that have since shipped
- Features marked as `✅` or "implemented" that no longer exist or changed
- Incorrect constants (e.g. fee percentages, timeout durations)
- Missing sections for things that exist in code but aren't documented
- Outdated status names (e.g. deprecated statuses still referenced)

## Step 5 — Make surgical edits

Update only what has changed. Do not rewrite sections that are still accurate.

Rules:
- Keep the same document structure and tone
- Preserve decision rationale — if a section explains *why* something was built a certain way, keep it even if the implementation evolved
- Update status indicators (`⏳` → `✅`) where features have shipped
- Update code snippets or file references if they point to deleted or renamed files
- If something was removed from the codebase entirely, remove it from the doc — feature docs describe current implementation, not history
- Do not mention previous values or "used to be" context — if a constant changed, just update it to the current value

## Step 6 — Report what changed

After saving the updated doc, summarise:
- What sections were updated and why
- Any discrepancies you found that need a human decision (e.g. the doc says one thing, the code does something subtly different, and it's unclear which is correct)
- Whether `CLAUDE.md` also needs a corresponding update (if so, suggest running `/project:update-docs` next)
