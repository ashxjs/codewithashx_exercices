## Les tableaux (Arrays)

Les **arrays** ou tableaux permettent de stocker plusieurs valeurs au même endroit, **peu importe leurs types**.

Par exemple, on peut créer un tableau contenant des `numbers`, des `strings` et des `booléens` (même si cela n’a pas beaucoup de sens 😅) :

```javascript
const tableau = [1, "Claude", false];
```

Un tableau stocke les valeurs **les unes à la suite des autres**, avec une **case mémoire appelée "index"** associée à chaque valeur.

🚨 **Attention : les index en JavaScript commencent à 0 !**  
Dans l'exemple ci-dessous, nous avons un tableau de 3 éléments, avec des index allant de 0 à 2:

![[tab.png]]

Pour créer un tableau similaire en JavaScript :

```javascript
const tab = [14, "Claude", false];
```

### Accéder à un élément

Pour accéder aux éléments d’un tableau, on utilise l’opérateur `[]` et on renseigne l’index voulu.
Exemple :

```javascript
const prenom = tab[1]; // 'Claude'
const age = tab[0]; // 14
const estMajeur = tab[2]; // false
```

### **Connaître la taille d’un tableau**

La propriété `length` permet de connaître la taille d’un tableau :

```javascript
const students = ["Jean", "Louis", "Robert", "John"];

console.log(students.length); // output: 4
```

```javascript
const message = "Hello World!";
console.log(message.length); // output: 12
```

#### 🏆 Passe à la pratique

1. Exercice 1: Affiche la taille du tableau 'animals'
2. Exercice 2: Affiche le mot à la 4 position de 'animals'
3. Exercice 3: Affiche le dernier éléments du tableau

---

# Boucle

Les **boucles** permettent de répéter une série d’actions plusieurs fois.

## Boucles déterministes

Une boucle est dite **déterministe** lorsque le nombre de tours est connu à l’avance.
Par exemple, afficher un message **10 fois** :

```javascript
for (let i = 0; i < 10; i++) {
  console.log("Hello World!");
}
```

Ici on affichera le message `Hello World!` 10 fois !

#### **Décortiquons la syntaxe d’une boucle `for` :**

![[for_loop_syntax.png]]
1️⃣ **Initialisation de l’itérateur** : On initialise une variable, souvent appelée `i`, qui sert à compter les tours de boucle.  
2️⃣ **Condition de sortie** : Tant que la condition (ici `i < 10`) est vraie, la boucle continue.  
3️⃣ **Incrémentation** : À chaque tour, on augmente la valeur de `i` (avec `i++`, équivalent à `i = i + 1`).

#### 🏆 Mettons un peu tout ca en pratique

Pour test que ton code est bon, utilise la commande suivante.

```javascript
npm run test:loop
```

### 🏆 **Exercices pratiques avec des boucles :**

1. **Affiche les prénoms de tous tes padawans.**
2. **Trouve le plus grand nombre d’un tableau.**
3. **Trouve l'intrus**

### Approche plus complexe

En plus de `length`, JavaScript propose des **méthodes puissantes** pour traiter les tableaux. Voici quelques exemples utiles :

#### 1. `filter()`

Renvoie un nouveau tableau contenant tous les éléments du tableau appelant pour lesquels la fonction de filtrage fournie renvoie un résultat positif.

La méthode filter prend en paramètre, une fonction de filtre, ce traitement sera appliqué à chaque élément du tableau. À la fin des traitements, la méthode retournera un tableau contenant les éléments recherchés.

```javascript
const notes = [12, 8, 7, 2, 18];
const aboveAverage = notes.filter((note) => note > 10);
// On creusera la notation dans le prochain cours

console.log(aboveAverage); // output: [12, 18]
```

Si aucun élément n'a été trouvé, un tableau vide sera retourné.

#### 2. `find()`

La méthode `find()` des instances de tableau renvoie le premier élément du tableau fourni qui satisfait à la fonction de test fournie. Si aucune valeur ne satisfait la fonction de test, la méthode renvoie `undefined`.

```javascript
const padawans = ["luke", "leïa", "obi-wan", "jar jar", "Qui-Gon"];
const vaderSon = padawans.find((padawan) => padawan === "luke");
const soloSon = padawans.find((padawan) => padawan === "kylo");
// On creusera la notation dans le prochain cours

console.log(vaderSon); // output: 'luke'
console.log(soloSon); // output: undefined
```

#### 3. `map()`

La méthode find() des instances de tableau renvoie le premier élément du tableau fourni qui satisfait à la fonction de test fournie. Si aucune valeur ne satisfait la fonction de test, la méthode renvoie undefined.

```javascript
const toSquare = [0, 2, 4, 8, 18];
const squarredValues = toSquare.map((value) => value * value);

console.log(squarredValues); // output: [0, 4, 16, 64, 324]
```

Tu retrouveras [ici](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) la liste de toutes les méthodes que tu pourras utiliser.

---

### Prochain cours : les fonctions 🚀

tu peux maintenant passer au cours suivant !

```bash
git reset --hard HEAD
git switch 6-functions
```
