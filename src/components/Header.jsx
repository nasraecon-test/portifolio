import React from "react";

export default function Header() {
  const handleSkip = (e) => {
    e.preventDefault();
    const main = document.querySelector("main");
    main?.focus();
  };

  return (
    <header className="site-header" role="banner">
      <a href="#main" className="skip-link" onClick={handleSkip}>
        Skip to content
      </a>
      <div className="container header-grid">
        <a className="brand" href="/" aria-label="Garaad Systems home">
          <svg className="logo" width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
            <rect fill="#94C11F" x="0" y="0" width="36" height="36" rx="6"></rect>
            <text x="50%" y="58%" textAnchor="middle" fill="#0D1A2D" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700">G</text>
          </svg>
          <span className="brand-text">Garaad Systems</span>
        </a>

        <nav className="main-nav" role="navigation" aria-label="Main navigation">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#expertise">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn ghost language-toggle" aria-pressed="false" onClick={() => {
            const current = localStorage.getItem("garaad-lang") || "en";
            const next = current === "en" ? "so" : "en";
            localStorage.setItem("garaad-lang", next);
            window.location.reload();
          }}>
            SO | EN
          </button>

          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

function ThemeButton() {
  const toggle = () => {
    const isDark = document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light", !isDark);
    localStorage.setItem("garaad-theme", isDark ? "theme-dark" : "theme-light");
  };

  return (
    <button className="icon-btn" onClick={toggle} aria-label="Toggle dark mode">
      🌓
    </button>
  );
}
