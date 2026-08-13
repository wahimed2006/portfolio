export const personalInfo = {
    name: "BA Andy",
    title: "Élève Ingénieur en Informatique, Statistique & IA",
    school: "Polytech Lille",
    status: "1re année de cycle ingénieur (IA / Data / Software)",
    bio: "Élève ingénieur passionné par le développement logiciel, la science des données et l'intelligence artificielle. Je conçois et développe des solutions informatiques performantes, allant des architectures web aux systèmes intelligents.",
    email: "votre.email@exemple.com",
    location: "Lille, France",
    socials: {
        github: "https://github.com/wahimed2006",
        linkedin: "https://www.linkedin.com/in/andy-ba-4b655039a/"
    }
};

export const skills = [
    {
        id: "programming",
        category: "Programmation",
        items: [
            "Python",
            "C",
            "Java — POO",
            "JavaScript",
            "PHP — notions"
        ]
    },
    {
        id: "algorithms",
        category: "Algorithmique & Informatique",
        items: [
            "Algorithmique",
            "Structures de données",
            "Programmation orientée objet",
            "Résolution de problèmes",
            "Bases des systèmes & réseaux"
        ]
    },
    {
        id: "web",
        category: "Développement Web",
        items: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React — notions",
            "Node.js — notions",
            "PHP — notions"
        ]
    },
    {
        id: "data-ia",
        category: "Data & Intelligence Artificielle",
        items: [
            "Python",
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "Machine Learning",
            "Statistiques",
            "Analyse de données"
        ]
    },
    {
        id: "databases",
        category: "Bases de données",
        items: [
            "SQL",
            "PostgreSQL",
            "Modélisation de données"
        ]
    },
    {
        id: "tools",
        category: "Outils & Environnement",
        items: [
            "Git",
            "GitHub",
            "Linux",
            "WSL",
            "Bash"
        ]
    }
];

export const education = [
    {
        degree: "Cycle Ingénieur — Informatique, Statistique & Intelligence Artificielle",
        institution: "Polytech Lille — Université de Lille",
        period: "2026 - Présent",
        description:
            "Formation pluridisciplinaire en informatique, statistique et intelligence artificielle, avec un parcours orienté Data Science, Big Data et ingénierie logicielle. Développement de compétences en algorithmique, programmation, probabilités, statistiques, bases de données, analyse numérique et traitement des données.",
        topics: [
            "Algorithmique & programmation",
            "Python & C",
            "Probabilités & statistiques",
            "Data Science & analyse de données",
            "Bases de données & SQL",
            "Développement web",
            "Intelligence artificielle & Machine Learning",
            "Big Data"
        ]
    },
    {
        degree: "Licence 2 — Informatique, Option Renforcée Recherche",
        institution: "Université de Lille — Faculté des Sciences et Technologies",
        period: "2025 - 2026",
        description:
            "Deuxième année de licence en informatique, avec une formation renforcée en sciences informatiques et une orientation vers la recherche. Approfondissement des concepts fondamentaux de l’informatique à travers la programmation, l’algorithmique, les bases de données et les méthodes de résolution de problèmes.",
        topics: [
            "Algorithmique & programmation",
            "Structures de données",
            "Programmation avancée",
            "Bases de données & SQL",
            "Mathématiques pour l’informatique",
            "Réseaux & systèmes",
            "Méthodes de résolution de problèmes",
            "Approche scientifique & recherche"
        ]
    },
    {
        degree: "Licence 1 — Portail Mathématiques-Informatique",
        institution: "Université de Lille — Faculté des Sciences et Technologies",
        period: "2024 - 2025",
        description:
            "Première année de licence au sein du portail Mathématiques-Informatique, combinant deux disciplines fondamentales autour de la modélisation, du traitement des données et de la programmation. Formation axée sur le développement des capacités de raisonnement, de conception et de résolution de problèmes, constituant une base solide pour une poursuite d’études en informatique.",
        topics: [
            "Mathématiques",
            "Informatique & programmation",
            "Algorithmique",
            "Modélisation",
            "Traitement des données",
            "Raisonnement & démonstration",
            "Résolution de problèmes",
            "Projet professionnel"
        ]
    }
];

export const languages = [
    {
        name: "Français",
        level: "Courant"
    },
    {
        name: "Anglais",
        level: "Intermédiaire"
    }
];

export const interests = [
    "Intelligence artificielle",
    "Développement logiciel",
    "Data Science",
    "Véhicules autonomes",
    "Football",
    "Jeux vidéo",
    "Technologies"
];

export const availability = {
    status: "Disponible",
    lookingFor: [
        "Stage",
        "Projet étudiant",
        "Opportunité en Data / IA / Software"
    ]
};

export const currentlyLearning = [
    "Machine Learning",
    "Statistiques avancées",
    "Big Data",
    "Intelligence Artificielle",
    "Architecture logicielle"
];

export const projects = [
    {
        id: "tower-defense",
        title: "Tower Defense",
        category: "Jeu vidéo / Java",
        period: "2026",
        team: true,
        featured: true,

        shortDescription: "Application de jeu Tower Defense développée en Java (POO) proposant deux modes de plateau, la gestion de vagues de ballons, un catalogue de 7 tours avec évolutions cumulables et la simulation temporelle par tics d'horloge.",

        description: "Conception et modélisation en équipe d'un jeu de type Tower Defense inspiré de Bloons TD[cite: 1]. Le projet intègre la génération de deux types de plateaux (parcours prédéfini ou trajectoires libres horizontal/vertical)[cite: 1], la progression de ballons aux caractéristiques variées (résistance, vitesse, effets de gel/ralentissement)[cite: 1] et la gestion de 7 types de tours d'attaque et de soutien[cite: 1]. Le moteur de jeu gère la boucle temporelle par tics d'horloge[cite: 1], les règles de ciblage[cite: 1], le système d'achats/ventes et d'améliorations cumulables pour le joueur (portée, cadence, puissance, changement de projectile)[cite: 1], ainsi qu'une architecture extensible conçue pour accueillir de nouvelles fonctionnalités[cite: 1].",

        role: "Développement Java — Algorithmique & Programmation Orientée Objet",

        tasks: [
            "Implémentation et finalisation de la classe Board",
            "Développement des méthodes de génération et de gestion des chemins",
            "Implémentation du déplacement des ballons sur les chemins",
            "Participation à l'écriture et à la correction des tests",
            "Développement des évolutions des NeedleTower et DartTower",
            "Participation à la finalisation des différents livrables",
            "Implémentation de la classe Player",
            "Création et intégration de l'enum TowersUpgrades",
            "Implémentation des évolutions disponibles pour les différentes tours",
            "Création d'enums pour les actions du joueur",
            "Complétion de la logique de gestion du joueur"
        ],

        technologies: [
            "Java",
            "JUnit",
            "Git",
            "UML"
        ],

        concepts: [
            "Programmation orientée objet",
            "Héritage & Polymorphisme",
            "Classes abstraites",
            "Énumérations",
            "Structures de données",
            "Algorithmique",
            "Tests unitaires",
            "Génération algorithmique de chemins",
            "Gestion des états du jeu",
            "Système d'amélioration des tours"
        ],

        highlights: [
            "Conception et implémentation d'une architecture orientée objet extensible",
            "Génération algorithmique de chemins de jeu et gestion des collisions/trajectoires",
            "Gestion dynamique des événements temporels (tics d'horloge) et des tirs",
            "Implémentation d'un système complet d'évolution et d'amélioration des tours",
            "Développement de la logique du joueur, des ressources financières et des vies"
        ],

        links: {
            github: ""
        }
    }
];