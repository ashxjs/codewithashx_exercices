## Structures conditionnelles

Imagine que tu es devant un distributeur de boissons :

- **Si** tu appuies sur le bouton de l’eau, tu obtiens de l’eau.
- **Si** tu appuies sur celui du soda, tu obtiens du soda.
- Et si tu veux un jus ? Pas de souci, il y a un bouton pour ça aussi !

En algorithme, on utilise des **"si"** et des **"sinon"** pour faire des choix similaires. 🚦

Exemple :

```javascript
événement = "eau";

// Si l'événement est "eau", donne de l'eau
// Sinon, donne une autre réponse
if (événement === "eau") {
  console.log("Voici de l'eau !");
} else if (événement === "soda") {
  console.log("Voici du soda !");
} else {
  console.log("Pièce gardée 😅");
}
```

### **La déclaration `if` : le premier bouton de contrôle**

- **`if`** vérifie une condition et exécute un bloc de code si la condition est vraie.
- Si la condition n’est pas remplie, **`else`** agit comme un plan B pour exécuter une autre action.
- Besoin de plus d’options ? Utilise **`else if`** pour tester plusieurs cas.

---

## Opérateurs de comparaison (`==`, `!=`, `>`, `<`, `>=`, `<=`, `===`)

Les opérateurs de comparaison servent à évaluer des conditions.

**Exemple:**

```javascript
const age = 17;
const estMajeur = age >= 18;

if (estMajeur) {
  console.log("Je suis majeur");
} else {
  console.log("Je suis mineur");
}
```

### **Liste des opérateurs principaux :**

#### **1. `==` : l'égalité simple**

- Compare uniquement les **valeurs** (pas les types).

```javascript
if (42 == "42") {
  // ✅ true
  // Les valeurs sont égales
}
```

#### **2. `===` : l'égalité stricte**

- Compare les **valeurs ET les types**.

```javascript
if (42 === "42") {
  // ❌ false
  // Les types ne correspondent pas
}
```

#### **3. `!=` : la non-égalité simple**

- Renvoie `true` si les valeurs sont différentes (mais ne compare pas les types).

```javascript
if ("jean" != "anne") {
  // ✅ true
  console.log("Les prénoms sont différents");
}
```

#### **4. `!==` : la non-égalité stricte**

- Renvoie `true` si les valeurs ou les types sont différents.

```javascript
if (42 !== "42") {
  // ✅ true
  // Les types diffèrent, donc la condition est remplie
}
```

#### **Autres opérateurs courants :**

- **`>`** : Plus grand que
- **`<`** : Plus petit que
- **`>=`** : Supérieur ou égal
- **`<=`** : Inférieur ou égal

---

## **Opérateurs logiques (`&&`, `||`, `!`)**

### 1. L'opérateur ET (`&&`)

Les deux conditions doivent être **vraies** pour que l’ensemble soit évalué à `true`.

```javascript
const missionAccomplie = true;
const tuerLeBoss = false;

if (missionAccomplie && tuerLeBoss) {
  console.log("Tu passes au niveau supérieur !");
} else {
  console.log("Termine tes quêtes d'abord !");
}
```

| Condition gauche | Condition droite | Résultat |
| :--------------- | ---------------- | -------- |
| `true`           | `true`           | ✅       |
| `true`           | `false`          | ❌       |
| `false`          | `false`          | ❌       |
| `false`          | `true`           | ❌       |

---

### 2. L'opérateur OU (`||`)

Il suffit qu’une des deux conditions soit vraie pour que l’ensemble soit évalué à `true`.

```javascript
const vie = 0;
const estTombe = false;

if (vie <= 0 || estTombe) {
  console.log("Game Over !");
} else {
  console.log("Continue à jouer !");
}
```

| Condition gauche | Condition droite | Résultat |
| ---------------- | ---------------- | -------- |
| `true`           | `true`           | ✅       |
| `true`           | `false`          | ✅       |
| `false`          | `false`          | ❌       |
| `false`          | `true`           | ✅       |

---

### 3. L'opérateur NON (!)

Inverse une valeur booléenne :

```javascript
const accepterNewsletter = true;

if (!accepterNewsletter) {
  console.log("Pas d'email envoyé !");
} else {
  console.log("Envoi des emails activé !");
}
```

---

## **Les Booléens (`true`, `false`)**

Les booléens sont des valeurs simples : **`true`** ou **`false`**.  
Ils sont essentiels pour vérifier des conditions.

```javascript
const accepterNewsletter = true;

if (accepterNewsletter) {
  console.log("On peut envoyer des mails !");
} else {
  console.log("Pas d'email envoyé !");
}
```

---

🏆 **Exercice pratique**
Crée un code qui simule un distributeur automatique de boissons :

1. Si on appuie sur "eau", le distributeur donne de l’eau.
2. Si on appuie sur "soda", le distributeur donne du soda.
3. Sinon, le distributeur garde la pièce.

---

### Prochain cours : Les tableaux 🚦

Quand vous avez terminé, passez au cours suivant sur les conditions :

```bash
git reset --hard HEAD
git switch 5-Arrays
```
