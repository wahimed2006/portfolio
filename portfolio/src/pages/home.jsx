export const personalInfo = {
  name: "BA Andy",
  title: "Élève Ingénieur en Informatique, Statistique & IA",
  school: "Polytech Lille",
  status: "1re année de cycle ingénieur (IA / Data / Software)",
  bio: "Élève ingénieur passionné par le développement logiciel, la science des données et l'intelligence artificielle. Je conçois et développe des solutions informatiques performantes, allant des architectures web aux systèmes intelligents.",
  email: "votre.email@exemple.com",
  location: "Lille, France",
  socials: {
    github: "https://github.com/votre-github",
    linkedin: "https://linkedin.com/in/votre-linkedin"
  }
};

export const skills = [
  {
    category: "Informatique & Dev",
    items: ["Python", "C/C++", "JavaScript", "SQL", "Git", "Architecture logicielle"]
  },
  {
    category: "IA & Data Science",
    items: ["Statistiques appliquées", "Machine Learning", "Analyse de données", "Algorithmique avancée"]
  },
  {
    category: "Outils & Environnements",
    items: ["Linux / WSL", "PostgreSQL", "React / Web", "Docker"]
  }
];

export const education = [
  {
    degree: "Cycle Ingénieur Informatique, Statistique & IA",
    institution: "Polytech Lille",
    period: "2026 - Présent",
    description: "Formation approfondie en ingénierie logicielle, modélisation statistique, apprentissage automatique et science des données."
  }
];

const HomePage = () => {
    return (
        <div>
            Élève Ingénieur en Informatique, Statistique & IA
        </div>
    )
};

export default HomePage;