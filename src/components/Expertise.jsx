import React from "react";

const items = [
  { title: "Digital Government", icon: "🏛️", desc: "We modernize public services with citizen-first platforms, e-governance tools, and data-driven dashboards." },
  { title: "Enterprise Software", icon: "⚙️", desc: "From ERPs to custom CRMs, we build robust systems that scale with your business." },
  { title: "Education & E-Learning", icon: "📚", desc: "We design platforms that make STEM education accessible in Somali, Amharic, and English." }
];

export default function Expertise() {
  return (
    <section id="expertise" className="section expertise" aria-labelledby="expertise-heading">
      <div className="container">
        <h2 id="expertise-heading">Our Expertise</h2>
        <div className="cards three-up">
          {items.map((i) => (
            <article className="card" key={i.title} aria-labelledby={i.title.replace(/\s+/g, "-")}> 
              <div className="icon" aria-hidden="true">{i.icon}</div>
              <h3 id={i.title.replace(/\s+/g, "-")}>{i.title}</h3>
              <p>{i.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}