import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="section cta" aria-labelledby="cta-heading">
      <div className="container cta-grid">
        <div>
          <h2 id="cta-heading">Let’s Build the Future Together</h2>
          <p className="lead">Whether you’re a government agency, startup, or NGO, we’re ready to co-create solutions that matter.</p>
          <div className="hero-ctas">
            <a className="btn primary" href="/book">Book a Consultation</a>
            <a className="btn outline" href="/contact">Contact Us</a>
          </div>
        </div>
        <aside className="contact-card" aria-label="Contact details">
          <p className="muted">Office: Mogadishu • Remote-friendly</p>
          <p><strong>hello@garaadsystems.example</strong></p>
        </aside>
      </div>
    </section>
  );
}