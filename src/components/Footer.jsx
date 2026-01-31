import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-inline">
            <svg width="28" height="28" viewBox="0 0 36 36" aria-hidden="true">
              <rect fill="#94C11F" x="0" y="0" width="36" height="36" rx="6"></rect>
              <text x="50%" y="58%" textAnchor="middle" fill="#0D1A2D" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700">G</text>
            </svg>
            <div>
              <div className="brand-text">Garaad Systems</div>
              <div className="tagline">Code. Culture. Change.</div>
            </div>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#expertise">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="social">
          <a href="https://linkedin.com/company/garaad-systems" aria-label="LinkedIn" rel="noopener">LinkedIn</a>
          <a href="https://twitter.com/garaad_systems" aria-label="Twitter" rel="noopener">Twitter</a>
          <a href="https://github.com/garaad-systems" aria-label="GitHub" rel="noopener">GitHub</a>
        </div>

        <div className="lang-copyright">
          <div className="language-mini">Somali | English</div>
          <div className="copyright">© 2026 Garaad Systems. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}