import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/info";

const links = [
  { name: "Accueil", href: "#accueil" },
  { name: "Qui suis-je", href: "#about" },
  { name: "Parcours", href: "#education" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effet d'ombre/bordure quand on fait défiler la page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`topbar-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        {/* Logo / Nom d'ingénieur */}
        <a href="#accueil" className="nav-logo">
          <span className="logo-symbol">&lt;</span>
          <span className="logo-text">{personalInfo.name}</span>
          <span className="logo-symbol">/&gt;</span>
        </a>

        {/* Liens de navigation Desktop */}
        <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bouton d'action rapide */}
        <div className="nav-right">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="nav-github-btn"
          >
            GitHub
          </a>

          {/* Bouton burger pour mobile */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
            <span className="burger-bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;