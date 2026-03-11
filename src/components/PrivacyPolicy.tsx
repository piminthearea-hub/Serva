import { Link } from "react-router-dom";
import { CONTACT_FORM_URL } from "../lib/constants";
import { AccessibilityBar } from "./AccessibilityBar";

export function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-inner">
        <AccessibilityBar />
        <header className="legal-header">
          <Link to="/" className="legal-back">
            ← Back to Chadwit NYC
          </Link>
          <h1>Chadwit Privacy Policy</h1>
          <p className="legal-intro">
            This policy describes how Chadwit may collect, use, and share information when you use the Chadwit NYC directory.
          </p>
          <p className="legal-meta">
            <span className="font-medium">Effective Date:</span> March 2026. References to &quot;Chadwit,&quot; &quot;we,&quot; or &quot;us&quot; refer to the Chadwit service and its operators.
          </p>
        </header>

        <article className="legal-article">
          <section>
            <h2>What Chadwit is</h2>
            <p>
              Chadwit is a curated directory of nonprofit and community organizations in New York City. The directory is informational; we do not run job boards or collect application data.
            </p>
          </section>

          <section>
            <h2>Information we may collect</h2>
            <p>
              Use of the directory itself typically does not require an account. We may collect information you voluntarily send (e.g. via the Chadwit contact form), such as name, email, and message content, to respond to inquiries, suggestions, or listing updates.
            </p>
            <p>
              We may use cookies or similar technologies for basic site operation (e.g. preferences). We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2>How we use information</h2>
            <p>
              We use contact form submissions to respond to you, improve the directory, and handle listing corrections. We may retain messages as needed for those purposes.
            </p>
          </section>

          <section>
            <h2>Third-party links</h2>
            <p>
              The directory links to organization websites and external forms (e.g. Google Forms). Those services have their own privacy policies. We are not responsible for their practices.
            </p>
          </section>

          <section>
            <h2>Updates and contact</h2>
            <p>
              We may update this policy from time to time. For questions or privacy-related requests, please use the{" "}
              <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer">Chadwit contact form</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
