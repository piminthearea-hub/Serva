import { OrganizationCard } from "./OrganizationCard";
import type { Organization } from "../lib/organizations";

interface FeaturedOrganizationsProps {
  organizations: Organization[];
}

export function FeaturedOrganizations({ organizations }: FeaturedOrganizationsProps) {
  if (organizations.length === 0) return null;

  return (
    <section className="featured" aria-label="Featured organizations">
      <h2>Top recommended</h2>
      <p className="section-desc">
        Organizations with clear volunteer or opportunity pathways, selected from the curated list.
      </p>
      <div className="org-grid featured-grid">
        {organizations.map((org) => (
          <OrganizationCard key={org.id} org={org} />
        ))}
      </div>
    </section>
  );
}
