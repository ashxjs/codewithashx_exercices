const { Personnage, Ennemy } = require("./exercice");

describe("class Personnage", () => {
  describe("Exercice 1: Créer une class Personnage", () => {
    it("should have attributs", () => {
      const personnage = new Personnage("John", "Doe", 0, 0, 100, [], 10, 10);
      expect(personnage.nom).toBe("John");
      expect(personnage.prenom).toBe("Doe");
      expect(personnage.xPos).toBe(0);
      expect(personnage.yPos).toBe(0);
      expect(personnage.life).toBe(100);
      expect(personnage.weapons).toEqual([]);
      expect(personnage.moveSpeed).toBe(10);
      expect(personnage.damage).toBe(10);
    });
  });
  describe("Exercice 2: Créer les bonnes méthodes", () => {
    it("should have attributs", () => {
      const personnage = new Personnage("John", "Doe", 0, 0, 100, [], 15, 10);
      personnage.moveForward();
      expect(personnage.xPos).toBe(15);
      personnage.moveBackward();
      expect(personnage.xPos).toBe(0);
      personnage.receiveDamaged(10);
      expect(personnage.life).toBe(90);
    });
  });
});

describe("class Ennemy", () => {
  describe("Exercice 3: Créer une class Ennemy", () => {
    it("should have attributs", () => {
      const ennemy = new Ennemy("John", "Doe", []);
      expect(ennemy.nom).toBe("John");
      expect(ennemy.prenom).toBe("Doe");
      expect(ennemy.xPos).toBe(0);
      expect(ennemy.yPos).toBe(0);
      expect(ennemy.life).toBe(1024);
      expect(ennemy.weapons).toEqual([]);
    });
  });
});
