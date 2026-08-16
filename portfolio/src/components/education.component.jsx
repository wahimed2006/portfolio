import React from "react";
import { education } from "../data/info";

const Education = () => {
    return (
        <section id="education" className="education-section">
            <h2 className="section-title">Parcours & Formations</h2>

            <div className="timeline">
                {education.map((ed, index) => (
                    <article key={`${ed.degree}-${index}`} className="timeline-item">
                        {/* Indicateur visuel / Point sur la ligne */}
                        <div className="timeline-marker"></div>

                        <div className="timeline-content">
                            <div className="timeline-header">
                                <span className="timeline-period">{ed.period}</span>
                                <h3 className="timeline-degree">{ed.degree}</h3>
                                <h4 className="timeline-institution">{ed.institution}</h4>
                            </div>

                            <p className="timeline-description">{ed.description}</p>

                            {/* Tags des matières et compétences abordées */}
                            {ed.topics && (
                                <div className="timeline-topics">
                                    {ed.topics.map((topic) => (
                                        <span key={topic} className="topic-tag">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Education;