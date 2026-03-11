# Chadwit 2 — All Chadwit Features

This document consolidates **every feature about Chadwit** (the curated NYC nonprofit and community organization directory) in one place. Use it as the single source of truth for what Chadwit is and how it is implemented.

---

## 1. Product identity

- **Name:** Chadwit NYC
- **Tagline:** Curated nonprofit & community organizations — volunteers, students, newcomers.
- **What it is:** A curated directory of nonprofit and community organizations in New York City. It helps volunteers, students, and newcomers find organizations with clear pathways to get involved. It is **not** a complete or official registry of all nonprofits.
- **Positioning:** Chadwit is a curated, self-vetted listing platform — not a passive directory. It focuses on organizations that are a good fit for volunteers, students, and newcomers, with information reviewed for clarity and usefulness.

**Source references:** `README.md`, `src/components/FAQ.tsx`, `src/Directory.tsx`, `src/components/HowToUse.tsx`.

---

## 2. Directory (main experience)

### 2.1 Page structure and navigation

- **Header:** Title “Chadwit NYC”, tagline, and nav links:
  - Share a community event or project (anchor `#faq-community-event`)
  - Resources (`/resources`)
  - How to use (`#how-to-use-heading`)
  - FAQ (`#faq-heading`)
  - Contact Chadwit (external contact form URL)
- **Filters:** Category, borough, status, type (Direct Organization vs Platform / Network), and “Include low-confidence” checkbox. Reset button when any filter is active.
- **Featured / Top recommended:** Small hand-picked set of organizations with clear volunteer or opportunity pathways, shown at the top (max 2 in current UI). They are a subset of the filtered list.
- **Listing:** “All organizations” — filtered list minus featured; count text and optional “Top recommended” note.
- **Sections below:** Contact CTA, How to use, FAQ, Disclaimer, Footer, Back to top.

**Implementation:** `src/Directory.tsx`, `src/Directory.css`.

### 2.2 Filtering logic

- **Centralized in:** `src/lib/organizations.ts`.
- **Base list:** `getAllOrganizations()` returns the static `organizations` array from `data/organizations.ts`.
- **Filtering:** `filterOrganizations(allOrgs, filters)`:
  - **Launch visibility (default):** When “Include low-confidence” is OFF, only organizations with `confidence` in `["high", "medium"]` and `statusLabel` in `["Active", "Checked", "Opportunity Open"]` are shown. User filters (category, borough, status, type) are applied on top.
  - **Include low-confidence ON:** All confidence levels; status filter still applies (or “All statuses” shows all).
  - **Borough:** “All boroughs” = everything; a specific borough shows that borough + NYC-wide; “Unspecified” is excluded when a specific borough is selected.
- **Featured:** `getFeaturedOrganizations(filtered)` returns orgs in the filtered list where `featured === true`. Directory list = filtered minus featured (no duplicates).

**Constants (from `data/organizations.ts`):**  
`LAUNCH_VISIBLE_CONFIDENCE = ["high", "medium"]`,  
`LAUNCH_VISIBLE_STATUSES = ["Active", "Checked", "Opportunity Open"]`.

**Implementation:** `src/lib/organizations.ts`, `src/components/Filters.tsx`.

### 2.3 Organization cards

- **Content:** Name, display category, borough, one-line mission, status label, type label, confidence, 1–2 active signals (from `getCardSignals(org)`), and actions: Website, Volunteer (if `volunteerOpen`), Contact.
- **Empty state:** When no orgs match: message and hint to reset filters or enable “Include low-confidence”.

**Implementation:** `src/components/OrganizationCard.tsx`, `src/components/FeaturedOrganizations.tsx`, `data/organizations.ts` (`getCardSignals`).

### 2.4 Data and types

- **Source:** Static seed file only — no database or API. `data/organizations.ts` exports `organizations` and type `Organization`.
- **Fields (summary):** `id`, `name`, `category`, `subcategory`, `displayCategory`, `borough`, `city`, `state`, `mission`, `website`, `contact`, `volunteerOpen`, `opportunityOpen`, `remoteFriendly`, `activeSignals`, `statusLabel`, `lastChecked`, `notes`, `typeLabel`, `confidence`, `featured`, `sourceType`.
- **Borough values:** Bronx | Brooklyn | Manhattan | Queens | Staten Island | NYC-wide | Unspecified.
- **Display categories (7, for filters):** Community & Immigrant Support · Legal & Housing · Food & Family Support · Youth & STEM · Environment · Animals · Disability Support.
- **Inclusion rule:** Organizations meet at least 2–3 active signals: live website, current contact, volunteer/program/service page, visible public activity, clear NYC service area, operational (not stale).

**Implementation:** `data/organizations.ts`, `src/lib/organizations.ts`.

---

## 3. Resources

- **Purpose:** Curated guides and support pathways for students, newcomers, and community-minded people.
- **Landing:** List of resource categories; each card has title, short description, and status (Available / Coming soon). Links go to `/resources/:slug` for individual guides.
- **Content:** Static guides (e.g. “A Guide for International Students”) with sections, checklists, support boxes, and closing notes. Data and structure in `src/data/resources.ts`; categories via `getResourceCategories()`.
- **Chadwit-style UI:** Header “Resources”, tagline, “← Chadwit NYC” back link, Footer, Back to top.

**Implementation:** `src/Resources.tsx`, `src/Resources.css`, `src/data/resources.ts`, `src/pages/ResourceGuideView.tsx` (or equivalent guide view).

---

## 4. How to use

- **Heading:** “How to use Chadwit”
- **Content:** Explains Chadwit as a curated directory; “Top recommended” as a small hand-picked set with clear volunteer or opportunity pathways; and a CTA to use the Chadwit contact form.

**Implementation:** `src/components/HowToUse.tsx`.

---

## 5. FAQ

- **Questions covered:** What is Chadwit? Why “Top recommended”? Why doesn’t Chadwit show every nonprofit? How are listings updated? Does Chadwit guarantee legitimacy or availability? Can I suggest an organization? Can I share a community event or project?
- **CTAs:** Use the Chadwit contact form for suggestions, events, and general inquiries.

**Implementation:** `src/components/FAQ.tsx`.

---

## 6. Contact

- **Contact form:** External Google Form; opens in new tab.
- **URL:** Defined in `src/lib/constants.ts` as `CONTACT_FORM_URL`.
- **Usage:** Referenced in Directory nav, How to use, FAQ, Disclaimer, Terms, Privacy, and Contact CTA.

**Implementation:** `src/lib/constants.ts`, `src/components/ContactCTA.tsx`, and all components that link to “Contact Chadwit”.

---

## 7. Contact CTA

- **Role:** Aside prompting users to get in touch.
- **Content:** “Contact Chadwit” label, short copy, and link to the Chadwit contact form (e.g. “Use the Chadwit contact form”, “Use the Chadwit contact form and choose General inquiry”).

**Implementation:** `src/components/ContactCTA.tsx`.

---

## 8. Disclaimer

- **Message:** Chadwit uses public information and curated data; details may change; users should confirm hours, requirements, and availability with each organization. Link to Chadwit contact form for corrections.

**Implementation:** `src/components/Disclaimer.tsx`.

---

## 9. Footer

- **Brand:** “Chadwit NYC”
- **Links:** e.g. Contact Chadwit (contact form), and any other footer links.

**Implementation:** `src/components/Footer.tsx`.

---

## 10. Terms of use

- **Title:** Chadwit Terms of Use
- **Content:** Governs access to and use of the Chadwit website, content, and services. Covers what Chadwit is, disclaimers, acceptable use, third-party content, submissions, intellectual property, changes to the service, warranty disclaimer, limitation of liability, indemnity, and link to Chadwit Privacy Policy. Contact via Chadwit contact form.

**Implementation:** `src/components/TermsOfUse.tsx`, route `/terms`.

---

## 11. Privacy policy

- **Title:** Chadwit Privacy Policy
- **Content:** What information Chadwit may collect, how it is used, choices available to users, third-party links, children’s privacy, updates, and contact (Chadwit contact form).

**Implementation:** `src/components/PrivacyPolicy.tsx`, route `/privacy`.

---

## 12. Back to top

- **Role:** Button or link to scroll to top of page.

**Implementation:** `src/components/BackToTop.tsx`.

---

## 13. Curated list (narrative and quality)

- **Purpose:** Master list and quality-control notes for the NYC starter set.
- **Content:** Top recommended organizations by category (Immigrant/Community Support, Legal/Justice, Housing/Tenant, STEM, Environment, Animals, Food, Youth, Disability, Women/Family), expansion candidates, and inclusion criteria. Strongest fits: clear NYC presence, active volunteer or program pathways, verifiable activity.

**Implementation:** `docs/CURATED_NYC_LIST.md`.

---

## 14. Implementation notes (directory)

- **Summary:** What changed in the directory (filtering, launch visibility, featured, cards, empty state), file list, filtering logic, and launch visibility rules.

**Implementation:** `docs/DIRECTORY_IMPLEMENTATION.md`.

---

## 15. File index (Chadwit features)

| Path | Role |
|------|------|
| `src/Directory.tsx` | Main directory page: header, filters, featured, listing, How to use, FAQ, Contact CTA, Disclaimer, Footer, Back to top. |
| `src/Directory.css` | Styles for directory. |
| `src/lib/organizations.ts` | Central filtering, launch visibility, `filterOrganizations`, `getFeaturedOrganizations`, unique value getters, pagination helper. |
| `src/lib/constants.ts` | `CONTACT_FORM_URL` (Chadwit contact form). |
| `data/organizations.ts` | Chadwit NYC seed data: organizations array, types, `getOrganizationsForLaunch`, `getCardSignals`, `LAUNCH_VISIBLE_*`, `DISPLAY_CATEGORIES`. |
| `src/components/Filters.tsx` | Filter dropdowns, include-low-confidence checkbox, reset button. |
| `src/components/OrganizationCard.tsx` | Single org card with all required fields and signals. |
| `src/components/FeaturedOrganizations.tsx` | Top recommended section. |
| `src/components/HowToUse.tsx` | How to use Chadwit section. |
| `src/components/FAQ.tsx` | FAQ section (Chadwit-specific Q&A). |
| `src/components/ContactCTA.tsx` | Contact Chadwit CTA. |
| `src/components/Disclaimer.tsx` | Data disclaimer and contact link. |
| `src/components/Footer.tsx` | Footer with Chadwit branding. |
| `src/components/TermsOfUse.tsx` | Chadwit Terms of Use page. |
| `src/components/PrivacyPolicy.tsx` | Chadwit Privacy Policy page. |
| `src/components/BackToTop.tsx` | Back to top control. |
| `src/Resources.tsx` | Chadwit-style Resources landing (Chadwit NYC back link, tagline, resource cards, Footer, Back to top). |
| `src/Resources.css` | Resources page styles (Chadwit Directory style). |
| `src/data/resources.ts` | Resource guides static content for Chadwit Resources. |
| `src/pages/ResourceGuideView.tsx` | Single resource guide view (`/resources/:slug`); uses Chadwit guide data. |
| `docs/CURATED_NYC_LIST.md` | Curated organization list and narrative. |
| `docs/DIRECTORY_IMPLEMENTATION.md` | Directory implementation notes. |
| `README.md` | Project overview (Chadwit product description, layout, usage, inclusion rule). |

---

*Chadwit 2 — every feature about Chadwit in one file. Last consolidated: 2026-03-06.*
