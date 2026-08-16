import React, { useState } from "react";
import { personalInfo, availability } from "../data/info";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  // Fonction pour copier l'email en 1 clic
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        {/* En-tête avec rappel du statut */}
        <div className="contact-badge">
          <span className="status-dot"></span>
          <span>{availability.status} pour de nouvelles opportunités</span>
        </div>

        <h2 className="contact-title">Travaillons ensemble</h2>
        <p className="contact-subtitle">
          Que ce soit pour un stage, un projet ou simplement échanger autour de la Data, de l'IA ou du développement logiciel, ma boîte de réception est ouverte.
        </p>

        {/* Boutons d'action principaux */}
        <div className="contact-actions">
          <a href={`mailto:${personalInfo.email}`} className="btn-mail">
            Envoyer un email
          </a>

          <button onClick={handleCopyEmail} className="btn-copy">
            {copied ? "Email copié !" : "Copier l'adresse"}
          </button>
        </div>

        {/* Liens réseaux & localisation */}
        <div className="contact-footer-info">
          <div className="info-item">
            <span className="info-label">Localisation :</span>
            <span className="info-value">{personalInfo.location}</span>
          </div>

          <div className="social-links">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              GitHub
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;