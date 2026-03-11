# Optcause NYC — Curated Organization List

**Purpose:** Master list and narrative for the NYC starter set.  
**Last updated:** 2026-03-05.

---

## Launch & UI rules (public build)

- **Launch visibility:** Show only orgs where `confidence` is **high** or **medium** and `statusLabel` is **Active**, **Checked**, or **Opportunity Open**. Use `getOrganizationsForLaunch()` from `data/organizations.ts`. Hide low-confidence and Needs Review/Listed.
- **Organizations vs Platforms / Networks:** In the UI, separate **Organizations** and **Platforms / Networks** (use `typeLabel`). NYIC, RAIN Coalition, etc. are useful but a different experience from direct-service orgs.
- **Category filters (user-facing):** Use the 7 collapsed **displayCategory** values in filters: Community & Immigrant Support · Legal & Housing · Food & Family Support · Youth & STEM · Environment · Animals · Disability Support. Keep **category** / **subcategory** for internal use only.
- **Card content (per org):** Show only: **name**, **displayCategory**, **borough**, **one-line mission** (use `mission` as-is or first sentence), **statusLabel**, **2 active signals** (use `getCardSignals(org)`), and buttons: **Website** · **Volunteer** (if `volunteerOpen`) · **Contact**.

---

## A. TOP RECOMMENDED NYC ORGANIZATIONS

Strongest fits for Optcause: clear NYC presence, active volunteer or program pathways, and verifiable activity. Grouped by priority category.

### Immigrant / Community Support
- **ROCC NYC** — Hell's Kitchen resource center; direct services (shelter, legal, asylum, Medicaid), mobile pantry, youth soccer. Relies on volunteer translators and general volunteers; strong partner list. *Strong for: newcomers, volunteers, community pathways.*
- **NICE (New Immigrant Community Empowerment)** — Queens-based; workforce and skills via courses, workshops, events. Dedicated volunteer page and opportunities calendar. *Strong for: immigrants, students, one-time and ongoing volunteers.*
- **NYIC (New York Immigration Coalition)** — Statewide coalition with strong NYC activity; volunteer form, bimonthly orientations, roles in outreach, interpretation, legal screenings, marshaling. *Strong for: volunteers, advocates, bilingual candidates.*
- **Mixteca** — Brooklyn; Mexican and Latin American immigrant services, immigrant rights, education, health. Multiple volunteer roles (receptionist, health, education, advocacy). *Strong for: Spanish speakers, community volunteers.*

### Legal Aid / Justice
- **VOLS** — Pro bono civil and immigration; Immigration Project with 30+ NYC school/CBO partners. Clear get-help and contact; attorney pro bono + client intake. *Strong for: legal pathways, immigrant youth/families.*
- **Legal Aid Society (NYC)** — Core NYC legal services; 1,900+ volunteers, 150,000+ hours. Volunteer/pro bono page with multiple practice areas. *Strong for: attorneys, law students, specialists.*
- **NYLAG** — Civil legal services; legal and non-legal volunteers (admin, language access). Volunteer form and external job boards. *Strong for: ongoing volunteers, language access.*

### Housing / Tenant Justice
- **Right to Counsel NYC Coalition** — Court Watch at housing courts; volunteers inform tenants and connect to counsel. 7,000+ tenant contacts in 2023. *Strong for: court-based volunteering, tenant support.*
- **Housing Rights Initiative (HRI)** — Tenant rights and fraud investigation; pro bono, intern, volunteer recruitment. *Strong for: legal and non-legal volunteers.*
- **Met Council on Housing** — Tenant hotline (volunteer-staffed); advice and referrals. *Strong for: remote-friendly hotline volunteers.*

### Science & STEM Education
- **HYPOTHEkids** — STEAM K–12; lab internships for high schoolers, professionals as speakers, operations volunteers. Programs: Hk Maker Lab, Bioforce, HYPOTHEkits. *Strong for: students, STEM professionals.*
- **NYC FIRST** — Robotics and STEM teams across NYC; volunteer recruitment for teams and events. *Strong for: mentors, event volunteers.*
- **New York Academy of Sciences (NYAS) Afterschool STEM Mentoring** — STEM professionals mentor middle schoolers; 10 sessions, training, background check. *Strong for: scientists, engineers.*

### Environment
- **Billion Oyster Project** — Harbor restoration on Governors Island; public volunteer days, ambassadors, corporate groups. *Strong for: hands-on environmental volunteering.*
- **Green City Force** — Youth environmental service and careers; Farms at NYCHA, Eco-Hubs, AmeriCorps Service Corps (18–24). Individual and corporate volunteer signup. *Strong for: young adults, career pathway.*
- **NYC Bird Alliance** — Bird conservation and education; Injured Bird Response (remote + transport), Bronx afterschool. *Strong for: year-round, some remote roles.*
- **New York Restoration Project (NYRP)** — Northern Manhattan parks (May–Oct); forest stewardship, invasive species, urban ag. *Strong for: seasonal outdoor volunteering.*

### Animals
- **Animal Care Centers of NYC (ACC)** — City shelters in Manhattan, Queens, Staten Island; dog walking, small animal care, admin. Orientations and 6-month commitment. *Strong for: reliable, structured animal volunteering.*
- **PAWS NY** — Keeps pets with vulnerable owners; dog walking, cat care, fostering. Virtual orientations. *Strong for: human–animal bond, flexible roles.*
- **Sean Casey Animal Rescue** — Brooklyn rescue; shelter, foster, fundraising. Application to volunteer email. *Strong for: Brooklyn-based animal volunteers.*

### Food Access
- **Food Bank For New York City** — Pantry, repack, SNAP support, older adult center; volunteer portal and shifts. *Strong for: hunger relief, groups and individuals.*
- **City Harvest** — Food rescue and distribution; orientation required; Greenmarket, Mobile Markets, repack, nutrition. *Strong for: regular shifts, weekend options.*
- **God's Love We Deliver** — Medically tailored meals; delivery, kitchen, meal kits, office, remote creative. *Strong for: delivery and kitchen volunteers, some remote.*

### Youth Development
- **Apex for Youth** — Mentoring and after-school for underserved Asian American and immigrant youth; Read with Apex, Explorers, athletics. Oct–May commitment. *Strong for: mentors, college pathway.*
- **PowerPlay NYC** — Sports and leadership for girls 5–18; all boroughs; background check required. *Strong for: sports-minded volunteers.*
- **Minds Matter NYC** — College access; three-year mentoring and advising; application and interview. *Strong for: long-term mentors.*

### Disability Inclusion
- **VISIONS** — Blind and low-vision services; older adult center, job readiness, intergenerational (14+). Application, background check, references. *Strong for: youth and adult volunteers.*
- **Helping Hands for the Disabled of NYC** — Companion, delivery, outings, Action Line, clerical; one-year commitment. *Strong for: flexible, ongoing roles.*
- **AHRC NYC** — IDD support in all boroughs; mentoring, financial literacy, arts, gardening. 3 hrs/week, 6 months. *Strong for: student and corporate volunteers.*

### Women / Family Support
- **Safe Families for Children – NYC** — Family Friends, Resource Friends, Coaches; background check, training, 6-month commitment. *Strong for: family support volunteers.*

---

## B. EXPANSION CANDIDATES

Additional NYC organizations that meet inclusion criteria; slightly narrower scope, newer, or volunteer pathway needs a quick verify.

### Immigrant / Community Support
- *(All four in Top Recommended are also the main expansion set for this category; NICE, Mixteca, NYIC, ROCC cover direct service and coalition.)*

### Legal Aid / Justice
- *(VOLS, Legal Aid Society, NYLAG are primary; no further expansion without diluting quality.)*

### Housing / Tenant Justice
- **Housing Conservation Coordinators (HCC)** — Manhattan; Monday Night Legal Clinic, tenant organizing. Volunteer opportunities mentioned; confirm current intake. *Confidence: medium.*

### Science & STEM Education
- **BioBus** — Harlem and mobile labs; paid Junior Scientist internships (high school/college). Volunteer roles not prominently listed; include as opportunity-focused. *Already in seed.*

### Environment
- **RAIN Coalition** — Platform connecting to Bronx River Alliance, Gowanus Canal Conservancy, Green City Force, etc. List as "Platform / Network." *Already in seed.*

### Animals
- **Rescue Dogs Rock NYC** — Transport, events, fundraising, applications; 7–10 day review. *Already in seed.*
- **The Animal Project NYC** — All-volunteer cat rescue; weekly adoptions upper Manhattan. Smaller; verify volunteer contact. *In seed as expansion; confidence medium.*

### Food Access
- *(Food Bank, City Harvest, God's Love cover core; no further expansion here for MVP.)*

### Youth Development
- *(Apex, PowerPlay, Minds Matter are primary.)*

### Disability Inclusion
- **ReelAbilities Film Festival (New York)** — Festival volunteering; verify 2026 dates when announced. *In seed; confidence medium.*

### Women / Family Support
- **Womankind** — Survivor and family services in Brooklyn, Queens, Manhattan. Service-focused; volunteer pathway not prominent; list as opportunity for clients, verify volunteer separately. *In seed as Checked.*
- **Family Beehive** — Virtual women/family support; newer (2022), volunteer interest noted. Verify NYC focus and intake. *In seed as Needs Review; confidence low.*

---

## C. FINAL TYPESCRIPT SEED FILE

The canonical export lives in:

**`data/organizations.ts`**

- **38 organizations** total.
- Fields: `id`, `name`, `category`, `subcategory`, `borough`, `city`, `state`, `mission`, `website`, `contact`, `volunteerOpen`, `opportunityOpen`, `remoteFriendly`, `activeSignals`, `statusLabel`, `lastChecked`, `notes`, `typeLabel`, `confidence`.
- Exported as `organizations` array and `Organization` type.
- Ready to paste into app code or migrate to a backend later.

---

## D. QUALITY CONTROL NOTES

### Duplicates removed
- No duplicate organizations. NYIC (coalition) vs NICE/Mixteca/ROCC (direct service) kept distinct; VOLS vs Legal Aid vs NYLAG kept distinct.
- RAIN Coalition listed as platform linking to other orgs (e.g. Green City Force, Bronx River Alliance); not duplicated as direct-service entries for those partners.

### Uncertain entries
- **Housing Conservation Coordinators (HCC)** — statusLabel "Checked"; volunteer intake not fully verified; confidence medium.
- **ReelAbilities Film Festival** — festival dates (e.g. April 2025) referenced; 2026 dates TBD; confidence medium.
- **Family Beehive** — newer, virtual; NYC focus and volunteer flow need verification; statusLabel "Needs Review", confidence low.
- **Womankind** — volunteerOpen false; opportunityOpen true (client services); volunteer pathway to be confirmed separately.

### Manual review recommended
- **Family Beehive** — confirm NYC scope and current volunteer signup before promoting.
- **Womankind** — add volunteer opportunities to listing once confirmed, or keep as service-only.
- **HCC** — confirm volunteer application flow and update contact/volunteerOpen if needed.
- **The Animal Project NYC** — confirm primary volunteer contact (site or email).
- **ReelAbilities** — update festival dates and volunteer signup when 2026 info is live.

### Omissions by design
- Government-only agencies (e.g. ACC is city-affiliated but included as primary shelter volunteer pathway).
- Purely national orgs with no clear NYC-facing program (except NYAS, which has an explicit NYC afterschool program).
- Dead or unverifiable sites, generic directories, and entities that could not meet 2–3 active signals.

### Status and confidence
- **statusLabel** — "Active" where volunteer/opportunity pathway is clear and current; "Checked" or "Listed" where one signal is weaker; "Needs Review" for Family Beehive.
- **confidence** — "high" for most entries; "medium" for HCC, ReelAbilities, Animal Project; "low" for Family Beehive only.
- **typeLabel** — "Platform / Network" for NYIC and RAIN Coalition; "Direct Organization" for all others.

---

*Optcause NYC seed data — curated for active pathways: get help, volunteer, join a project, attend a program, build a pathway, connect with a real community.*
