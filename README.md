# Description des outils nécessaires

- VS Code
- Git
- Node
- NPM (Node Package Manager)
- Créer un compte Github si tu n'en possède pas déjà

## VS Code ?

VS Code est un éditeur de code puissant et flexible, idéal pour écrire, déboguer et organiser du code JavaScript. Il est doté de nombreuses fonctionnalités comme la coloration syntaxique, la gestion de projets Git intégrée, et des extensions comme ESLint et Prettier pour vous aider à écrire un code propre et structuré.

Dans le cadre de ce cours, vous utiliserez VS Code pour suivre les exercices et explorer les modules. C’est un outil standard dans le monde du développement, et l’apprendre dès maintenant vous donnera une solide base pour travailler sur des projets JavaScript et collaborer efficacement avec d’autres développeurs.

Lien d'installation: https://code.visualstudio.com/

## Git

Git est un outil de contrôle de version qui vous permet de suivre et de gérer les modifications apportées à votre code. Il est utilisé pour collaborer efficacement, revenir à une version précédente en cas d’erreur, et organiser le développement de projets complexes grâce à des branches distinctes pour différentes fonctionnalités ou étapes.

Dans le cadre de ce cours, Git vous permettra d’explorer les différents modules de manière organisée. Chaque module sera placé sur une branche distincte, ce qui vous permettra de naviguer facilement entre les étapes du cours, de comprendre les ajouts progressifs au code, et d’expérimenter sans risque d’altérer le projet principal. C’est une compétence clé pour tout développeur moderne, et ce cours vous aidera à la maîtriser dès le début.

Lien d'installation: https://git-scm.com/

## Node JS

Node.js est un environnement qui permet d’exécuter du code JavaScript en dehors du navigateur, grâce à son moteur JavaScript V8 (le même que celui de Chrome). Contrairement à un navigateur qui exécute JavaScript pour manipuler des pages web, Node.js est conçu pour des applications côté serveur. Cela signifie qu’il vous donne accès à des fonctionnalités supplémentaires, comme la gestion des fichiers, des serveurs, et d'autres outils non disponibles dans un navigateur.

Lien d'installation: https://nodejs.org/en/download

Dans ce cours, Node.js sera utilisé pour exécuter certains scripts JavaScript directement sur votre machine. Par exemple, vous apprendrez à utiliser des bibliothèques qui permettent de lire ou d’écrire dans des fichiers, ce qui est impossible à faire avec JavaScript dans un navigateur. C’est une manière différente mais essentielle d’utiliser JavaScript pour construire des applications plus complexes.

### NPM (Node Package Manager)

npm est un gestionnaire de paquets qui accompagne Node.js. Il vous permet de télécharger, installer et gérer des bibliothèques et outils JavaScript créés par d'autres développeurs, appelés "modules". Ces modules facilitent la création de projets en réutilisant des fonctionnalités existantes au lieu de les coder vous-même.

Dans ce cours, vous utiliserez npm pour installer des modules nécessaires à certains exercices. Par exemple, vous pourriez installer une bibliothèque qui simplifie la manipulation des fichiers ou un outil pour vérifier si votre code respecte les bonnes pratiques. Comprendre npm vous permettra de découvrir et d'intégrer des ressources du vaste écosystème JavaScript dans vos propres projets.

NPM est déjà installer avec NodeJS

# Setup des outils

## Créer ton compte Github

GitHub est une plateforme qui te permet d'entreposer tes projets et des les partager avec d'autres développeurs.
Afin de pouvoir suivre ce cour, il te sera nécessaire de créer un compte Github afin télécharger les modules nécessaires.

Pour ce faire tu peux suivre ces étapes [Créer un compte Github](https://docs.github.com/fr/get-started/start-your-journey/creating-an-account-on-github)

Rend toi sur le repository (l'endroit ou sont entreposés les fichiers du cours) [Code with ashx](https://github.com/ashxjs/codewithashx_exercices) et clique sur le bouton "Code" en haut à droite de l'écran. Sélectionne `HTTPS` et copie le lien.

En passant, tu peux cliquer sur le bouton "Star" pour donner de la force à ce repository.

## Clone le repository

Ouvre Visual Studio Code et déplace toi dans le dossier ou tu veux stocker les fichiers du cours:

- Windows: <kbd>Ctrl</kbd> + <kbd>o</kbd> +<kbd>K</kbd>
- Mac: <kbd>Cmd</kbd> + <kbd>o</kbd> +<kbd>K</kbd>
- Ficher => Ouvrir un dossier

Puis ouvre une nouvelle fenêtre de terminal (Windows: <kbd>Ctrl</kbd> + <kbd>J</kbd>, Mac: <kbd>Cmd</kbd> + <kbd>J</kbd>)

```bash
    git clone https://github.com/ashxjs/codewithashx_exercices.git
```

## Installer les modules

Nous aurons à present devoir installer les modules nécessaires pour le cours. Pour ce faire dans le même terminal ou tu as cloné le repository, tape la commande suivante:

Npm va nous servir à télécharger toutes les librairies nécessaires pour le cours.

```bash
    npm install
```

Tu es maintenant prêt à commencer le cours.

## Vérifier les versions

Pour vérifier que tout fonctionne bien, tu peux lancer la commande suivante:

```bash
    npm run postinstall
```

Cette commande va vérifier que les versions de Node, Git et NPM sont correctes.
Si tu as des erreurs, tu peux les résoudre en suivant les instructions de la documentation officielle de Node, Git et NPM.

Pour lancer le cours, tu peux lancer la commande suivante:

```bash
    git checkout 1.Variables
```
