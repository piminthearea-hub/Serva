# Optcause Directory — Implementation Notes

**Last updated:** 2026-03-06

## What changed

- **Filtering** is centralized in `src/lib/organizations.ts`. The directory and featured section both use the same `filterOrganizations()` and `getFeaturedOrganizations()`.
- **Launch visibility** is applied by default: when "Include low-confidence" is OFF, only organizations with `confidence` in `LAUNCH_VISIBLE_CONFIDENCE` (high, medium) and `statusLabel` in `LAUNCH_VISIBLE_STATUSES` (Active, Checked, Opportunity Open) are shown. User filters (category, borough, status, type) are applied on top.
- **Featured** section is driven only by the `featured` flag in the data; featured orgs are a subset of the currently filtered list.
- **Reset filters** button appears when any filter is active and resets to `defaultFilters`.
- **Organization cards** show name, category, borough, short mission, statusLabel, typeLabel, confidence, 1–2 active signals (from `getCardSignals`), and Website/Contact actions.
- **Empty state** is explicit and suggests resetting filters or including low-confidence.

## Files changed / added

| Path | Role |
|------|------|
| `src/lib/organizations.ts` | **New.** Central filter helpers, launch rules, `filterOrganizations`, `getFeaturedOrganizations`, unique value getters. |
| `src/components/OrganizationCard.tsx` | **New.** Single org card with all required fields and signals. |
| `src/components/Filters.tsx` | **New.** Filter dropdowns, include-low-confidence checkbox, reset button. |
| `src/components/FeaturedOrganizations.tsx` | **New.** Top recommended section; renders only when there are featured orgs in the filtered set. |
| `src/Directory.tsx` | **Updated.** Uses lib + new components; single filtered list, featured = subset. |
| `src/Directory.css` | **Updated.** Styles for filter reset, card meta/signals/buttons, empty state. |
| `src/directoryUtils.ts` | **Removed.** Replaced by `src/lib/organizations.ts`. |

Data and product concept are unchanged: `data/organizations.ts` is still the only source; no database or API.

## Filtering logic

1. **Base list:** `getAllOrganizations()` returns the static `organizations` array from data.
2. **Apply filters:** `filterOrganizations(allOrgs, filters)`:
   - If `includeLowConfidence` is **false**: keep only `confidence` in `["high", "medium"]` and, when status dropdown is "All statuses", only `statusLabel` in `["Active", "Checked", "Opportunity Open"]`. If the user picks a specific status, that status is required (and launch confidence rule still applies).
   - If `includeLowConfidence` is **true**: allow all confidence levels; status is either "all" (no status filter) or the selected status.
   - Then apply category, borough, status (if selected), and typeLabel as chosen in the UI.
3. **Featured:** `getFeaturedOrganizations(filtered)` returns orgs in `filtered` where `featured === true`. So featured always respects the same filters as the directory.
4. **Directory list:** All filtered orgs minus the featured ones (no duplicate cards).

## Launch visibility

- **Constants** (from `data/organizations.ts`): `LAUNCH_VISIBLE_CONFIDENCE = ["high", "medium"]`, `LAUNCH_VISIBLE_STATUSES = ["Active", "Checked", "Opportunity Open"]`.
- **Enforcement:** In `filterOrganizations()`, when `includeLowConfidence` is false we restrict to those confidence and status sets (status set only when the user has not selected a specific status). When the user turns on "Include low-confidence", we still apply the status dropdown; if it’s "All statuses", we show all statuses.
