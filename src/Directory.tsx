import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllOrganizations,
  filterOrganizations,
  getFeaturedOrganizationsMax,
  getUniqueBoroughs,
  getUniqueCategories,
  getUniqueStatusLabels,
  getUniqueTypeLabels,
  defaultFilters,
  type DirectoryFilters,
} from "./lib/organizations";
import { CONTACT_FORM_URL } from "./lib/constants";
import { Filters } from "./components/Filters";
import { FeaturedOrganizations } from "./components/FeaturedOrganizations";
import { OrganizationCard } from "./components/OrganizationCard";
import { HowToUse } from "./components/HowToUse";
import { FAQ } from "./components/FAQ";
import { ContactCTA } from "./components/ContactCTA";
import { Disclaimer } from "./components/Disclaimer";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { AccessibilityBar } from "./components/AccessibilityBar";
import "./Directory.css";

const FEATURED_MAX = 2;

export function Directory() {
  const [filters, setFilters] = useState<DirectoryFilters>(defaultFilters);

  const allOrgs = useMemo(() => getAllOrganizations(), []);

  const categories = useMemo(() => getUniqueCategories(allOrgs), [allOrgs]);
  const boroughs = useMemo(() => getUniqueBoroughs(allOrgs), [allOrgs]);
  const statuses = useMemo(() => getUniqueStatusLabels(allOrgs), [allOrgs]);
  const typeLabels = useMemo(() => getUniqueTypeLabels(allOrgs), [allOrgs]);

  const filtered = useMemo(
    () => filterOrganizations(allOrgs, filters),
    [allOrgs, filters]
  );

  const featured = useMemo(
    () => getFeaturedOrganizationsMax(filtered, FEATURED_MAX),
    [filtered]
  );

  const listing = useMemo(() => {
    const featuredIds = new Set(featured.map((o) => o.id));
    return filtered.filter((o) => !featuredIds.has(o.id));
  }, [filtered, featured]);

  const handleResetFilters = () => setFilters({ ...defaultFilters });

  return (
    <div className="directory">
      <header className="directory-header">
        <AccessibilityBar />
        <div className="header-top">
          <div>
            <h1>Chadwit NYC</h1>
            <p className="tagline">
              Curated nonprofit & community organizations — volunteers, students, newcomers.
            </p>
          </div>
          <nav className="directory-nav" aria-label="Page sections">
            <Link to="/about">About</Link>
            <a href="#faq-community-event" className="directory-nav-highlight">
              Share a community event or project
            </a>
            <a href="#how-to-use-heading">How to use</a>
            <a href="#faq-heading">FAQ</a>
            <a
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Chadwit
            </a>
          </nav>
        </div>
      </header>

      <Filters
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        boroughs={boroughs}
        statuses={statuses}
        typeLabels={typeLabels}
        onReset={handleResetFilters}
      />

      <FeaturedOrganizations organizations={featured} />

      <section className="listing" aria-label="Directory">
        <div className="listing-header">
          <h2>All organizations</h2>
          <span className="listing-count" aria-live="polite">
            {listing.length} of {filtered.length} shown
            {featured.length > 0 && ` (${featured.length} in Top recommended)`}
          </span>
        </div>
        <p className="section-desc">
          {!filters.includeLowConfidence && (
            "Showing high/medium confidence and launch-visible status. "
          )}
          <span className="section-desc-explainer">
            Confidence = how recently we verified the listing; status = whether the org is active or actively seeking volunteers.
          </span>{" "}
          Use filters above to narrow by category, borough, status, or type.
        </p>
        {filtered.length > 0 && filtered.length < 6 && (
          <p className="section-desc section-desc-growing">
            Chadwit is a curated list we’re still growing. Fewer results here doesn’t mean there aren’t great orgs in your area — we’re adding more over time.
          </p>
        )}
        {listing.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-title">No organizations match the current filters.</p>
            <p className="empty-state-hint">
              Try resetting filters or enabling “Include low-confidence” to see more entries.
            </p>
          </div>
        ) : (
          <div className="org-grid">
            {listing.map((org) => (
              <OrganizationCard key={org.id} org={org} />
            ))}
          </div>
        )}
      </section>

      <ContactCTA />
      <HowToUse />
      <FAQ />
      <Disclaimer />
      <Footer />
      <BackToTop />
    </div>
  );
}
