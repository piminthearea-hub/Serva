import { CONTACT_FORM_URL } from "../lib/constants";

export function ContactCTA() {
  return (
    <aside className="contact-cta" aria-label="Contact Optcause">
      <p>
        We review submissions regularly and prioritize corrections. Have a correction, suggestion, or question?{" "}
        <a
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Use the Optcause contact form
        </a>{" "}
        (you can suggest a new org or report a wrong link).
      </p>
      <p>
        Have a community event or project to share?{" "}
        <a
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Use the Optcause contact form and choose General inquiry.
        </a>
      </p>
    </aside>
  );
}
