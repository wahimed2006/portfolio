import React, { useState, useEffect } from "react";
import { projects } from "../data/info";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filtrage de la liste
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  // Fermeture de la modale avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Projets Réalisés</h2>
        
        {/* Contrôles de filtrage */}
        <div className="filter-group">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Tous ({projects.length})
          </button>
          <button
            className={`filter-btn ${filter === "academic" ? "active" : ""}`}
            onClick={() => setFilter("academic")}
          >
            Scolaires ({projects.filter((p) => p.type === "academic").length})
          </button>
          <button
            className={`filter-btn ${filter === "personal" ? "active" : ""}`}
            onClick={() => setFilter("personal")}
          >
            Personnels ({projects.filter((p) => p.type === "personal").length})
          </button>
        </div>
      </div>

      {/* Grille de cartes */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="card-top">
              <span className={`badge badge-${project.type}`}>
                {project.type === "academic" ? "Scolaire" : "Personnel"}
              </span>
              <span className="project-period">{project.period}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <span className="project-category">{project.category}</span>
            <p className="project-short-desc">{project.shortDescription}</p>

            <div className="project-tags">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="tech-tag more">+{project.technologies.length - 4}</span>
              )}
            </div>

            <div className="card-actions">
              <button
                className="btn-details"
                onClick={() => setSelectedProject(project)}
              >
                Détails & Architecture →
              </button>
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-github"
                  aria-label="Code source GitHub"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Modale de détails */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className={`badge badge-${selectedProject.type}`}>
                  {selectedProject.type === "academic" ? "Projet Scolaire" : "Projet Personnel"}
                </span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-role">{selectedProject.role}</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Description & Contexte</h4>
                <p>{selectedProject.description}</p>
              </div>

              {selectedProject.highlights && (
                <div className="modal-section">
                  <h4>Points Clés & Réalisations</h4>
                  <ul className="modal-list">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.tasks && (
                <div className="modal-section">
                  <h4>Tâches & Implémentation</h4>
                  <ul className="modal-list">
                    {selectedProject.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-section">
                <h4>Technologies & Concepts</h4>
                <div className="modal-tags">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag active">
                      {tech}
                    </span>
                  ))}
                  {selectedProject.concepts.map((concept) => (
                    <span key={concept} className="tech-tag concept">
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {selectedProject.links?.github && (
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Voir le code source sur GitHub
                </a>
              )}
              <button
                className="btn-secondary"
                onClick={() => setSelectedProject(null)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;