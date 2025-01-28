Maintenant que tu sais ce qu'est une variable, on va maintenant s'intéresser au type primitif "Number"

On va directement passer a la pratique !

Met toi sur la `branch` suivante afin d'avoir tous les outils nécessaire pour réaliser au mieux les exercices.

Dans le dossier `exercice`, tu trouveras les différents exercices à réaliser.

Voici la liste des différentes documentation dont tu pourrais avoir besoin:
[Javascript Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators)

### Exercice 1

Jean souhaite acheter un terrain de 25 mètre de longueur et 100 mètre de large.
Créer une variable mètre carré permettant de stocker le nombre de mètre carrés que contient le terrain.

#### Exercice 2

Valentin souhaite connaitre sa moyenne du trimestre.
On sait qu'il a eu:

- 10.5 en Math
- 18 en Français
- 13 en EPS
- 20 en Art
- 15 en histoire GEO
- 12 en SVT
- 20 en anglais

#### Exercice 3

Corrige le bug afin que l'age de Gérard soit un `number`

### Passons à la théorie

#### Opérateurs d'égalité

`==` Égalité simple
`===` Égalité stricte

#### Opérateurs Arithmétiques

`+` Addition
`-` Soustraction
`*` Multiplication
`/` Division
`%` Module

#### Conversions de types

On peut convertir des `strings` en chaine de caractères.
Pour se faire un utilise une fonction (outils): `parseInt`.

```javascript
const strAge = "42";
const age = parseInt(strAge);

console.log(age); // output: 42
console.log(typeof age); // output: 'number'
```

En javascript il n'y a pas de différence entre les nombres entiers et les nombres à virgules (0.3333333).
Ils sont tout deux des `number`, cependant lorsque l'on souhaite changer sa valeurs nous n'utiliseront pas le même outils !

```javascript
const baguettePrice = "1.20";
console.log(parseInt(baguettePrice)); // output: 1 ❌ pas le résultat attendu
console.log(parseFloat(baguettePrice)); // output: 1.20 ✅
```

#### Les # BigInt

```javascript
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

console.log(`biggestNum : ${biggestNum}`); // output: 1.7976931348623157e+308
console.log(`smallestNum : ${smallestNum}`); // output: 5e-324
console.log(`infiniteNum : ${infiniteNum}`); // output: Infinity
console.log(`negInfiniteNum : ${negInfiniteNum}`); // output: -Infinity
console.log(`notANum : ${notANum}`); // output: NaN
```

Ils restent peu utilisé ou ont des cas d'usage spécifique.

#### NaN

Intéressons nous au `NaN` ou `Not a Number`. C'est une valeur que vous verrez dès lors qu'une erreur se produit dans une opération arithmétique.

```javascript
const result = 0 / 0;

console.log(result); // output: NaN ❌ Pas possible de diviser par 0
```

Reproduit la banana string

```javascript
console.log("b" + "a" + +"a" + "a");
// résultat attendu: 'baNaNa'
```

---

### Prochain cours : Les strings 🚦

Quand vous avez terminé, passez au cours suivant :

git reset --hard HEAD
git switch 3-Strings
