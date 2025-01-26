## Structures conditionnelles

Imagine que tu es devant un distributeur de boissons : si tu appuies sur le bouton de l'eau, tu obtiens de l'eau. Si tu appuies sur celui du soda, tu obtiens du soda. Et si tu veux un jus ? Pas de souci, il y a un bouton pour ça aussi ! En algorithme, on utilise des **"si"** et des **"sinon"** pour faire des choix similaires. 🚦

`événement = "eau"`

- **Si** l'événement est égal à "eau", **alors** donne de l'eau.
- **Si** l'événement est égal à "soda", **alors** donne du soda.
- **Sinon**, garde la pièce du client (et avoue, ça t’est sûrement déjà arrivé ! 😅).

La déclaration `if` est comme ton premier bouton. Elle dit à ton programme : "Hey, si cette condition est vraie, fais ceci !" 👉👈. C’est la base de la prise de décision dans ton code.

Mais que se passe-t-il si la condition `if` n’est pas remplie ? Là, l'instruction **`else`** entre en jeu comme un plan B. Elle signifie : "Ok, si la première condition n’est pas vraie, faisons autre chose." 🔄

Parfois, les choses sont plus complexes, et tu as besoin de plusieurs options. Dans ce cas, **`else if`** est là pour t’aider. Il te permet de tester plusieurs conditions différentes, comme choisir entre de l’eau, du soda ou du jus. 🥤

Voici comment cela se traduirait en JavaScript :

```javascript
if (condition) {
  return "water";
} else {
  return "coca";
}
```

🏆 Exercice : Écris le code qui simule un distributeur automatique de boissons !

## Opérateurs de comparaison (`==`, `!=`, `>`, `<`, `>=`, `<=`, `===`)

Les opérateurs de comparaison permettent d’évaluer des conditions dans ton code.

Par exemple :

```javascript
const age = 17;
const estMajeur = age >= 18;

if (estMajeur) {
  console.log("Je suis majeur");
} else {
  console.log("Je suis mineur");
}
```

### Liste des principaux opérateurs :

#### `==` : l'opérateur d'égalité

Permet de comparer deux valeurs.

```javascript
if (42 == 42) {
  // ✅ true !
  // valeur égale
}
```

🚨 Attention : en JavaScript, cet opérateur compare uniquement les **valeurs** et non les **types**.

```javascript
if (42 == "42") {
  // ✅ true !
  // 🚨 Cela peut entraîner des comportements inattendus
}
```

#### `===` : l'opérateur d'égalité stricte

Contrairement à `==`, il compare à la fois les **valeurs** et les **types**.

```javascript
if (42 === "42") {
  // ❌ false !
  // Les valeurs sont égales, donc la condition n'est pas remplie
}
```

#### `!=` : l'opérateur de non-égalité

Retourne `true` si les valeurs ne sont pas égales.
🚨 Cependant, il ne compare pas les types :

```javascript
const prenom = "jean";

if (prenom != "anne") {
  console.log(prenom);
}
```

#### `!==` : l'opérateur de non-égalité stricte

Compare les valeurs **et** les types.

```javascript
if (42 !== "42") {
  // ✅ true !
  // Les types sont différents, donc la condition est remplie
}
```

#### Autres opérateurs :

- **`>`** : Plus grand que
- **`<`** : Plus petit que
- **`>=`** : Supérieur ou égal
- **`<=`** : Inférieur ou égal

## Opérateurs logiques (`and`, `or`, `not`)

### L'opérateur **ET** (`&&`)

Les opérateurs logiques permettent de combiner plusieurs conditions. L’opérateur **ET** (`&&`) exige que **toutes** les conditions soient vraies.

```javascript
const missionAccomplie = true;
const tuerLeBoss = false;
const passerAuNiveauSupérieur = missionAccomplie && tuerLeBoss;

if (passerAuNiveauSupérieur) {
  // On ouvre la porte
} else {
  // Message : "Termine tes quêtes d'abord !"
}
```

Voici un petit tableau qui permet de comprendre comment seront évaluer les différentes combinaison

| Condition de gauche   | Condition de droite | résultat                                                                              |
| --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| `true`                | `true`              | ✅                                                                                    |
| `true`                | `false`             | ❌                                                                                    |
| `false`               | `false`             | ❌                                                                                    |
| `false`               | `true`              | ❌                                                                                    |
| ### L'opérateur OU (` |                     | `)                                                                                    |
| Avec **OU** (`        |                     | `), il suffit qu’une des deux conditions soit vraie pour que l’évaluation soit vraie. |

```javascript
const vie = 0;
const estTombe = false;
const gameOver = vie <= 0 || estTombe;

if (gameOver) {
  // Afficher l'écran de fin de jeu
}
```

| valeur de gauche | valeur de droite | résultat |
| ---------------- | ---------------- | -------- |
| `true`           | `true`           | ✅       |
| `true`           | `false`          | ✅       |
| `false`          | `false`          | ❌       |
| `false`          | `true`           | ✅       |

### L'opérateur **NON** (`!`)

Inverse la valeur d’un booléen :

```javascript
const accepterNewsletter = true;

if (!accepterNewsletter) {
  console.log("Pas d'email envoyé !");
}
```

## Les Booléens (`true`,`false`)

On l'a vu plus haut, les booléens sont des valeurs simple, vrai ou faux.
Ils nous servent à verifier que des condition sont vrai ou fausse.

```javascript
const accepterNewsletter = true;

if (accepterNewsletter) {
  // on peut envoyer des mails
} else {
  // on enverra pas d'email
}
```
