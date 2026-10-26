
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
        projectsIntroduction: "Découvrez les projets que j'ai réalisés au cours de ma formation et les compétences que j'ai développées à travers chacun d'entre eux.",
        projectContextTitle: "Contexte et objectif",
        projectWorkTitle: "Ce que j'ai réalisé",
        projectLearningTitle: "Ce que j'ai appris",
        viewGithub: "Voir le code sur GitHub",
        projectInProgress: "Projet en cours de conception.",

        pyjobsContext: "Développement d'une plateforme de recrutement dans le cadre de ma formation à Epitech. L'objectif était de créer une application web permettant aux entreprises de publier des offres d'emploi et aux candidats de postuler.",
        pyjobsWork: "J'ai travaillé sur le frontend avec React et son intégration avec une API Django REST. Le projet comprend un système d'authentification, des espaces candidats et employeurs, la publication et la gestion d'annonces ainsi que le suivi des candidatures.",
        pyjobsLearning: "Ce projet m'a permis de progresser en React, dans la communication entre un frontend et un backend, l'utilisation des API REST, la gestion des rôles utilisateurs et les tests fonctionnels. J'ai également découvert les enjeux du travail collaboratif avec Git.",

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
        progressDescription: "Ces projets illustrent ma progression dans le développement informatique et la gestion de projets numériques. Après avoir découvert Python, HTML et CSS, j'ai approfondi mes connaissances avec React, Django REST et les API. Je développe progressivement mes compétences techniques tout en m'appuyant sur mon expérience professionnelle en gestion de projet et en développement commercial.",

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
        projectsIntroduction: "Explore the projects I have completed throughout my studies and the skills I have developed through each experience.",
        projectContextTitle: "Background and Objectives",
        projectWorkTitle: "What I Built",
        projectLearningTitle: "What I Learned",
        viewGithub: "View Code on GitHub",
        projectInProgress: "Project currently in the design phase.",

        pyjobsContext: "Development of a recruitment platform as part of my studies at Epitech. The objective was to build a web application allowing companies to publish job opportunities and candidates to apply.",
        pyjobsWork: "I worked on the React frontend and its integration with a Django REST API. The project includes authentication, candidate and employer dashboards, job posting and management features, as well as application tracking.",
        pyjobsLearning: "This project helped me improve my React skills, understand frontend-backend communication, work with REST APIs, manage user roles and perform functional testing. I also gained experience in collaborative development using Git.",

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
        progressDescription: "These projects illustrate my progress in software development and digital project management. After learning the fundamentals of Python, HTML and CSS, I expanded my knowledge through React, Django REST and APIs. I am gradually building my technical skills while drawing on my professional background in project management and business development.",

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

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.lang);
    });
});

let savedLanguage = "fr";

try {
    savedLanguage = localStorage.getItem("portfolioLanguage") || "fr";
} catch (error) {
    console.warn("Language preference could not be loaded.");
}

changeLanguage(savedLanguage);
