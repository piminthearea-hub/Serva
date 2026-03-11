import { CONTACT_FORM_URL } from "../lib/constants";

export function Disclaimer() {
  return (
    <aside className="disclaimer" role="note" aria-label="Data disclaimer">
      <p>
        Optcause uses public information and curated data. Details may change. Always confirm hours, requirements, and availability directly with each organization before relying on them.
      </p>
      <p>
        For questions, corrections, listing updates, or privacy-related requests, please{" "}
        <a
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          use the Optcause contact form
        </a>
        .
      </p>
    </aside>
  );
}
