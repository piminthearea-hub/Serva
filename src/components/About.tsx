import { Link } from "react-router-dom";
import { CONTACT_FORM_URL } from "../lib/constants";
import { AccessibilityBar } from "./AccessibilityBar";

export function About() {
  return (
    <div className="legal-page">
      <div className="legal-inner">
        <AccessibilityBar />
        <header className="legal-header">
          <Link to="/" className="legal-back">
            ← Back to Optcause
          </Link>
          <h1>About Optcause</h1>
          <p className="legal-intro">
            Who we are and how the directory is built and maintained.
          </p>
        </header>

        <article className="legal-article">
          <section>
            <h2>Who runs Optcause</h2>
            <p>
              Optcause is maintained by a small team (Peem and Yuri). We are not a government agency or a formal nonprofit registry. We built this directory to help volunteers, students, and newcomers find community and nonprofit organizations in New York City with clear pathways to get involved.
            </p>
          </section>

          <section>
            <h2>How we curate the list</h2>
            <p>
              The directory is <strong>curated, not comprehensive</strong>. We choose organizations based on relevance to volunteering, community involvement, and newcomer support. Entries are reviewed for clarity of mission and availability of opportunities (e.g. volunteer pages, contact info). Inclusion is not an endorsement — we do not verify that organizations are legitimate, solvent, or currently offering opportunities. You should always confirm details directly with each organization.
            </p>
            <p>
              Listings are <strong>reviewed periodically</strong>. We add and update entries as we check websites and public information. &quot;Last checked&quot; on each card shows when we last verified that listing. Confidence levels (high, medium, low) reflect how current and verifiable the information is; low-confidence entries are hidden by default so you can opt in to see them.
            </p>
          </section>

          <section>
            <h2>Suggestions and corrections</h2>
            <p>
              We welcome suggestions for new organizations and corrections to existing listings. Use the{" "}
              <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer">
                Optcause contact form
              </a>{" "}
              to submit them. We review submissions regularly and prioritize corrections so the directory stays as accurate as possible. We can’t add every suggested org, but community input helps us improve.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
