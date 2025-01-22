describe("TEST Variables", () => {
  it("Exercise 1: let permet de changer la valeur d'un nombre", () => {
    let score;

    // TODO: assigner la valeur 20 à la variable score

    expect(score).toBe(20);
  });

  it("Exercise 2: empêche de reaffecter valeur de age", () => {
    let age = 25;

    expect(() => {
      age = 26; // Doit générer une erreur
    }).toThrow(TypeError);
  });

  it("Exercise 3: let permet de changer une chaîne de caractères", () => {
    let message = "Bonjour";

    // TODO: change la valeur de 'message' en "Au revoir"

    expect(message).toBe("Au revoir");
  });

  it("Exercise 4: const empêche de changer une chaîne de caractères", () => {
    let age = 32;

    expect(() => {
      age = "Bob"; // Doit générer une erreur
    }).toThrow(TypeError);
  });
});
