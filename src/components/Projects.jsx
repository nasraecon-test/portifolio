import React from "react";

const projects = [
  {
    id: "srib",
    title: "Somali Regional Investment Bureau Digital Platform",
    desc: "Public-facing investment portal, investor dashboards, and regulatory automation.",
    img: "/assets/project-srib.png",
    url: "/case-studies/srib"
  },
  {
    id: "stem",
    title: "Garaad STEM Learning Portal",
    desc: "E-learning with multilingual content, offline-first features, and teacher analytics.",
    img: "/assets/project-stem.png",
    url: "/case-studies/stem-portal"
  },
  {
    id: "cloudcore",
    title: "CloudCore Hosting Infrastructure",
    desc: "Localized, resilient cloud hosting and edge services for East African institutions.",
    img: "/assets/project-cloud.png",
    url: "/case-studies/cloudcore"
  },
  {
    id: "diaspora",
    title: "Diaspora Engagement Dashboard",
    desc: "Tools connecting diaspora investors and local opportunity pipelines with secure identity flows.",
    img: "/assets/project-diaspora.png",
    url: "/case-studies/diaspora"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading">Our Impact</h2>

        <div className="projects-carousel" role="list" aria-label="Featured projects">
          {projects.map((p) => (
            <article key={p.id} className="project-card" role="listitem">
              <img src={p.img} alt={`${p.title} screenshot`} />
              <div className="project-body">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <a className="link muted" href={p.url}>View Case Study →</a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}