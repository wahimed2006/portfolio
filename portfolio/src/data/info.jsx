export const personalInfo = {
    name: "BA Andy",
    title: "Élève Ingénieur en Informatique, Statistique & IA",
    school: "Polytech Lille",
    status: "1re année de cycle ingénieur (IA / Data / Software)",
    bio : "Élève ingénieur passionné par l’informatique et les systèmes intelligents, je m’intéresse particulièrement au développement logiciel, à la data et à l’intelligence artificielle. J’aime transformer des idées et des problématiques concrètes en solutions technologiques utiles, robustes et évolutives.",
    email: "wahimed2006@gmail.com",
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
            "Résolution de problèmes"
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
            "Architecture des ordinateurs",
            "Méthodes de résolution de problèmes",
            "Raisonnement & démonstration",
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
        type: "academic",
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
    },
    {
        id: "weather-app",
        title: "Weather App",
        category: "Développement Web / React",
        type: "personal",
        period: "2026",
        team: false,
        featured: true,

        shortDescription: "Application météo réactive construite avec React, Webpack et l'API Open-Meteo, offrant des prévisions géolocalisées en temps réel, horaires et sur 7 jours.",

        description: "Conception et développement d'une application météo Web responsive et moderne. Le projet s'appuie sur l'API Open-Meteo pour récupérer la météo actuelle selon la géolocalisation de l'utilisateur, ainsi que les prévisions heure par heure et à 7 jours. L'environnement de build a été configuré de zéro sans conteneurisation préfaite (sans Create React App / Vite), en assemblant et paramétrant sur-mesure Webpack, Babel et l'ensemble des loaders et plugins associés.",

        role: "Développeur Front-End — Configuration & Intégration",

        tasks: [
            "Mise en place et configuration complète de Webpack, Babel et de leurs plugins (HTML, Favicon, Copy)",
            "Intégration de l'API Open-Meteo pour la récupération des métriques météo en temps réel et prévisionnelles",
            "Développement de l'interface utilisateur réactive avec React pour la météo actuelle, horaire et hebdomadaire",
            "Gestion de la géolocalisation du navigateur pour l'affichage automatique de la météo locale",
            "Stylisation et optimisation du design pour un rendu responsive multi-supports"
        ],

        technologies: [
            "React",
            "JavaScript (ES6+)",
            "Webpack",
            "Babel",
            "Open-Meteo API",
            "HTML5",
            "CSS3"
        ],

        concepts: [
            "Développement Front-End",
            "Consommation d'APIs REST",
            "Bundling & Tooling JS (Webpack)",
            "Babel Transpilation",
            "Géolocalisation Web",
            "Design Responsive"
        ],

        highlights: [
            "Configuration sur-mesure de Webpack et Babel sans boilerplate",
            "Intégration de l'API Open-Meteo pour la météo en temps réel et prévisions sur 7 jours",
            "Détection automatique de la position de l'utilisateur via la géolocalisation Web",
            "Interface fluide et adaptative sur mobile, tablette et desktop"
        ],

        links: {
            github: "https://github.com/wahimed2006/weather_app"
        }
    },
    {
        id: "smart-transit",
        title: "Smart Transit — Billettique NFC & Cryptographie",
        category: "Sécurité & Systèmes NFC / Python",
        type: "personal",
        period: "2026",
        team: false,
        featured: true,

        shortDescription: "Moteur de billettique NFC en Python intégrant la pile logicielle PC/SC (pyscard) et du chiffrement AES, conçu pour cartes à puce et validé par simulation.",

        description: "Conception d'un système de billettique sans contact NFC en Python prêt pour un déploiement sur matériel réel. Le projet intègre la couche de communication PC/SC (pyscard) pour dialoguer avec des cartes à puce ainsi qu'un module de sécurité AES (cryptography.hazmat) pour chiffrer les données sensibles (E-Purse, profils usagers). L'ensemble de la logique métier (tarification dynamique, correspondances, gestion des accès) et de la tolérance aux erreurs matérielles a été validé à travers un environnement de simulation complet.",

        role: "Développeur Python — Architecture & Sécurité NFC",

        tasks: [
            "Développement de l'interface d'échange APDU / NFC via PyScard (gestion des cartes, timeouts et reconnexions)",
            "Mise en place de la couche cryptographique AES (cryptography.hazmat) pour le chiffrement des cartes passives",
            "Création d'un environnement de simulation pour valider les scénarios d'utilisation (valideur, guichet, solde)",
            "Implémentation de la logique métier : calcul tarifaire dynamique et détection automatique des correspondances",
            "Développement résilient avec typage statique rigoureux (typing) et gestion des exceptions matérielles"
        ],

        technologies: [
            "Python 3",
            "PyScard (PC/SC / APDU)",
            "Cryptography (AES)",
            "NFC / Smart Cards (Protocole)",
            "Git"
        ],

        concepts: [
            "Architecture matérielle-prête (Hardware-Ready)",
            "Communication carte à puce (PC/SC & APDU)",
            "Sécurité & Chiffrement symétrique (AES)",
            "Simulation de systèmes embarqués",
            "Portefeuille électronique (E-Purse)",
            "Tolérance aux pannes & Gestion d'exceptions"
        ],

        highlights: [
            "Code conçu pour s'interfacer avec de vrais lecteurs PC/SC grâce à l'intégration de PyScard",
            "Chiffrement AES de bout en bout des données usagers pour prévenir le clonage et la fraude",
            "Environnement de simulation permettant de valider l'ensemble du cycle de vie des cartes sans matériel physique",
            "Architecture logicielle propre, entièrement typée et prête pour un bench de tests physiques"
        ],

        links: {
            github: "https://github.com/wahimed2006/SOTRACO-Smart-Transit"
        }
    }
];