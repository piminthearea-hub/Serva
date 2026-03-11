import { Link } from "react-router-dom";
import { CONTACT_FORM_URL } from "../lib/constants";
import { AccessibilityBar } from "./AccessibilityBar";

export function TermsOfUse() {
  return (
    <div className="legal-page">
      <div className="legal-inner">
        <AccessibilityBar />
        <header className="legal-header">
          <Link to="/" className="legal-back">
            ← Back to Chadwit NYC
          </Link>
          <h1>Chadwit Terms of Use</h1>
          <p className="legal-intro">
            These Terms govern your access to and use of the Chadwit NYC directory and related content (the &quot;Service&quot;).
          </p>
          <p className="legal-meta">
            <span className="font-medium">Effective Date:</span> March 2026. References to &quot;Chadwit,&quot; &quot;we,&quot; or &quot;us&quot; mean the Chadwit service and its operators.
          </p>
        </header>

        <article className="legal-article">
          <section>
            <h2>About Chadwit</h2>
            <p>
              Chadwit is a curated directory of nonprofit and community organizations in New York City. It is designed to help volunteers, students, and newcomers find organizations with clear pathways to get involved. Chadwit is not a complete or official registry of all nonprofits.
            </p>
          </section>

          <section>
            <h2>No endorsement or guarantee</h2>
            <p>
              Inclusion in the directory is not an endorsement. Chadwit does not verify that organizations are legitimate, solvent, or currently offering opportunities. You should confirm details, eligibility, and availability directly with each organization before relying on them.
            </p>
          </section>

          <section>
            <h2>Acceptable use</h2>
            <p>
              You may use the Service for personal, non-commercial use to find and contact organizations. You may not scrape, copy, or misuse the directory data in a way that competes with or undermines Chadwit.
            </p>
          </section>

          <section>
            <h2>Third-party links</h2>
            <p>
              The Service links to external websites (e.g. organization sites, contact forms). Those sites have their own terms and policies. Chadwit is not responsible for their content or practices.
            </p>
          </section>

          <section>
            <h2>Changes and contact</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance. For questions or feedback, please use the{" "}
              <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer">Chadwit contact form</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
