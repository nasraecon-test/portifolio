import React from "react";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading">Who We Are</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>Garaad Systems is a Somali-led technology company pioneering digital transformation in the Horn of Africa. We specialize in building scalable, culturally-aware software for governments, enterprises, and educational institutions. Our mission is to bridge the digital divide and empower communities through innovation, design, and code.</p>
            <p className="muted">We combine local knowledge with global engineering practices to deliver resilient, inclusive, and performant digital products.</p>
          </div>
          <figure className="about-visual">
            <img src="/assets/team-placeholder.jpg" alt="Garaad Systems team collaboration" width="720" height="480" />
          </figure>
        </div>
      </div>
    </section>
  );
}