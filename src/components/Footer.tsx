import { Link } from "react-router-dom";
import { CONTACT_FORM_URL } from "../lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-brand">Chadwit NYC</p>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/about">About</Link>
          <a href="#how-to-use-heading">How to use</a>
          <a href="#faq-heading">FAQ</a>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact"
          >
            Contact Chadwit
          </a>
        </nav>
        <p className="footer-copy">
          Curated nonprofit & community directory. Data may change — confirm with each organization. © {year}
        </p>
        <p className="footer-credit">Created by Peem and Yuri.</p>
      </div>
    </footer>
  );
}
