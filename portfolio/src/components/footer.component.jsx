import React from "react";
import { personalInfo } from "../data/info";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne gauche : Logo et rappel du rôle */}
        <div className="footer-brand">
          <a href="#accueil" className="footer-logo">
            <span className="logo-symbol">&lt;</span>
            <span className="logo-text">{personalInfo.name}</span>
            <span className="logo-symbol">/&gt;</span>
          </a>
          <p className="footer-role">{personalInfo.title} @ {personalInfo.school}</p>
        </div>

        {/* Colonne centrale : Navigation rapide */}
        <nav className="footer-nav">
          <a href="#accueil">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#education">Parcours</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Colonne droite : Liens sociaux */}
        <div className="footer-socials">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="footer-social-link"
          >
            Email
          </a>
        </div>
      </div>

      {/* Ligne inférieure : Copyright & Mentions techniques */}
      <div className="footer-bottom">
        <p>© {currentYear} {personalInfo.name} — Tous droits réservés.</p>
        <p className="footer-tech">Développé avec React & CSS</p>
      </div>
    </footer>
  );
};

export default Footer;