describe("TEST Loop", () => {
  it.skip("Exercice 1: Affiche le nom de tous les élèves", () => {
    const spy = jest.spyOn(console, "log");
    const studients = ["luc", "leïa", "obi-wan", "jar jar", "Qui-Gon"];

    // ecris le code permettant d'affcher le nom de tous tes padawans

    expect(spy).toHaveBeenCalledTimes(studients.length);
    studients.forEach((st, index) => {
      expect(spy).toHaveBeenNthCalledWith(index + 1, st);
    });
  });

  it.skip("Exercice 2: Trouves le plus grand nombre du tableau", () => {
    const tab = [1, 28, 3, 5, 10, 100, 83];

    // Ecris le code permettant de mettre dans 'max' le plus grand nombre de tab

    expect(max).toBe(100);
  });

  it("Exercice 3: Trouve l'intru", () => {
    const animals = ["dog", "cat", "duck", "ball"];
    let intruder;

    // Ecris le code permettant de mettre dans 'min' le plus petit nombre de tab

    expect(intruder).toBe("ball");
  });
});
