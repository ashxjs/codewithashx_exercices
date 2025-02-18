## 1. Introduction

Imagine que tu veux créer un jeu vidéo avec des voitures 🚗.  
Chaque voiture possède des **caractéristiques** (comme sa couleur et sa vitesse) et peut effectuer des **actions** (comme avancer ou freiner).

En **programmation orientée objet (POO)**, on regroupe ces **caractéristiques** et ces **actions** au sein d'un modèle appelé **classe**.

---

## **2. Les classes et les objets**

Une **classe** est comme un **moule à gâteau 🍰**.  
Un **objet**, c’est le **gâteau fabriqué avec ce moule**.

L'objet créer s'appelle une instance
Chaque instance est indépendante.

Pour créer une nouvelle instance on utilise le mot clés `new`.

### 🛠️ Exemple de classe `Voiture` :

```javascript
// Création du moule (class)
class Voiture {
  constructor(couleur, vitesse) {
    this.couleur = couleur;
    this.vitesse = vitesse;
  }

  rouler() {
    console.log("La voiture roule à " + this.vitesse + " km/h !");
  }
}

// Création d'un objet (une voiture)
let maVoiture = new Voiture("rouge", 50);
console.log(maVoiture.couleur); // Affiche: rouge
maVoiture.rouler(); // Affiche : La voiture roule à 50 km/h !

// Création d'un deuxième objet
let greenCar = new Voiture("vert", 100);
console.log(maVoiture.couleur); // Affiche: vert
greenCar.rouler(); // Affiche : La voiture roule à 100 km/h !
```

✅ **À partir d'un même modèle, on peut créer une infinité d'objets !**

## **3. Les attributs et les méthodes**

Les **attributs** représentent les **propriétés** d’un objet.  
Les **méthodes** sont les **actions** qu’un objet peut effectuer.

### 🛠️ Exemple : Class `Chat`

```javascript
class Chat {
  constructor(nom, couleur) {
    this.nom = nom;
    this.couleur = couleur;
  }

  jump() {
    console.log(`le chat ${this.nom} saute !`);
  }
}

let chat1 = new Chat("Garfield", "orange");
console.log(chat1.nom); // Affiche : Garfield
console.log(chat1.couleur); // Affiche : orange
console.log(chat1.jump()); // Affiche: le chat Garfield saute !
```

## 4. **L'encapsulation**

L’**encapsulation** est un principe fondamental de la programmation orientée objet qui consiste à **cacher** les détails internes d’un objet et à **contrôler** l’accès à ses attributs.

### Pourquoi utiliser l'encapsulation ?

1️⃣ Empêche l'accès direct au attributs, on doit passer par des méthodes
2️⃣ Permet de définir des règles d'accès aux données
3️⃣ Améliore la lisibilité du code

Prenons l'exemple d'un personnage de jeu

```javascript
class Character {
  #life;
  #xPos;
  #yPos;
  #firstName;
  #lastName;
}

const major = new Character();
console.log(major.firstName); // output: 'undefined'
```

Un attribut déclarer avec un `#`en premiere lettre est `privée`. On ne peut y avoir accès que dans la `class`. Dans notre exemple tous les attributs sont `privée`.

Pour pouvoir y accéder nous allons devoirs passer par des `getter` et `setter`. Ce sont des méthodes qui vont nous permettre d'accéder a nos attributs

```javascript
class Character {
  #life;
  #xPos;
  #yPos;
  #firstName;
  #lastName;
  #attackDamage;

  constructor(life, attack, firstName, lastName) {
    this.#life = life;
    this.#xPos = 0;
    this.#yPos = 0;
    this.#attackDamage = attack;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  getLife() {
    return this.#life;
  }

  getAttackDamaged() {
    return this.#attackDamage;
  }

  receiveDamaged(damaged) {
    this.#life -= damaged;

    if (this.#life <= 0) {
      console.log(`${this.#firstName} est mort 💀 !!!`);
    }
  }
}
```

on va créer deux personnage et utiliser les getters et setters, puis les faire interagir.

```javascript
const marcus = new Character(2000, 1000, "Marcus", "Phoenix");
const locust = new Character(1000, 1000, "Locust", "1");

locust.receiveDamaged(marcus.getAttackDamaged()); // output: Locuste est mort 💀 !!!
```

---

### **Exercices 🎯**

Tu devras créer toutes les `class` dans le fichier `poo.js` puis les exporter afin qu'elles soient bien accéssibles depuis le fichier de test.

### 🏆 Exercice 1: Créer un chat

Créer une `class` Chat qui possède 2 attributs nom, race et une méthode `infos` qui affiche "Je suis Jumpy, ma race est Main coon."

---

### 🏆 Exercice 2: Ajouter une méthode `dormir()`

Ajoute une méthode `dormir()` à la classe `Chat` qui affiche "[nom] dort... Zzz...".

---

### 🏆 Exercice 3: Créer une class MyString

La `class` MyString doit prendre en paramètre de son constructeur une string.
Ajoute un attributs privé `length` qui permet de compter le nombre de caractère du mot.

🚨 Le comptage des caractères doit etre fais sans utiliser de `.length`.

Exemple:

```javascript
const str = new MyString("Lorem ipsum");
console.log(str.getLength()); // output: 11
```

---

### 🏆 Exercice 4: Ajouter un attributs isPalindrome

Ajouter un attribut `isPalindrome` et tester la string
💡Un palindrome est un mot qui se lit à l'identique dans les deux sens

Exemple: `kayak`, `radar`, `ressasser` etc ...

Exemple:

```javascript
const str = MyString("Kayak");
console.log(str.isPalindrome); // output: true

const str = MyString("Bonjour");
console.log(str.isPalindrome); // output: false
```

---

### 🏆 **Exercice 5 :** Créer une `class` User

Possédant les attributs privés suivants:

- firstName
- lastName
- isLogged
- email
- password

Définissez les getters et setters pour tous les attributs privés.
Exemple: `getPassword` renvoie le password et `setPassword` le modifie.

Ajouter une méthode `displayName` qui affiche le nom et le prénom par exemple pour: "Dupont Pierre"

---

## **Prochain cours: La P.O.O avancé** 🚦

tu peux maintenant passer au cours suivant !

```shell
git reset --hard HEAD
git switch 9-Poo-advenced
```
