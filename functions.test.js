const { square, isString, capitalize } = require("./functions");

describe("TEST Functions", () => {
  it("Exercice 1: Fonction square", () => {
    expect(square(2)).toBe(4);
    expect(square(3)).toBe(9);
    expect(square(4)).toBe(16);
    expect(square(5)).toBe(25);
  });

  it("Exercice 2: isString", () => {
    expect(isString(42)).toBe(false);
    expect(isString("42")).toBe(true);
    expect(isString("Je m'appelle John")).toBe(true);
    expect(isString(false)).toBe(false);
  });

  it("Exercice 3: capitalize", () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize(42)).toBe(undefined);
    expect(capitalize(true)).toBe(undefined);
    expect(capitalize("bienvenue")).toBe("Bienvenue");
  });
});
