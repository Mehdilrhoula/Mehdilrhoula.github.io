
# Portfolio — Mehdi Lrhoula

Portfolio personnel développé dans le cadre de ma formation Pré-MSc à **Epitech Marseille**.

Ce site présente mon parcours professionnel, mes projets informatiques, les compétences acquises et ma progression dans le développement web.

Après plusieurs années d'expérience en business development, gestion de projet et environnement international, je me reconvertis dans l'informatique avec l'objectif de développer un profil combinant compétences techniques et compréhension des enjeux métiers.

## Site en ligne

**[Consulter mon portfolio](https://mehdilrhoula.github.io/)**

## Objectifs du projet

- Présenter mon parcours professionnel et ma reconversion.
- Mettre en valeur mes projets personnels et scolaires.
- Expliquer les compétences développées à travers chaque réalisation.
- Montrer ma progression au cours de ma formation Epitech.
- Proposer une interface accessible, responsive et bilingue.
- Faciliter la prise de contact avec les recruteurs.
- Faire évoluer régulièrement le portfolio.

## Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure et contenu des pages |
| CSS3 | Design, Flexbox, Grid et responsive |
| JavaScript | Interactions et fonctionnalités dynamiques |
| Git | Versionnement du projet |
| GitHub | Hébergement du code source |
| GitHub Pages | Publication automatique du site |

Le portfolio est un **site statique frontend**, sans backend ni base de données.

## Structure du projet

```text
Portfolio/
├── index.html
├── projets.html
├── competences.html
├── experiences.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── lang.js
│   ├── carousel.js
│   └── contact.js
├── images/
│   ├── photo-profil.png
│   └── projets/
│       ├── pyjobs-accueil.png
│       ├── pyjobs-employeur.png
│       └── pyjobs-candidat.png
├── Videos/
│   └── pendu-demo.mp4
├── documents/
│   └── cv-mehdi-lrhoula.pdf
└── README.md
```

## Présentation des pages

### Accueil

Présentation de mon parcours, de ma reconversion professionnelle et de mes objectifs.

La page contient également :
- Une photographie professionnelle.
- Un accès aux projets.
- Des liens vers GitHub et LinkedIn.
- Un bouton de téléchargement du CV.

### Mes projets

Présentation de six réalisations :

**1. PYJOBS — Job Board**

Application de recrutement développée en équipe avec React, JavaScript, Vite et une API Django REST.

Fonctionnalités : consultation des offres, filtres, authentification, espaces candidat et employeur, publication des annonces et suivi des candidatures.

**2. Jeu du Pendu**

Jeu interactif développé en Python avec Pygame.

Mise en pratique des fonctions, conditions, boucles, fichiers et interfaces graphiques.

**3. CodingPedia**

Exercices de développement web en HTML et CSS pour apprendre la structuration des pages, Flexbox et le responsive design.

**4. Frigorithm — Smart Fridge**

Projet collectif de conception d'un réfrigérateur intelligent.

Travail sur l'analyse des besoins, le MVP, la priorisation des fonctionnalités, les risques et la planification.

**5. Portfolio personnel**

Développement du présent site avec HTML, CSS et JavaScript.

Mise en place de la navigation, des traductions, des interactions et du déploiement.

**6. Ateliers Java et JavaScript**

Exercices réalisés pendant les bootcamps Epitech.

Découverte des méthodes Java, des fonctions JavaScript, de Node.js et des tests avec JShell.

### Mes compétences

Présentation des compétences étudiées et pratiquées :

- Développement web : HTML, CSS, JavaScript, React.
- Programmation : Python, Java, Node.js.
- Backend et API : Django REST, HTTP, JSON.
- Outils : Git, GitHub, VS Code, Linux, WSL.
- Gestion de projet : analyse des besoins, coordination et conception produit.

Une section distingue également les domaines en cours d'apprentissage.

### Mes expériences

Présentation de mes expériences professionnelles, notamment chez Chari, CMA CGM et HB International.

Cette section met en valeur les compétences transférables vers les métiers du numérique : coordination d'équipes, analyse des besoins, gestion de projet et développement d'activité.

### Contact

Le formulaire permet de saisir :
- Un nom.
- Une adresse e-mail.
- Un message.

JavaScript valide les champs, détecte la langue du site et prépare un e-mail contenant les informations saisies.

Le lien `mailto:` ouvre l'application de messagerie configurée sur l'appareil du visiteur, avec le destinataire, le sujet et le message préremplis.

**L'envoi n'est pas automatique : le visiteur doit confirmer l'envoi dans sa messagerie.**

Une adresse e-mail directe est également disponible sur la page Contact.

## Fonctionnalités

### Site bilingue français / anglais

Le fichier `js/lang.js` contient les traductions françaises et anglaises.

Les attributs `data-i18n` permettent de traduire les textes sans dupliquer les pages HTML.

La langue sélectionnée est sauvegardée avec `localStorage`.

### Navigation responsive

Le site s'adapte aux différentes tailles d'écran avec Flexbox, CSS Grid et les media queries.

Un menu hamburger est disponible sur les petits écrans.

Il peut être ouvert et fermé au clic, fermé avec la touche Échap et contrôlé au clavier.

### Carrousel des projets

Le projet PYJOBS dispose d'un carrousel JavaScript affichant plusieurs captures d'écran.

Les boutons permettent de naviguer entre les images, avec un compteur indiquant la position actuelle.

### Vidéo de démonstration

Une vidéo MP4 permet de présenter le jeu du Pendu.

La lecture est contrôlée directement par le visiteur grâce à l'élément HTML `video`.

## Design et accessibilité

La charte graphique repose sur :

- Un bleu nuit pour la navigation et les éléments principaux.
- Un bleu accent pour les interactions.
- Des fonds clairs et des cartes blanches.
- Une typographie lisible.
- Des espacements et composants harmonisés.

Plusieurs bonnes pratiques d'accessibilité ont été intégrées :

- HTML sémantique.
- Navigation au clavier.
- Indicateurs de focus visibles.
- Attributs ARIA.
- Textes alternatifs pour les images significatives.
- Labels associés aux champs de formulaire.
- Prise en compte de la préférence de réduction des animations.

Des audits complémentaires Lighthouse sont prévus pour mesurer et améliorer l'accessibilité, le SEO et les performances.

## Installation locale

Cloner le dépôt :

```bash
git clone git@github.com:Mehdilrhoula/Mehdilrhoula.github.io.git
```

Entrer dans le dossier :

```bash
cd Mehdilrhoula.github.io
```

Lancer un serveur local depuis ce dossier :

```bash
python3 -m http.server 8000
```

Puis ouvrir :

http://localhost:8000

Aucune installation de dépendances JavaScript n'est nécessaire pour ce portfolio.

## Déploiement

Le site est publié avec **GitHub Pages** depuis le dépôt personnel.

Après modification du code :

```bash
git add .
git commit -m "Mise a jour du portfolio"
git push
```

GitHub Pages publie automatiquement les modifications provenant de la branche configurée pour le site.

Adresse publique :

https://mehdilrhoula.github.io/

## Évolution du projet

Le portfolio est destiné à évoluer au cours de ma formation.

Les améliorations réalisées comprennent :

- Construction initiale des cinq pages.
- Ajout d'une navigation bilingue FR/EN.
- Intégration du CV téléchargeable.
- Présentation des projets Epitech.
- Ajout d'une vidéo de démonstration.
- Intégration d'un carrousel pour PYJOBS.
- Actualisation des projets et compétences.
- Harmonisation de la charte graphique.
- Création d'un menu hamburger responsive.
- Améliorations de l'accessibilité du menu mobile.
- Mise en place du formulaire de contact avec `mailto:`.

### Améliorations futures

- Audits Lighthouse et corrections prioritaires.
- Optimisation du poids des médias.
- Vérification complète de l'accessibilité.
- Enrichissement des preuves et démonstrations des projets.
- Ajout des futurs projets réalisés à Epitech.
- Mise à jour régulière du CV et des compétences.

## Auteur

**Mehdi Lrhoula**

Étudiant Pré-MSc — Epitech Marseille

GitHub : https://github.com/Mehdilrhoula

LinkedIn : https://www.linkedin.com/in/mehdi-lrhoula-2734bb175/

Portfolio : https://mehdilrhoula.github.io/

Contact : mehdi.lrhoula@epitech.eu
