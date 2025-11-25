import React from "react";
import proj1 from "../pages/proj1.jpg";   
import proj2 from "../pages/proj2.jpg";   
import "./Projects.css";

const PROJECTS = [
  {
    title: "Food Fiesta",
    desc: "Restaurant menu website with categorized dishes and modern layout.",
    tech: "HTML & CSS",
    img: proj1,
    link: "https://github.com/rajjeremiahocampo28-cell/Case-Study.git"
  },
  {
    title: "Prestige Chronos",
    desc: "Luxury watch e-commerce concept with clean UI and product cards.",
    tech: "React & JavaScript",
    img: proj2,
    link: "https://github.com/rajjeremiahocampo28-cell/Case-Study.git"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="project-card">
              <div
                className="project-img"
                style={{ backgroundImage: `url(${p.img})` }}
              ></div>

              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className="project-tech">{p.tech}</p>

              <a 
                href={p.link} 
                className="project-btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
