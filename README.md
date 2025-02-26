# Programmation Orientée Objet Avancée en JavaScript

## 1. L’Héritage : Réutiliser le Code

L’héritage permet de créer une nouvelle classe qui **réutilise** le code d’une autre classe.
Cela évite de répéter du code et rend le programme plus organisé.

### **Exemple : Création d'une classe `Chien` qui hérite de `Animal`**

```javascript
class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  manger() {
    console.log(this.nom + " mange.");
  }
}

class Chien extends Animal {
  constructor(nom) {
    super(nom); // constructeur de la class Animal
  }

  aboyer() {
    console.log(this.nom + " aboie : Ouaf Ouaf !");
  }
}

let monChien = new Chien("Rex");
monChien.manger(); // ✅ Rex mange.
monChien.aboyer(); // ✅ Rex aboie : Ouaf Ouaf !
console.log(monChien.nom); // output: Rex
```

🔹 On accède au `constructor` de la `class` parent avec le mot clés `super`
🔹 Ici, `Chien` **hérite** de `Animal`, donc `Chien` peut utiliser la méthode `manger()` sans la réécrire !

---

## 4. Les Propriétés Statiques

Une **propriété statique** appartient à la classe, et **non** aux objets créés !

### **Exemple : Utilisation d’une propriété statique**

```javascript
class MathUtil {
  static PI = 3.14159; // Propriété statique

  static multiplier(a, b) {
    return a * b;
  }
}
console.log(MathUtil.PI); // ✅ 3.14159
console.log(MathUtil.multiplier(5, 3)); // ✅ 15
```

🔹 On **n’a pas besoin d’instance** pour appeler `MathUtil.PI` ou `MathUtil.multiplier()` !

---

## 5. Exemple d’Utilisation en Entreprise

Imaginons un **logiciel de gestion d’utilisateurs** avec **héritage et encapsulation**.

### **Exemple : Un système de gestion d’utilisateurs**

```javascript
class Utilisateur {
  #motDePasse; // Attribut privé

  constructor(nom, email, motDePasse) {
    this.nom = nom;
    this.email = email;
    this.#motDePasse = motDePasse;
  }

  verifierMotDePasse(mdp) {
    return this.#motDePasse === mdp;
  }
}

class Admin extends Utilisateur {
  constructor(nom, email, motDePasse) {
    super(nom, email, motDePasse);
    this.role = "admin";
  }
}

let user = new Utilisateur("Alice", "alice@mail.com", "1234");
console.log(user.verifierMotDePasse("1234")); // ✅ true

let admin = new Admin("Bob", "bob@mail.com", "adminpass");
console.log(admin.role); // ✅ admin
```

🔹 Ici, **l’admin hérite de `Utilisateur`**, et le **mot de passe est protégé**.

---

## 🎯 Un peu de pratiques !

1️⃣ Créer une class **Personnage** qui a pour attributs public & son constructeur:

| `name`    | `type`   |
| --------- | -------- |
| nom       | `string` |
| prénom    | `number` |
| xPos      | `number` |
| yPos      | `number` |
| life      | `number` |
| weapons   | `array`  |
| moveSpeed | `number` |
| damage    | `number` |

2️⃣ Ajoute les méthodes suivantes:

- `moveForward()`: qui avance le personne sur l'axe X de moveSpeed
- `moveBackward():` qui recule de moveSpeed
- `receiveDamaged(degat):` reçoit des dégâts.

3️⃣ Créer une `class` `Ennemy` qui hérite de Personnage - Ajouter lui un constructeur, qui prend nom, prénom, weapons. xPos, yPos, life, weapons, moveSpeed, damage seront initialiser dans le constructeur du parent. Avec les valeurs suivante, xPos = 0, yPos = 0, life = 1024, weapons = [], moveSpeed = 10, damage = 128

> 🚨 N'oubliez pas d'exporter vos class afin qu'elle soient accessible depuis le fichier de test
