const { car, shoppingCart, user, student } = require("./exercises");

describe("🏆 Exercice 1 : Création et accès aux propriétés", () => {
  test("L'objet `car` doit contenir les bonnes propriétés", () => {
    expect(car).toHaveProperty("brand", "Tesla");
    expect(car).toHaveProperty("model", "Model S");
    expect(car).toHaveProperty("year", 2023);
    expect(car).toHaveProperty("color", "black");
  });

  test("La couleur de la voiture doit être modifiable", () => {
    car.color = "red";
    expect(car.color).toBe("red");
  });
});

describe("🏆 Exercice 2 : Ajout de méthodes à `car`", () => {
  test("La méthode `paint` doit modifier la couleur de `car`", () => {
    car.paint("blue");
    expect(car.color).toBe("blue");
  });

  test("La méthode `getInfo` doit retourner la bonne phrase", () => {
    expect(car.getInfo()).toBe(
      "Cette voiture est une Tesla Model S de couleur blue"
    );
  });
});

describe("🏆 Exercice 3 : Gestion du panier d'achats", () => {
  test("L'objet `shoppingCart` doit contenir une propriété `items`", () => {
    expect(Array.isArray(shoppingCart.items)).toBe(true);
  });

  test("La méthode `addItem` doit ajouter un élément au panier", () => {
    shoppingCart.addItem("pomme");
    shoppingCart.addItem("banane");
    shoppingCart.addItem("chocolat");
    expect(shoppingCart.items).toContain("pomme");
    expect(shoppingCart.items).toContain("banane");
    expect(shoppingCart.items).toContain("chocolat");
  });

  test("La méthode `removeItem` doit supprimer un élément du panier", () => {
    shoppingCart.removeItem("banane");
    expect(shoppingCart.items).not.toContain("banane");
  });
});

describe("🏆 Exercice 4 : Objet avec objets imbriqués", () => {
  test("L'objet `student` doit contenir un sous-objet `grades`", () => {
    expect(student).toHaveProperty("grades");
    expect(student.grades).toHaveProperty("math", 14);
    expect(student.grades).toHaveProperty("english", 18);
    expect(student.grades).toHaveProperty("science", 12);
  });

  test("La méthode `average` doit calculer correctement la moyenne des notes", () => {
    expect(student.average()).toBeCloseTo((14 + 18 + 12) / 3, 2);
  });
});
