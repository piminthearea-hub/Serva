import { useEffect, type ReactNode } from "react";
import { CONTACT_FORM_URL } from "../lib/constants";

const faqItems: {
  question: string;
  answer: string;
  answerNode?: ReactNode;
  id?: string;
}[] = [
  {
    question: "What is Chadwit?",
    answer:
      "Chadwit is a curated directory of nonprofit and community organizations in New York City. It helps volunteers, students, and newcomers find organizations with clear pathways to get involved — not a complete or official registry of all nonprofits.",
  },
  {
    question: "How are organizations selected?",
    answer:
      "Organizations are chosen from a curated list based on relevance to volunteering, community involvement, and newcomer support. Entries are reviewed for clarity of mission and availability of opportunities, but inclusion is not an endorsement.",
  },
  {
    question: "What do confidence levels mean?",
    answer:
      "Confidence reflects how current and verifiable the listing information is. High and medium confidence suggest recent checks or reliable sources; low confidence means the data may be outdated or unverified. Low-confidence entries are hidden by default so you can opt in to see them.",
  },
  {
    question: "Why are some organizations featured?",
    answer:
      "Featured (“Top recommended”) organizations are a small subset chosen for having clear volunteer or opportunity pathways and strong fit for the directory’s audience. They’re highlighted for quick discovery, not as a ranking of quality.",
  },
  {
    question: "Why doesn’t Chadwit show every nonprofit?",
    answer:
      "Chadwit is curated, not comprehensive. It focuses on organizations that are a good fit for volunteers, students, and newcomers, with information that has been reviewed for clarity and usefulness. Many other nonprofits exist; this directory is a starting point.",
  },
  {
    question: "What do Active / Checked / Opportunity Open mean?",
    answer:
      "These status labels describe the organization’s current state: Active (generally operating), Checked (recently verified), and Opportunity Open (actively seeking volunteers or participants). Use the status filter to focus on what matters to you.",
  },
  {
    question: "Why do borough results sometimes include citywide organizations?",
    answer:
      "Some organizations serve all of NYC rather than a single borough. When you filter by borough, citywide organizations may still appear because they’re relevant to that area. You can use category and type filters to narrow further.",
  },
  {
    question: "Can organizations update their listing?",
    answer:
      "Listings are maintained from public information and the curated list. If an organization would like to correct or update their entry, they can use the Chadwit contact form.",
  },
  {
    question: "Does Chadwit guarantee legitimacy or availability?",
    answer:
      "No. Chadwit does not verify that organizations are legitimate, solvent, or currently offering opportunities. Always confirm details, eligibility, and availability directly with the organization before committing.",
  },
  {
    question: "Can users suggest organizations?",
    answer:
      "Suggestions are welcome. The directory is curated, so not every suggestion will be added, but community input helps improve the list. Use the Chadwit contact form to submit suggestions.",
  },
  {
    id: "faq-community-event",
    question: "Can I share a community event or project?",
    answer:
      "Yes. Use the Chadwit contact form and choose General inquiry. Please include the organization name, event or project title, date, location, official link, and a short description.",
    answerNode: (
      <>
        <p>
          Yes.{" "}
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Use the Chadwit contact form
          </a>{" "}
          and choose General inquiry. Please include the organization name,
          event or project title, date, location, official link, and a short
          description.
        </p>
      </>
    ),
  },
];

export function FAQ() {
  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#faq-community-event") {
        const el = document.getElementById("faq-community-event");
        if (el && el instanceof HTMLDetailsElement) el.open = true;
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <section className="info-section faq-section" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently asked questions</h2>
      <div className="faq-list" role="list">
        {faqItems.map((item, index) => (
          <details
            key={index}
            id={item.id}
            className="faq-item"
            role="listitem"
          >
            <summary className="faq-question">{item.question}</summary>
            <div className="faq-answer">
              {item.answerNode ?? <p>{item.answer}</p>}
            </div>
          </details>
        ))}
      </div>
      <p className="faq-contact-note">
        For questions, corrections, listing updates, or privacy-related requests, please{" "}
        <a
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          use the Chadwit contact form
        </a>
        .
      </p>
    </section>
  );
}
