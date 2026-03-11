import { CONTACT_FORM_URL } from "../lib/constants";

export function HowToUse() {
  return (
    <section className="info-section how-to-use" aria-labelledby="how-to-use-heading">
      <h2 id="how-to-use-heading">How to use Optcause</h2>
      <div className="info-content">
        <p>
          Optcause is a <strong>curated directory</strong> of nonprofit and community organizations in NYC — for volunteers, students, and newcomers looking for ways to get involved.
        </p>
        <ul>
          <li>
            <strong>Filters:</strong> Narrow results by <em>category</em>, <em>borough</em>, <em>status</em>, and <em>type</em>. Use “Reset filters” to clear and start over.
          </li>
          <li>
            <strong>Top recommended:</strong> A small, hand-picked set of organizations with clear volunteer or opportunity pathways, shown at the top.
          </li>
          <li>
            <strong>Confidence:</strong> Entries are tagged by how up-to-date and verifiable the information is. Low-confidence entries are hidden by default; turn on “Include low-confidence” to see them.
          </li>
          <li>
            <strong>Cards:</strong> Each card links to the organization’s official website and contact page when available — use those to confirm details and get in touch.
          </li>
        </ul>
        <p>
          Have a correction, suggestion, or question?{" "}
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Use the Optcause contact form.
          </a>
        </p>
      </div>
    </section>
  );
}
