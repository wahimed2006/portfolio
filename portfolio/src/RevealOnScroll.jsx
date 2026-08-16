import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children, direction = "up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // 1. Sauvegarder la valeur actuelle du nœud DOM dans une variable locale
    const currentElement = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    // 2. Utiliser la variable locale dans le cleanup pour éviter l'avertissement
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${isVisible ? "active" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;