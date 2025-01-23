Une strings est la représentation d'un mot ou d'un caractère.

```javascript
const name = "John"; // string avec double quote "
const dog = "robert"; // string avec simple quote
const whoAmI = `je m'appelle ${name}`; // template string avec backtick

console.log(whoAmI); // output 'je m'appelle John
```

On peut créer une strings avec de ces trois façons.

- Double quote `"`
- Simple quote `'`
- BackTick \`

Il n'y a aucune différence entre ces trois `string`.
L'utilisation des templates strings s'avère pratique pour mettre le contenue d'une string dans une autre variable

```javascript
const sender = "Gérard";
const receiver = "Marcelle";

const message = `
	Hey ${receiver} 👋,

	Tu serais intéressé pour rejoindre une super formation ?

	Bien à toi,
	${sender}
`;
```

Les strings sont des `objets` complexe nous exploreront plus un details dans un prochain cours.
Pour transformer une valeur en `string` tu peux utiliser la fonction `String`

```javascript
const age = String("42");
const isString = String(true);
const PrixPainAuChocolat = String("1.20");
```

### Forme Complexe

Les strings sont stocké sous forme de tableau.
Un tableau est une structure de donné qui nous permet de stocker pleins de valeurs au même endroit.

Chaque élément est stocké dans une case (appelé indice) du tableau.
Prennons le mot `Hello`, il comporte 5 lettres

![./images/string-table.png](./images/string-table.png)

Chaque index du tableau contient 1 caractère, en Javascript et dans beaucoup d'autre langage, le premier index est 0.

0. index 1 => H
1. Index 2 => e
2. Index 3 => l
3. Index 4 => l
4. Index 5 => o

Pour accéder au contenue d'un index on utilise l'opérateur `[]`

```javascript
const str = "Hello";
console.log(str[4]); // output: o
```

Pour accéder au chapitre suivant:

```bash
	git restore . && git switch 4-conditions
```
