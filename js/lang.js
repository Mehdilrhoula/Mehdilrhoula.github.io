
const translations = {
    fr: {
        // Navigation commune
        navHome: "Accueil",
        navProjects: "Mes projets",
        navSkills: "Mes compétences",
        navExperience: "Mes expériences",
        navContact: "Contact",

        // Accueil
        metaDescription: "Portfolio de Mehdi Lrhoula, étudiant à Epitech en reconversion vers l'informatique. Découvrez mes projets, compétences et expériences.",
        heroIntro: "Bonjour, je suis",
        heroSubtitle: "Étudiant à Epitech • Informatique, Data & Intelligence Artificielle",
        heroDescription: "En reconversion professionnelle vers l'informatique, je suis actuellement étudiant à Epitech en Pré-MSc. Après plusieurs années d'expérience en gestion de projets, business development et transport maritime international, je développe aujourd'hui mes compétences techniques afin de construire un profil à l'interface entre technologies et enjeux métiers.",
        heroPortfolio: "À travers ce portfolio, je présente mes projets, les technologies que j'apprends et ma progression au cours de ma formation.",
        discoverProjects: "Découvrir mes projets",
        downloadCV: "Télécharger mon CV",

        // Projets
        projectsMetaDescription: "Découvrez les projets informatiques réalisés par Mehdi Lrhoula au cours de sa formation à Epitech.",
        projectsTitle: "Mes projets",
        projectsIntroduction: "Une sélection de projets réalisés à Epitech et en autonomie, qui illustrent mes compétences en développement et en conception de produits numériques.",
        projectContextTitle: "Contexte et objectif",
        projectWorkTitle: "Ce que j'ai réalisé",
        projectLearningTitle: "Ce que j'ai appris",
        viewGithub: "Voir le code sur GitHub",
        projectInProgress: "Projet en cours de conception.",

        pyjobsContext: "Développement d'une plateforme de recrutement dans le cadre de ma formation à Epitech. L'objectif était de créer une application web permettant aux entreprises de publier des offres d'emploi et aux candidats de postuler.",
        pyjobsWork: "J’ai développé des fonctionnalités du frontend React et intégré les échanges avec une API Django REST réalisée en équipe. J’ai travaillé sur les parcours candidat et employeur : consultation des offres, filtres de recherche, formulaires de candidature, authentification et tableaux de bord. J’ai également participé aux tests des permissions et des échanges frontend/backend.",
        pyjobsLearning: "J’ai approfondi React (composants, états, formulaires), les appels API REST, la gestion des droits selon les rôles, les tests fonctionnels et la collaboration avec Git. J’ai appris à relier une interface à un serveur et à diagnostiquer les erreurs entre les deux.",
        pyjobsCaptionHome: "Accueil — Présentation de la plateforme et découverte des offres d'emploi.",
        pyjobsCaptionEmployer: "Espace employeur — Gestion des entreprises, des annonces et des candidatures reçues.",
        pyjobsCaptionCandidate: "Espace candidat — Consultation des candidatures et suivi de leur statut.",

        hangmanTitle: "Jeu du Pendu",
        hangmanContext: "Réalisation d'un jeu du Pendu en Python dans le cadre de ma formation à Epitech. L'objectif était de mettre en pratique les fondamentaux de la programmation en développant une application interactive.",
        hangmanWork: "Le projet permet de sélectionner aléatoirement un mot, de gérer les lettres proposées par le joueur, les erreurs et les conditions de victoire ou de défaite. Une interface graphique a ensuite été développée avec Pygame.",
        hangmanLearning: "Ce projet m'a permis de progresser dans l'utilisation des fonctions, des conditions, des boucles, des fichiers et dans l'organisation générale d'un programme Python.",

        codingContext: "Réalisation d'un site web dans le cadre de ma formation à Epitech. L'objectif était de découvrir les fondamentaux du développement web et de construire des pages structurées en HTML et mises en forme avec CSS.",
        codingWork: "J'ai créé plusieurs pages web en utilisant les principales balises HTML et les propriétés CSS pour organiser et mettre en forme le contenu. J'ai également travaillé sur la structure des pages, la navigation et l'adaptation de l'affichage à différentes tailles d'écran.",
        codingLearning: "Ce projet m'a permis de mieux comprendre la séparation entre la structure HTML et la mise en forme CSS, ainsi que l'utilisation de Flexbox et des media queries pour créer des interfaces responsives.",
        codingProgressTitle: "Ma progression",
        codingProgress: "CodingPedia a évolué progressivement au fil de plusieurs exercices. J'ai commencé par construire la structure des pages en HTML avant d'ajouter progressivement la navigation, la mise en forme CSS et l'adaptation de l'interface aux différentes tailles d'écran.",

        frigoTechnologies: "Conception produit • Gestion de projet • Gantt",
        frigoContext: "Projet de conception d'un réfrigérateur intelligent réalisé en équipe dans le cadre de ma formation à Epitech. L'objectif est d'imaginer une solution permettant de mieux gérer les aliments, de réduire le gaspillage et de faciliter l'organisation des repas.",
        frigoWork: "Avec mon équipe, nous avons défini les fonctionnalités envisagées : gestion des stocks, suivi des dates de péremption, recommandations de recettes et planification des repas. Nous travaillons également sur le cadrage du projet, ses priorités, ses risques et son diagramme de Gantt.",
        frigoLearning: "Ce projet me permet de découvrir les premières étapes de conception d'un produit numérique, notamment l'analyse des besoins, la priorisation des fonctionnalités, la gestion des risques et l'organisation du travail en équipe.",

        progressTitle: "Ma progression",
        progressDescription: "Mes projets montrent une progression du HTML/CSS vers JavaScript, Python et les applications React connectées à une API. J’étudie aussi Java, Node.js et les fondamentaux de la programmation. Je complète cette pratique technique par mon expérience en gestion de projet, analyse des besoins et développement commercial.",

        // Portfolio et ateliers
        portfolioTitle: "Portfolio personnel",
        portfolioContext: "Création d’un site personnel pour présenter mon parcours, mes projets et mes compétences aux recruteurs, avec une navigation accessible et une version française/anglaise.",
        portfolioWork: "J’ai construit les pages en HTML et CSS, ajouté des interactions en JavaScript, mis en place un bouton FR/EN avec mémorisation de la langue et intégré le téléchargement du CV. J’ai publié le site sur GitHub Pages.",
        portfolioLearning: "J’ai pratiqué la structuration d’un site multipage, la manipulation du DOM, les attributs d’accessibilité, le responsive design, Git et le déploiement web.",
        viewWebsite: "Voir le site en ligne",
        workshopsTitle: "Ateliers Java et JavaScript",
        workshopsContext: "Exercices de programmation réalisés pendant les bootcamps Epitech pour consolider les bases des langages et la logique algorithmique.",
        workshopsWork: "En JavaScript et Node.js, j’ai travaillé sur les fonctions, les tableaux, les comparaisons et le traitement de chaînes. En Java, j’ai commencé par les méthodes, la concaténation et les premiers tests en JShell.",
        workshopsLearning: "J’apprends à lire le code étape par étape, à distinguer les types de données, à écrire des fonctions réutilisables et à tester les résultats dans le terminal.",

        // Compétences
        skillsMetaDescription: "Découvrez les compétences techniques et professionnelles développées par Mehdi Lrhoula au cours de sa formation et de ses expériences.",
        skillsTitle: "Mes compétences",
        skillsIntro: "Les compétences techniques et professionnelles que je développe au cours de ma formation à Epitech et de mes projets.",
        skillsDevelopment: "Développement",
        skillsPython: "Fonctions, conditions, boucles, manipulation de données, fichiers et développement d'applications avec Pygame.",
        skillsHtml: "Structure de pages web, mise en forme, Flexbox, responsive design et media queries.",
        skillsTools: "Outils & environnement",
        skillsGit: "Versionnement de projets, commits, gestion de dépôts et publication du code sur GitHub.",
        skillsTerminalTitle: "VS Code & terminal",
        skillsTerminal: "Utilisation de Visual Studio Code, PowerShell et terminal pour développer et organiser mes projets.",
        skillsBusiness: "Gestion de projet & métier",
        skillsProjectTitle: "Gestion de projet",
        skillsProject: "Organisation, coordination d'équipes, suivi d'objectifs et pilotage de projets.",
        skillsNeedsTitle: "Analyse des besoins",
        skillsNeeds: "Compréhension des problématiques métiers et traduction des besoins en objectifs et solutions.",
        skillsLearningTitle: "Compétences en cours d'acquisition",
        skillsLearningIntro: "Ma formation à Epitech me permet d'élargir progressivement mes compétences vers de nouveaux domaines de l'informatique.",
        skillsAI: "Intelligence Artificielle",
        skillsITProject: "Gestion de projet IT",
        skillsDigital: "Transformation digitale",

        // Expériences
        experienceMetaDescription: "Découvrez les expériences professionnelles de Mehdi Lrhoula et les compétences développées en gestion de projet, business et environnement international.",
        experienceTitle: "Mes expériences",
        experienceIntro: "Mon parcours professionnel m'a permis de développer des compétences en gestion de projet, analyse des besoins, coordination et travail dans des environnements internationaux.",
        experienceMissionTitle: "Mission",
        experienceAchievementsTitle: "Réalisations",
        experienceSkillsTitle: "Compétences développées",
        chariRole: "Chef de Projet",
        chariContext: "Startup technologique B2B spécialisée dans la digitalisation de la distribution de produits de grande consommation.",
        chariMission: "Lancement et développement de la filiale tunisienne à partir de zéro, avec la responsabilité du déploiement opérationnel de l'activité et de son développement sur le marché local.",
        chariAchievements: "Constitution et coordination d'une équipe commerciale et opérationnelle, développement de l'activité jusqu'à environ 500 clients et participation à la mise en place des processus nécessaires au fonctionnement de la filiale.",
        chariSkills: "Gestion de projet • Coordination d'équipe • Analyse des besoins • Déploiement opérationnel • Environnement startup",
        cmaContext: "Groupe international spécialisé dans le transport maritime et la logistique.",
        cmaMission: "Développement et gestion d'un portefeuille clients dans un environnement international, avec une expérience en Tunisie dans le cadre d'une mission VIE.",
        cmaAchievements: "Développement du portefeuille annuel d'environ 450 000 € à 785 000 €, acquisition régulière de nouveaux clients et suivi de l'activité à travers les outils CRM et le reporting.",
        cmaSkills: "Analyse de données commerciales • CRM & reporting • Gestion de portefeuille • Coordination internationale • Compréhension des enjeux métiers",
        hbContext: "Activité spécialisée dans l'achat et la revente de solutions de transport maritime et de services associés.",
        hbMission: "Gestion des achats de transport et coordination avec les différents partenaires afin de proposer des solutions adaptées aux besoins clients.",
        hbAchievements: "Consultation et négociation auprès des compagnies maritimes, analyse des offres spot et contractuelles et participation aux réponses aux appels d'offres.",
        hbSkills: "Achats • Analyse des besoins • Négociation • Appels d'offres • Coordination fournisseurs • Transport maritime",

        // Contact
        contactMetaDescription: "Contactez Mehdi Lrhoula pour échanger autour d'une opportunité professionnelle, d'une alternance ou d'un projet.",
        contactTitle: "Me contacter",
        contactIntro: "Une opportunité, un projet ou simplement envie d'échanger ? Vous pouvez me contacter à l'aide du formulaire ci-dessous.",
        contactDirect: "Vous pouvez également me contacter directement par e-mail :",
        contactName: "Nom",
        contactEmail: "Email",
        contactMessage: "Message",
        contactSubmit: "Envoyer le message"
    },

    en: {
        // Shared navigation
        navHome: "Home",
        navProjects: "My projects",
        navSkills: "My skills",
        navExperience: "My experience",
        navContact: "Contact",

        // Home
        metaDescription: "Portfolio of Mehdi Lrhoula, an Epitech student transitioning into IT. Discover my projects, skills and professional experience.",
        heroIntro: "Hello, I'm",
        heroSubtitle: "Epitech Student • IT, Data & Artificial Intelligence",
        heroDescription: "Currently transitioning into the IT industry, I am studying at Epitech in the Pre-MSc program. After several years of experience in project management, business development and international maritime transport, I am developing my technical skills to build a profile combining technology and business expertise.",
        heroPortfolio: "Through this portfolio, I showcase my projects, the technologies I am learning and my progress throughout my studies.",
        discoverProjects: "Discover my projects",
        downloadCV: "Download my CV",

        // Projects
        projectsMetaDescription: "Discover the software and web development projects completed by Mehdi Lrhoula during his studies at Epitech.",
        projectsTitle: "My Projects",
        projectsIntroduction: "A selection of projects completed at Epitech and independently, showcasing my software development and digital product design skills.",
        projectContextTitle: "Background and Objectives",
        projectWorkTitle: "What I Built",
        projectLearningTitle: "What I Learned",
        viewGithub: "View Code on GitHub",
        projectInProgress: "Project currently in the design phase.",

        pyjobsContext: "Development of a recruitment platform as part of my studies at Epitech. The objective was to build a web application allowing companies to publish job opportunities and candidates to apply.",
        pyjobsWork: "I developed React frontend features and integrated them with a Django REST API built as a team. I worked on candidate and employer journeys: browsing job listings, search filters, application forms, authentication and dashboards. I also contributed to testing permissions and frontend/backend communication.",
        pyjobsLearning: "I strengthened my React knowledge (components, state and forms), REST API integration, role-based permissions, functional testing and Git collaboration. I learned how to connect a user interface to a server and troubleshoot issues between them.",
        pyjobsCaptionHome: "Home — Introduction to the platform and exploration of job opportunities.",
        pyjobsCaptionEmployer: "Employer dashboard — Manage companies, job postings and received applications.",
        pyjobsCaptionCandidate: "Candidate dashboard — View submitted applications and track their status.",

        hangmanTitle: "Hangman Game",
        hangmanContext: "Development of a Hangman game in Python as part of my studies at Epitech. The goal was to practice programming fundamentals by building an interactive application.",
        hangmanWork: "The game randomly selects a word, handles player guesses, tracks mistakes and determines win or loss conditions. A graphical interface was then developed using Pygame.",
        hangmanLearning: "This project helped me improve my understanding of functions, conditions, loops, file handling and the overall structure of a Python program.",

        codingContext: "Development of a website as part of my studies at Epitech. The objective was to discover web development fundamentals and build structured HTML pages styled with CSS.",
        codingWork: "I created several web pages using HTML elements and CSS properties to structure and style the content. I also worked on page layout, navigation and responsive design for different screen sizes.",
        codingLearning: "This project helped me better understand the separation between HTML structure and CSS styling, as well as the use of Flexbox and media queries to create responsive interfaces.",
        codingProgressTitle: "My Progress",
        codingProgress: "CodingPedia evolved progressively through several exercises. I started by building the HTML structure before gradually adding navigation, CSS styling and responsive layouts for different screen sizes.",

        frigoTechnologies: "Product Design • Project Management • Gantt Chart",
        frigoContext: "A smart refrigerator design project developed as a team during my studies at Epitech. The goal is to design a solution that improves food inventory management, reduces waste and simplifies meal planning.",
        frigoWork: "Together with my team, we defined the planned features: inventory management, expiration date tracking, recipe recommendations and meal planning. We are also working on project scope, priorities, risks and the Gantt chart.",
        frigoLearning: "This project is helping me discover the early stages of digital product design, including requirements analysis, feature prioritization, risk management and teamwork.",

        progressTitle: "My Progress",
        progressDescription: "My projects show a progression from HTML/CSS to JavaScript, Python and React applications connected to an API. I am also learning Java, Node.js and programming fundamentals. I combine this technical practice with my background in project management, requirements analysis and business development.",

        // Portfolio and workshops
        portfolioTitle: "Personal Portfolio",
        portfolioContext: "I built a personal website to introduce my background, projects and skills to recruiters, with accessible navigation and French/English content.",
        portfolioWork: "I created the pages using HTML and CSS, added JavaScript interactions, implemented a FR/EN language switch with saved preferences and enabled CV downloads. I published the website using GitHub Pages.",
        portfolioLearning: "I practiced multi-page website structure, DOM manipulation, accessibility attributes, responsive design, Git and web deployment.",
        viewWebsite: "Visit the live website",
        workshopsTitle: "Java and JavaScript Workshops",
        workshopsContext: "Programming exercises completed during Epitech bootcamps to strengthen language fundamentals and algorithmic thinking.",
        workshopsWork: "In JavaScript and Node.js, I practiced functions, arrays, comparisons and string processing. In Java, I started with methods, concatenation and initial tests using JShell.",
        workshopsLearning: "I am learning to read code step by step, distinguish data types, write reusable functions and test results in the terminal.",

        // Skills
        skillsMetaDescription: "Discover Mehdi Lrhoula's technical and professional skills developed through his education, projects and work experience.",
        skillsTitle: "My Skills",
        skillsIntro: "The technical and professional skills I am developing through my studies at Epitech and my projects.",
        skillsDevelopment: "Development",
        skillsPython: "Functions, conditions, loops, data manipulation, file handling and application development using Pygame.",
        skillsHtml: "Web page structure, styling, Flexbox, responsive design and media queries.",
        skillsTools: "Tools & Environment",
        skillsGit: "Version control, commits, repository management and publishing code on GitHub.",
        skillsTerminalTitle: "VS Code & Terminal",
        skillsTerminal: "Using Visual Studio Code, PowerShell and the terminal to develop and organize my projects.",
        skillsBusiness: "Project Management & Business",
        skillsProjectTitle: "Project Management",
        skillsProject: "Organization, team coordination, monitoring objectives and managing projects.",
        skillsNeedsTitle: "Requirements Analysis",
        skillsNeeds: "Understanding business challenges and translating requirements into objectives and solutions.",
        skillsLearningTitle: "Skills I'm Currently Developing",
        skillsLearningIntro: "My studies at Epitech are helping me gradually expand my knowledge into new areas of information technology.",
        skillsAI: "Artificial Intelligence",
        skillsITProject: "IT Project Management",
        skillsDigital: "Digital Transformation",

        // Experience
        experienceMetaDescription: "Discover Mehdi Lrhoula's professional experience and skills in project management, business and international environments.",
        experienceTitle: "My Experience",
        experienceIntro: "My professional background has allowed me to develop skills in project management, requirements analysis, coordination and working in international environments.",
        experienceMissionTitle: "Responsibilities",
        experienceAchievementsTitle: "Achievements",
        experienceSkillsTitle: "Skills Developed",
        chariRole: "Project Manager",
        chariContext: "A B2B technology startup specializing in the digitalization of consumer goods distribution.",
        chariMission: "Launching and developing the Tunisian subsidiary from scratch, overseeing operational deployment and business growth in the local market.",
        chariAchievements: "Building and coordinating a sales and operations team, growing the business to approximately 500 customers and helping establish the processes required to operate the subsidiary.",
        chariSkills: "Project Management • Team Coordination • Requirements Analysis • Operational Deployment • Startup Environment",
        cmaContext: "An international group specializing in maritime shipping and logistics.",
        cmaMission: "Developing and managing a customer portfolio in an international environment, including an international assignment in Tunisia under the French VIE program.",
        cmaAchievements: "Growing the annual customer portfolio from approximately €450,000 to €785,000, regularly acquiring new customers and monitoring business performance using CRM and reporting tools.",
        cmaSkills: "Sales Data Analysis • CRM & Reporting • Account Management • International Coordination • Business Understanding",
        hbContext: "A business specializing in the procurement and resale of maritime transport solutions and related services.",
        hbMission: "Managing freight procurement and coordinating with different partners to provide solutions tailored to customer needs.",
        hbAchievements: "Consulting and negotiating with shipping companies, analyzing spot and contractual offers and contributing to responses to tenders.",
        hbSkills: "Procurement • Requirements Analysis • Negotiation • Tender Management • Supplier Coordination • Maritime Transport",

        // Contact
        contactMetaDescription: "Contact Mehdi Lrhoula to discuss a professional opportunity, a work-study position or a project.",
        contactTitle: "Contact Me",
        contactIntro: "Have an opportunity, a project or simply want to connect? Feel free to contact me using the form below.",
        contactDirect: "You can also contact me directly by email:",
        contactName: "Name",
        contactEmail: "Email",
        contactMessage: "Message",
        contactSubmit: "Send Message"
    }
};

// Fonction de changement de langue
function changeLanguage(lang) {
    const selectedLanguage = translations[lang] ? lang : "fr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        const translation = translations[selectedLanguage][key];

        if (translation !== undefined) {
            element.textContent = translation;
        }
    });

    document.querySelectorAll("[data-i18n-content]").forEach(element => {
        const key = element.getAttribute("data-i18n-content");
        const translation = translations[selectedLanguage][key];

        if (translation !== undefined) {
            element.setAttribute("content", translation);
        }
    });

    document.querySelectorAll(".lang-btn").forEach(button => {
        const isActive = button.dataset.lang === selectedLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    document.documentElement.lang = selectedLanguage;

    try {
        localStorage.setItem("portfolioLanguage", selectedLanguage);
    } catch (error) {
        console.warn("Language preference could not be saved.");
    }
}

// Événements des boutons FR / EN
document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.lang);
    });
});

// Langue sauvegardée
let savedLanguage = "fr";

try {
    savedLanguage = localStorage.getItem("portfolioLanguage") || "fr";
} catch (error) {
    console.warn("Language preference could not be loaded.");
}

changeLanguage(savedLanguage);


/* Traductions actualisées de la page Compétences */

Object.assign(translations.fr, {
    skillsIntro: "Les compétences techniques et professionnelles que je développe à Epitech, complétées par mon expérience en gestion de projet et en business.",

    skillsDevelopment: "Développement web",

    skillsHtml: "Structure HTML, Flexbox, CSS Grid, responsive design, media queries et bases de l'accessibilité.",

    skillsJavaScript: "Variables, fonctions, conditions, boucles, tableaux, événements, manipulation du DOM et formulaires interactifs.",

    skillsReact: "Composants React, useState, affichage dynamique, gestion des formulaires et connexion à une API.",

    skillsProgramming: "Programmation",

    skillsPython: "Fonctions, conditions, boucles, manipulation de données et fichiers. Développement d'un jeu interactif avec Pygame.",

    skillsJava: "Initiation à la syntaxe Java, méthodes, chaînes de caractères, concaténation et tests avec JShell.",

    skillsNode: "Exécution de JavaScript côté serveur, modules, fonctions et exercices sur les tableaux et les chaînes.",

    skillsBackendTitle: "Backend & API",

    skillsAPI: "Connexion d'un frontend React à une API REST, requêtes HTTP, échanges JSON et gestion des réponses du serveur.",

    skillsDjango: "Découverte des endpoints Django REST, de l'authentification, des rôles, des permissions et des opérations CRUD dans le projet PYJOBS.",

    skillsGit: "Commits, branches, push, travail collaboratif, gestion des dépôts et déploiement sur GitHub Pages.",

    skillsLinux: "Utilisation du terminal Linux, navigation dans les dossiers, commandes de base et environnement de développement WSL.",

    skillsTerminal: "Développement avec Visual Studio Code, terminal, npm et outils de test.",

    skillsProject: "Coordination d'équipes, organisation, suivi d'objectifs, priorisation et pilotage de projets.",

    skillsNeeds: "Identification des problématiques métiers, analyse des attentes et traduction des besoins en fonctionnalités.",

    skillsProductTitle: "Conception produit",

    skillsProduct: "Définition d'un MVP, priorisation des fonctionnalités, analyse des risques et planification avec un diagramme de Gantt.",

    skillsLearningIntro: "Je consolide actuellement mes bases en développement et approfondis les technologies liées aux applications web, à la Data et à l'intelligence artificielle."
});

Object.assign(translations.en, {
    skillsIntro: "Technical and professional skills I am developing at Epitech, combined with my background in project management and business.",

    skillsDevelopment: "Web Development",

    skillsHtml: "HTML structure, Flexbox, CSS Grid, responsive design, media queries and accessibility fundamentals.",

    skillsJavaScript: "Variables, functions, conditions, loops, arrays, events, DOM manipulation and interactive forms.",

    skillsReact: "React components, useState, dynamic rendering, form management and API integration.",

    skillsProgramming: "Programming",

    skillsPython: "Functions, conditions, loops, data manipulation and file handling. Development of an interactive game using Pygame.",

    skillsJava: "Introduction to Java syntax, methods, strings, concatenation and testing with JShell.",

    skillsNode: "Running JavaScript on the server side, modules, functions and exercises with arrays and strings.",

    skillsBackendTitle: "Backend & APIs",

    skillsAPI: "Connecting a React frontend to a REST API, HTTP requests, JSON data exchange and handling server responses.",

    skillsDjango: "Introduction to Django REST endpoints, authentication, user roles, permissions and CRUD operations through the PYJOBS project.",

    skillsGit: "Commits, branches, push, collaborative development, repository management and deployment using GitHub Pages.",

    skillsLinux: "Using the Linux terminal, directory navigation, basic commands and the WSL development environment.",

    skillsTerminal: "Development with Visual Studio Code, terminal, npm and testing tools.",

    skillsProject: "Team coordination, organization, goal tracking, prioritization and project management.",

    skillsNeeds: "Identifying business challenges, analyzing expectations and translating requirements into features.",

    skillsProductTitle: "Product Design",

    skillsProduct: "MVP definition, feature prioritization, risk analysis and planning with Gantt charts.",

    skillsLearningIntro: "I am strengthening my development foundations while exploring web applications, Data and artificial intelligence technologies."
});

// Actualiser les textes avec les nouvelles traductions
changeLanguage(savedLanguage);
