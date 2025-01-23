describe("TEST Numbers", () => {
    it(`Exercise 1: Calculer le nombre de mètre carrés du terrain`, () => {
      const longueur; // affecter les bonnes valeurs
      const largeur; // affecter les bonnes valeurs
  
      expect(m2).toBe(2500);
    });
  
    it("Exercise 2: Calcul la moyenne de Valentin", () => {
      const math = 10.5;
      const french = 18;
      const eps = 13;
      const art = 20;
      const history = 15;
      const svt = 12;
      const english = 20;
  
      // TODO: Créer une variable 'average' qui permet de stocker la moyenne de Valentin
  
      expect(average).toBe(15.5);
    });
  
    it("Exercise 3: Convertir l'age de Gerard en nombre", () => {
      let age = "42";
  
      expect(typeof age).toBe("number");
      expect(age).toBe(42);
    });
  });