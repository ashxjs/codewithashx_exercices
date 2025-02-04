# Les fonctions

## C'est quoi une fonction ?

Une fonction, c'est quelque chose qui te permet de répéter une portion de code. Prenons un exemple avec la vaisselle. On pourrait créer une suite d'instructions suivante :

```bash
# prendre une assiette
# prendre une éponge
# laver l'assiette
# la poser
```

Écrivons ensemble le code de cette fonction :

```javascript
function faireLaVaisselle() {
  // prendre une assiette
  // prendre une éponge
  // laver l'assiette
  // la poser
}
```

---

## Comment on en crée une ?

En **JavaScript**, il existe plusieurs façons de créer des fonctions.

### Syntaxe de base

Pour déclarer une fonction, on utilise le mot-clé `function` suivi du nom de la fonction.  
On ajoute des parenthèses `()` (je t’expliquerai pourquoi un peu plus bas), puis des accolades `{}` pour contenir le code.

```javascript
// sytax de base
function faireLaVaisselle() {
  // code
}

// syntax 'Fat arrow'
const faireLaVaisselle = () => {
  // code
};
```

### Syntaxe avec "Fat Arrow"

Une autre manière d'écrire une fonction est d'utiliser **l'arrow function** :

```javascript
const faireLaVaisselle = () => {
  // code
};
```

💡 Toutes les variables déclarées à l'intérieur d'une fonction (dans `{}`) **ne sont accessibles qu'à l'intérieur de celle-ci** !

Exemple:

```javascript
function myName() {
  const name = "John";
  console.log(name); // output: "John"
}

console.log(name); // output: undefined
```

Le moteur **JavaScript** va allouer de la mémoire pour la variable `name`, puis la libérer une fois la fonction terminée.

---

### Appeler une fonction

Pour exécuter une fonction, on utilise son **nom** suivi de **parenthèses `()`** :

```javascript
function whoAmI() {
  const name = "John";
  console.log(name); // output: "John"
}

whoAmI(); // Appel de la fonction
```

---

## Les paramètres

Une fonction peut recevoir des **paramètres**, qui sont des valeurs utilisées dans son exécution.

**Exemple** :

```javascript
const displayName = (name) => {
  console.log(`Je m'appelle ${name}`);
};

const name = "Alexis";
displayName(name); // output: "Je m'appelle Alexis"
displayName("Eva"); // output: "Je m'appelle Eva"
```

Grâce aux paramètres, la fonction devient **plus générique** et peut être réutilisée avec différentes valeurs.

---

## Le `return`

Une fonction peut **retourner une valeur** grâce au mot-clé `return`. Cela permet de récupérer le résultat d’un calcul ou d’une opération.

```javascript
function addition(a, b) {
  return a + b;
}

const result = addition(5, 25); // output: 30
const second = addition(1, 0); // output: 1
```

---

### Les fonctions anonymes

Certaines fonctions n'ont **pas de nom**. Cela peut sembler étrange, mais c'est très pratique !

Exemple avec `.filter()` :

```javascript
const data = ["jean", 19, {}, undefined, 10, null, 8, 1, "pierre"];
const numbers = data.filter((element) => typeof element === "number");
// Reviens au même que :
const keepNumber = (element) => {
  return typeof element === "number";
};

const numbers2 = data.filter((element) => keepNumber(element));
```

---

## 🏆 **Un peu de pratique**

1. **Exercice 1** : Créer une fonction `square` qui prend en paramètre un nombre et retourne ce nombre **au carré**.  
   _(Si on donne 2, la fonction retourne 4)._
1. **Exercice 2** : Créer une fonction `isString` qui prend un paramètre et **retourne `true` si c'est une string**, sinon `false`.
1. **Exercice 3** : Créer une fonction `capitalize` qui met la **première lettre d'un mot en majuscule**.

- Utilise la fonction `isString` pour vérifier si le paramètre est bien une string.
- Si ce n'est pas une string, la fonction retourne `undefined`.

⚠️ **Avant de coder, décompose le problème en plusieurs étapes pour progresser pas à pas.**

| Test |  paramètre   |    retour    |
| :--: | :----------: | :----------: |
|  1   | "hello word" | "Hello word" |
|  2   |      42      |  undefined   |
|  3   |     true     |  undefined   |
|  4   | "bienvenue"  | "Bienvenue"  |
