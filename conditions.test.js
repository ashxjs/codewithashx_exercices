const { getDrinks, canAcces, codePromo } = require("./exercice");

describe("TEST Conditions", () => {
  describe("Exercice 1: Le distributeur intelligent", () => {
    it.skip("should  display 'Option non valide'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      getDrinks("thé");

      expect(consoleSpy).toHaveBeenCalledWith("Option non valide");
    });
    it.skip("should  display 'Voici de l'eau'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      getDrinks("eau");

      expect(consoleSpy).toHaveBeenCalledWith("Voici de l'eau");
    });
    it.skip("should  display 'Voici du soda'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      getDrinks("soda");

      expect(consoleSpy).toHaveBeenCalledWith("Voici du soda");
    });
    it.skip("should  display 'Voici du perrier citron'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      getDrinks("perrier citron");

      expect(consoleSpy).toHaveBeenCalledWith("Voici du perrier citron");
    });
  });

  describe("Exercice 2: Accès au parc d'attractions", () => {
    it.skip("should display 'Accès refusé: trop jeune'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      canAcces(10);

      expect(consoleSpy).toHaveBeenCalledWith("Accès refusé: trop jeune");
    });

    it.skip("should display 'Accès autorisé avec accompagnement'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      canAcces(12);

      expect(consoleSpy).toHaveBeenCalledWith(
        "Accès autorisé avec accompagnement"
      );
    });
    it.skip("should display 'Accès autorisé avec accompagnement'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      canAcces(17);

      expect(consoleSpy).toHaveBeenCalledWith(
        "Accès autorisé avec accompagnement"
      );
    });
    it.skip("should display 'Accès autorisé'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      canAcces(21);

      expect(consoleSpy).toHaveBeenCalledWith("Accès autorisé");
    });
  });

  describe("Exercice 3 Code Promotionnel", () => {
    it.skip("should display 'basket_air_fronce_8'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      codePromo("basket_air_fronce_8", 89, "SOLDE_HIVER_MOINS_30");

      expect(consoleSpy).toHaveBeenCalledWith("basket_air_fronce_8, 62.3€");
    });

    it.skip("should display 'Erreur 404 code promotionnel invalide'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      codePromo("basket_air_fronce_8", 89, "SOLDE");

      expect(consoleSpy).toHaveBeenCalledWith(
        "Erreur 404 code promotionnel invalide"
      );
    });

    it("should display 'basket_cat, 98€'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      codePromo("basket_cat", 140, "SOLDE_HIVER_MOINS_30");

      expect(consoleSpy).toHaveBeenCalledWith("basket_cat, 98€");
    });

    it("should display 'savatte_dodo, 14€'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      codePromo("savatte_dodo", 20, "SOLDE_HIVER_MOINS_30");

      expect(consoleSpy).toHaveBeenCalledWith("savatte_dodo, 14€");
    });
  });
});
