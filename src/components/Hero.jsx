import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading" tabIndex={-1}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-heading">Empowering the Horn of Africa Through Digital Innovation</h1>
          <p className="lead">Garaad Systems builds transformative digital solutions for governments, businesses, and communities across East Africa.</p>
          <div className="hero-ctas">
            <a className="btn primary" href="#contact">Start a Project</a>
            <a className="btn outline" href="#projects">Explore Our Work</a>
          </div>
          <p className="micro">Somali-led • Government & Enterprise • Education & Community</p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 600 400" className="illustration" role="img" aria-label="Abstract map of the Horn of Africa with glowing nodes">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#94C11F"/>
                <stop offset="1" stopColor="#0D1A2D"/>
              </linearGradient>
            </defs>
            <g opacity="0.95">
              <rect x="20" y="20" rx="24" width="560" height="360" fill="url(#g1)" opacity="0.06"></rect>
              <circle cx="140" cy="120" r="6" fill="#94C11F"></circle>
              <circle cx="230" cy="180" r="6" fill="#94C11F"></circle>
              <circle cx="420" cy="140" r="6" fill="#94C11F"></circle>
              <circle cx="360" cy="260" r="6" fill="#94C11F"></circle>
              <path d="M140 120 C 180 90, 230 150, 230 180" stroke="#94C11F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"></path>
              <path d="M230 180 C 300 210, 380 190, 420 140" stroke="#94C11F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"></path>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
