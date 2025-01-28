describe("TEST Array", () => {
  const animals = [
    "cat",
    "dog",
    "horse",
    "duck",
    "dolphine",
    "tortise",
    "elephant",
  ];

  it("Exercice 1: Affiche la taille du tableau 'animals'", () => {
    let arraySize;
    // affecte la taille du tableau à arraySize
    expect(arraySize).toBe(7);
  });

  it("Exercice 2: Affiche le mot à la 4 position de 'animals'", () => {
    let animal;
    const dolphineIndex = 4;
    // En utilisant 'dolphineIndex' affecte dans animal la valeur de 'animals' à l'indice 'dolphineIndex'
    expect(animal).toBe("dolphine");
  });

  it("Exercice 3: Affiche le dernier éléments du tableau", () => {
    const lastElt = undefined;
    expect(lastElt).toBe("elephant");
  });
});
