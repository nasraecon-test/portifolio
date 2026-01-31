import React from "react";

const testimonials = [
  { quote: "Garaad Systems transformed our services — faster citizen response, transparent workflows, and measurable outcomes.", author: "— Ministry Official, Puntland" },
  { quote: "Their diaspora engagement tools helped us raise funding and coordinate projects with ease.", author: "— Diaspora Entrepreneur" },
  { quote: "Students who used the Garaad STEM portal showed improved test scores and engagement.", author: "— Educator, Mogadishu" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading">What Our Partners Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <blockquote className="testimonial" key={i}>
              <p>{t.quote}</p>
              <footer>{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}