import React from "react";
import { personalInfo, languages, interests, availability } from "../data/info";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">À propos de moi</h2>

      <div className="about-grid">
        {/* Colonne principale : Bio et statut */}
        <div className="about-main">
          <p className="about-bio">{personalInfo.bio}</p>

          {availability && (
            <div className="availability-card">
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-title">{availability.status}</span>
              </div>
              <p className="status-text">
                À la recherche de :{" "}
                <strong>{availability.lookingFor.join(" • ")}</strong>
              </p>
            </div>
          )}
        </div>

        {/* Colonne latérale : Détails rapides (Langues & Intérêts) */}
        <aside className="about-sidebar">
          {/* Localisation */}
          <div className="info-block">
            <h3 className="block-title">Localisation</h3>
            <p className="location-text">{personalInfo.location}</p>
          </div>

          {/* Langues */}
          {languages && languages.length > 0 && (
            <div className="info-block">
              <h3 className="block-title">Langues</h3>
              <ul className="languages-list">
                {languages.map((lang) => (
                  <li key={lang.name} className="language-item">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Centres d'intérêt */}
          {interests && interests.length > 0 && (
            <div className="info-block">
              <h3 className="block-title">Centres d'intérêt</h3>
              <div className="interests-tags">
                {interests.map((interest) => (
                  <span key={interest} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

export default AboutMe;