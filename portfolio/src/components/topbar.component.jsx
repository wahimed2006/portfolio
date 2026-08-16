import React from "react";

const links = [
  { name: "Accueil", href: "#accueil" },
  { name: "Qui suis-je", href: "#about" },
  { name: "Parcours", href: "#education" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="nav-container">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Topbar;