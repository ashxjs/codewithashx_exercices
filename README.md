# 📝 Projet 1 : Créer une Carte de Jeu en 2D

## Avant de commencer

Nous utiliserons `Vite.js`, un outil qui détecte automatiquement les modifications de tes fichiers et recharge la page du navigateur.

#### 🔹 Rends-toi sur la branche du projet

```bash
git reset --hard HEAD
git switch project-1--build-2D-map
```

#### 🔹 Installe les nouvelles librairies

```bash
npm install
```

#### 🔹 Lance `Vite`

```bash
npm run dev
```

#### 🔹 Accède à l'application dans ton navigateur

Ouvre ton navigateur et rends-toi à l'adresse suivante :

```bash
http://localhost:5173
```

## 🎯 🎯 Objectif du projet

Dans ce projet, tu vas apprendre à créer une carte de jeu en 2D avec **JavaScript**.
L'idée est de générer une grille, où chaque case représente un élément du décor (herbe, eau, chemin, etc.).

Chaque élément sera représenté par une image et positionné correctement pour former une carte cohérente.

---

## 🛠️ Comment ça fonctionne ?

### 1️⃣ **Génération d'une carte sous forme de tableau**

- La carte est une grille de **5 x 5 cases**.
- Chaque case contient un **chiffre** qui représente un type de terrain.

Exemple d’une carte générée :

```javascript
const map = [
  //  1, 1, 1, 1, 1,
  //  1, 3, 7, 4, 1,
  //  1, 9, 0, 10, 1,
  //  1, 5, 8, 6, 1,
  //  1, 1, 1, 1, 1,
];
```

#### **Résultat**

![./images/5x5_result.png](./images/5x5_result.png)

📌 Légende des chiffres :

- `1` => l'eau 🌊
- `0` => l'herbe 🌿
- `2` => chemin 🛤️
- `3`, `4`, `5`, `6` sont des coins spécifiques de l’île 🏝️

---

### 2️⃣ **Transformation des chiffres en images**

Chaque chiffre est associé à une image (ex : 1 devient une image d’eau).
Pour cela, nous utiliserons la fonction `createImage(fichierSource)`.

---

### 3️⃣ **Affichage de la carte sur la page web**

Une fois les images générées, elles seront affichées à l’écran pour donner vie à la carte.

## 📌 Fonctionnalités mises à ta disposition

Tu peux utiliser ces fonctions pour t’aider :

✅ `generateMap(size)` → Crée une carte aléatoire de `size x size`. <br>
✅ `createImage(fichierSource, fichierSource)` → Génère une image à partir d’un fichier.<br>
✅ `displayBrowserScreen(elements, size)` → Affiche la carte sur la page web.

## 📖 Documentation utile

Quand on code, on rencontre souvent des concepts ou des fonctions inconnus.
Lire la documentation permet de mieux les comprendre et les maîtriser !

📚 Liens utiles :

- [import](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/import): Te permet d'utiliser les fonctions du fichier `src/helper.js`
- [switch](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch): À utiliser lorsque tu as plusieurs conditions qui se suivent.

## 🚀 Ce que tu dois faire

👉 Écrire une fonction qui transforme la carte en images.
👉 Retourner un tableau contenant les images dans le bon ordre.
👉 Afficher la carte avec `displayBrowserScreen()`.
