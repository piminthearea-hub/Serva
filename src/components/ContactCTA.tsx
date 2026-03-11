import { CONTACT_FORM_URL } from "../lib/constants";

export function ContactCTA() {
  return (
    <aside className="contact-cta" aria-label="Contact Chadwit">
      <p>
        We review submissions regularly and prioritize corrections. Have a correction, suggestion, or question?{" "}
        <a
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Use the Chadwit contact form
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
          Use the Chadwit contact form and choose General inquiry.
        </a>
      </p>
    </aside>
  );
}
