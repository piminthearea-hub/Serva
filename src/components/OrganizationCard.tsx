import type { Organization } from "../lib/organizations";
import { getCardSignals } from "../lib/organizations";

interface OrganizationCardProps {
  org: Organization;
}

export function OrganizationCard({ org }: OrganizationCardProps) {
  const signals = getCardSignals(org);

  return (
    <article className="org-card">
      <div className="org-card-header">
        <h3 className="org-name">
          <a href={org.website} target="_blank" rel="noopener noreferrer">
            {org.name}
          </a>
        </h3>
        <span className="org-type">{org.typeLabel}</span>
      </div>
      <p className="org-mission">{org.mission}</p>
      <div className="org-meta">
        <span className="org-meta-item">{org.category}</span>
        <span className="org-meta-item">{org.borough ?? "Unspecified"}</span>
        <span className="org-meta-item">{org.statusLabel}</span>
        <span className="org-meta-item org-confidence">{org.confidence}</span>
        {org.lastChecked && (
          <span className="org-meta-item org-last-checked" title="When this listing was last verified">
            Last checked {org.lastChecked}
          </span>
        )}
      </div>
      {signals.length > 0 && (
        <ul className="org-signals" aria-label="Active signals">
          {signals.slice(0, 2).map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      )}
      <div className="org-actions">
        <a
          href={org.website}
          target="_blank"
          rel="noopener noreferrer"
          className="org-btn org-btn-primary"
        >
          Website
        </a>
        {org.volunteerOpen && org.contact && (
          <a
            href={org.contact.startsWith("http") ? org.contact : org.website}
            target="_blank"
            rel="noopener noreferrer"
            className="org-btn"
          >
            Volunteer
          </a>
        )}
        {org.contact && (
          org.contact.startsWith("http") ? (
            <a
              href={org.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="org-btn"
            >
              Contact
            </a>
          ) : (
            <span className="org-contact-text" title={org.contact}>
              Contact
            </span>
          )
        )}
      </div>
    </article>
  );
}
