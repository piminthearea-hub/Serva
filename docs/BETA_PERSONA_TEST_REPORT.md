# Chadwit Beta Persona Test Report

**Date:** 2026-03-10  
**Method:** Code and data audit + persona walkthrough against current implementation. App run at `http://localhost:5186`; select external links verified via fetch.  
**Personas tested:** Negative (Marcus), Skeptical (Priya), Hopeful but fragile (Yuki).

---

## Executive summary

The test confirms that **all three personas hit their predicted failure modes** in the current build. The product is promising but vulnerable: key gaps are **no visible “last checked” on cards**, **no About / How we curate**, **no “curated and growing” copy when results are thin**, **confidence/status only explained in How to use (one bullet, no status labels)**, and **contact with no “we review submissions” expectation**. Brooklyn + Community & Immigrant Support returns a **very short list** (1 Brooklyn org + NYC-wide) with **no explanation**, and the **Volunteer button** for featured ROCC NYC points to the **contact page**, which can read as generic (persona “dead end”).

---

## Test environment

| Item | State |
|------|--------|
| **Directory** | Implemented; filters, Top recommended (max 2), listing, How to use, FAQ, Contact CTA, Disclaimer, Footer |
| **Organization cards** | Show: name (linked to website), typeLabel, mission, **category, borough, statusLabel, confidence**. Do **not** show: **lastChecked** |
| **Resources** | Not in current nav or routes (`App.tsx` has `/`, `/terms`, `/privacy` only). Chadwit 2 doc references `/resources` — not implemented in this build |
| **About / How we curate** | **Not present**. No About link in header or footer |
| **Contact** | External Google Form; no on-page text like “We review submissions regularly” |
| **Data** | Static `organizations.ts`; 50+ orgs; Brooklyn has 3 (Mixteca, Green City Force, Sean Casey); NYC-wide ~20; `lastChecked` present in data but **not rendered on cards** |

---

## Persona 1: Negative user (Marcus Webb)

### Scenario run

1. **Entry:** Colleague link → Directory. Nav: “Share a community event”, “How to use”, “FAQ”, “Contact Chadwit”. No “Resources” (route not in app).
2. **Filters:** Category = “Immigrant / Community Support” (dropdown uses `org.category`), Borough = “Brooklyn”.
3. **Result:**  
   - **Featured (Top recommended):** ROCC NYC and NICE are `featured: true` but **borough ROCC = Manhattan, NICE = Queens**. With Borough = Brooklyn they are **excluded** from the filtered set. So **0 featured** for Brooklyn + this category.  
   - **Listing:** Brooklyn org in that category = **Mixteca** only. Plus NYC-wide in same category (e.g. NYIC). So **2–3 orgs** total, **1 Brooklyn**.  
   - **Section copy:** “Showing high/medium confidence and launch-visible status. Use filters above to narrow…” **No “curated and growing” or “we’re still adding more” when list is short.**
4. **Card content:** Each card shows category, borough, statusLabel, confidence. **No “last checked” or “Info verified” date.** “Include low-confidence” has **no tooltip or one-line explainer** next to the checkbox.
5. **Clicks:**  
   - **Mixteca** — Website and Volunteer (contact) both point to real pages. Volunteer → `https://www.mixteca.org/en/volunteers` (**verified: live volunteer page** with roles and apply link).  
   - **ROCC NYC** (if he had left borough “All”): Volunteer button uses `org.contact` → `https://roccnyc.org/contact/`. That is a **contact / “Get involved”** page, not a dedicated volunteer-opportunity page. **Matches persona “Volunteer → generic contact” risk.**
6. **FAQ / How to use:** Confidence is explained in How to use in one bullet; **status labels (Active, Checked, Opportunity Open) are not** explained there. Only in FAQ under “What do Active / Checked / Opportunity Open mean?” — **not in the main flow.**

### Verdict

| Persona prediction | Observed |
|--------------------|----------|
| Brooklyn feels thin | **Confirmed.** Brooklyn + Community & Immigrant Support ≈ 2–3 results, 1 Brooklyn-only; no “curated and growing” message. |
| Confidence/status unclear at first | **Confirmed.** Status not explained in How to use; “Include low-confidence” has no inline explanation. |
| One bad click-through (Volunteer → generic contact) | **Confirmed for ROCC.** Volunteer goes to contact page; other featured (e.g. NICE, Mixteca) have proper volunteer URLs. |
| No “last checked” on cards | **Confirmed.** Field exists in data; **not rendered** in `OrganizationCard.tsx`. |
| Contact = leave site, no expectation | **Confirmed.** Link opens Google Form in new tab; no “we review submissions” or response expectation on the page. |

**Conclusion:** Marcus would hit **thin list + no explanation**, **no visible last checked**, and **at least one “Volunteer → contact” experience** (ROCC) if he ever saw ROCC before filtering to Brooklyn. For Brooklyn-only he gets Mixteca (good link) but a very short list with no framing. **Drop-off likely** as predicted.

---

## Persona 2: Skeptical user (Priya Sharma)

### Scenario run

1. **Entry:** Opens Directory; looks for About / Who we are. **None.** Header/footer: no About, no “How we curate.”
2. **Reads How to use + FAQ:** Sees “curated directory,” confidence bullet (“how up-to-date and verifiable”), “we don’t guarantee” in FAQ. **No** “who runs Chadwit,” “how often we update,” or “how we choose orgs” outside FAQ “How are organizations selected?” (generic “curated list… reviewed for clarity”).
3. **Cards:** Looks for “last checked.” **Not on card.** Only in data; not in UI. **Trust signal missing.**
4. **Contact:** Clicks Contact Chadwit → Google Form. **No** “We review submissions regularly” or “We aim to respond to corrections within X days” on the Directory page or (from code) on the form itself.
5. **Resources:** Clicks nav — **no Resources link** in current implementation. (If she had a link to `/resources`, route is not in `App.tsx`; would 404.) So “Coming soon” concern from persona is **not testable** in this build; **no Resources page.**
6. **Terms / Privacy:** Routes exist (`/terms`, `/privacy`). Footer likely links them; contact is same form; **no stated response time or how suggestions are processed.**

### Verdict

| Persona prediction | Observed |
|--------------------|----------|
| No About / Who we are | **Confirmed.** No About or “How we curate” anywhere. |
| “Last checked” not prominent | **Confirmed.** Not on card at all. |
| Contact with no expectations | **Confirmed.** No “we review submissions” or response-time line. |
| Resources “Coming soon” | **N/A.** Resources not in app. |

**Conclusion:** Priya finds **no ownership**, **no visible maintenance signal (last checked)**, and **no feedback expectation**. She would conclude the product is **“careful but opaque”** and would be unlikely to recommend without those fixes.

---

## Persona 3: Hopeful but fragile user (Yuki Tanaka)

### Scenario run

1. **Entry:** Phone; link from “new in NYC” chat. Sees same nav and filters; no About.
2. **Filters:** Borough = Manhattan (or NYC-wide). Category default or “Immigrant / Community Support.” Sees “Top recommended” (e.g. ROCC, NICE when no borough filter) and listing.
3. **Labels:** On cards sees **statusLabel** (e.g. “Active”) and **confidence** (e.g. “high”). **No** one-line explanation next to the list or on the card. “Include low-confidence” sounds negative; **no** tooltip or short explainer. To understand “Checked” or “Opportunity Open” they must open FAQ.
4. **Thin list:** If they pick Manhattan + a narrow category, list can be short. **No** “This list is curated and we’re adding more” or similar. Risk of “am I in the wrong place?”
5. **Click path:** If they click **ROCC NYC → Volunteer**, they go to **contact** page (generic “Get involved”). If they click **Mixteca → Volunteer**, they get a **real volunteer page** (verified). So **first click can be good or bad** depending on org; **one bad experience** is enough for this persona to disengage.
6. **FAQ tone:** “Does Chadwit guarantee…?” → “No. Always confirm… directly with the organization.” **Honest but can feel scary** to a fragile newcomer without a friendly lead-in.

### Verdict

| Persona prediction | Observed |
|--------------------|----------|
| Confidence/status confusing without FAQ | **Confirmed.** No one-line explainer in main flow; status only in FAQ. |
| “Include low-confidence” unclear | **Confirmed.** No tooltip or sentence. |
| One dead/generic link → doubt | **Confirmed for ROCC.** Volunteer → contact. |
| No “curated and growing” when thin | **Confirmed.** No such copy when result set is small. |
| No simple About | **Confirmed.** |

**Conclusion:** Yuki would hit **unclear labels**, **possible “Volunteer → contact” on first click** (ROCC), and **no reassurance when the list is short**. Would likely **leave confused** and not return unless reminded.

---

## Link and data checks (sample)

| Org | Website | Volunteer/contact | Note |
|-----|---------|--------------------|------|
| Mixteca | https://www.mixteca.org/ | https://www.mixteca.org/en/volunteers | **Volunteer = dedicated volunteer page** (verified). |
| ROCC NYC | https://roccnyc.org/ | https://roccnyc.org/contact/ | Volunteer button uses **contact** URL; contact page is “Get involved” — **generic for “Volunteer”** (persona complaint). |
| NICE | https://www.nynice.org/ | https://www.nynice.org/volunteer-opportunities | Data points to volunteer-opportunities; **likely good.** |

**Recommendation:** Audit all `featured` and high-confidence orgs: ensure **Volunteer** links to a **volunteer/opportunity** page, not only a contact page. Add “Report wrong link” or “Suggest correction” in form description or on card.

---

## Summary: Where the test confirms failure

1. **“Last checked” not visible** — In data only; not rendered on cards. **All three personas** need it for trust or clarity.
2. **No About / How we curate** — **Skeptical (Priya)** and **Hopeful (Yuki)** lose trust or context.
3. **Thin list with no explanation** — Brooklyn (and Brooklyn + category) returns few results; **no “curated and growing”** copy. **Negative (Marcus)** and **Hopeful (Yuki)** assume broken or “not for me.”
4. **Confidence/status not in main flow** — One bullet on confidence in How to use; **status labels not explained** there; “Include low-confidence” has **no** inline explainer. **All three** are affected.
5. **Volunteer → contact for at least one featured org (ROCC)** — **Negative** and **Hopeful** personas get a “dead end” or generic experience.
6. **Contact with no expectations** — No “we review submissions” or “we respond to corrections.” **Skeptical** and **Negative** don’t know if feedback is used.
7. **Resources** — Not in app; persona “Coming soon” critique not testable; doc vs. implementation mismatch.

---

## Recommended next steps (in order)

1. **Surface “last checked”** on every org card (e.g. “Verified [date]” or “Last checked [date]”). Use existing `lastChecked` from data.
2. **Add one-line explainer** for confidence and status **above or beside the first list** (and optionally next to “Include low-confidence”): e.g. “Confidence = how recently we verified; status = active / recently checked / seeking volunteers.”
3. **Add “curated and growing”** when `listing.length` (or `filtered.length`) is below a threshold (e.g. &lt; 6): e.g. “Chadwit is a curated list we’re still growing. Fewer results here doesn’t mean there aren’t great orgs in your area.”
4. **Add minimal About / How we curate:** Who maintains the list, that it’s curated and not comprehensive, that listings are reviewed periodically, that suggestions are welcome. Link from header or footer.
5. **Set contact expectation:** One line near Contact link or on form: “We review submissions regularly and prioritize corrections.”
6. **Audit Volunteer links:** Prefer linking **Volunteer** to a dedicated volunteer/opportunity page. For ROCC, consider replacing `contact` with a volunteer-specific URL if one exists, or clarify in listing that “Contact” is for general inquiries.
7. **Consider adding “Report wrong link” / “Suggest correction”** on the card or in the contact form description to capture link-quality feedback.

---

## Metrics to capture in a live beta

- **Time to first useful org** (first click to a real volunteer/opportunity or contact page that matches intent).
- **Relevant results per session** (count of results after filters; flag sessions with 0–2 results).
- **Dead or misleading link rate** (e.g. Volunteer → generic contact or 404), by org and by featured/high-confidence.
- **FAQ / How to use opens** (proxy for confidence/status confusion).
- **Contact form submissions** (corrections vs. suggestions vs. general).
- **Repeat visit intent** (short survey or follow-up).
- **Trust/freshness perception** (e.g. “How much do you trust that the information here is current?”).

---

*Report generated from codebase audit, `data/organizations.ts`, `Directory.tsx`, `OrganizationCard.tsx`, `Filters.tsx`, `HowToUse.tsx`, `FAQ.tsx`, and spot checks of external org URLs. App run locally; no automated E2E or real-user sessions.*
