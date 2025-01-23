describe("TEST Strings", () => {
  it("Exercice 1: Ton prénom", () => {
    // TODO: Créer une string 'name' contenant ton prénom
    expect(typeof name).toBe("string");
  });

  it("Exercice 2: Template string & interpolation", () => {
    const name; // affecter ton prénom
    const whoAmI; // affecter la phrase 'je m'appelle 'name'
    expect(whoAmI.includes(name)).toBe(true);
  });

  it("Exercice 3: bracket notation", () => {
    const phrase =
      "Velit ea nisi enim velit occaecat occaecat reprehenderit fugiat velit exercitation veniam minim consequat";
    const char; // affecter le caractère 22 de la string
    expect(char).toBe("i");
  });
});
