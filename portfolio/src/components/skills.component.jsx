import React from "react";
import { skills } from "../data/info";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Compétences & Stack Technique</h2>

      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.id} className="skill-card">
            <h3 className="skill-category">{group.category}</h3>
            
            <ul className="skill-list">
              {group.items.map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="skill-bullet">›</span>
                  <span className="skill-name">{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;