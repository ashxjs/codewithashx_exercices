const { Chat, User, MyString } = require("./poo");

describe("TEST P.O.O", () => {
  it("🏆 Exercice 1: Race Chat", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const chat = new Chat("Jumpy", "Main coon");
    chat.infos();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Je suis Jumpy, ma race est Main coon"
    );
  });

  it("🏆 Exercice 2: Ajoute une méthode dormir", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const chat = new Chat("Minou", "Main coon");
    chat.dormir();

    expect(consoleSpy).toHaveBeenCalledWith("Minou dort... Zzz...");
  });

  it("🏆 Exercice 3: Class MyString", () => {
    const str = new MyString("Class");
    const str2 = new MyString("Lorem ipsum");

    expect(str.getLength()).toBe(5);
    expect(str2.getLength()).toBe(11);
  });

  it("🏆 Exercice 4: isPalindrome", () => {
    const str = new MyString("radar");
    expect(str.getIsPalindrome()).toBe(true);
    const str2 = new MyString("kayak");
    expect(str2.getIsPalindrome()).toBe(true);
    const str3 = new MyString("Bienvenue");
    expect(str3.getIsPalindrome()).toBe(false);
  });

  describe("🏆 Exercice 5: Class User", () => {
    it("should attributs declared private", () => {
      const user = new User();
      expect(user.firstname).toBeUndefined();
      expect(user.lastName).toBeUndefined();
      expect(user.isLogged).toBeUndefined();
      expect(user.email).toBeUndefined();
      expect(user.password).toBeUndefined();
    });

    it("should getter return good values", () => {
      const user = new User(
        "Alice",
        "AuPaysDesMerveilles",
        false,
        "alice@merveilles.so",
        "********"
      );
      expect(user.getFirstName()).toBe("Alice");
      expect(user.getLastName()).toBe("AuPaysDesMerveilles");
      expect(user.getIsLogged()).toBe(false);
      expect(user.getEmail()).toBe("alice@merveilles.so");
      expect(user.getPassword()).toBe("********");
    });

    it("should setter updates values", () => {
      const user = new User(
        "Alice",
        "AuPaysDesMerveilles",
        false,
        "alice@merveilles.so",
        "********"
      );

      user.setFirstName("John");
      expect(user.getFirstName()).toBe("John");

      user.setLastName("Doe");
      expect(user.getLastName()).toBe("Doe");

      user.setIsLogged(true);
      expect(user.getIsLogged()).toBe(true);

      user.setEmail("john@doe.fr");
      expect(user.getEmail()).toBe("john@doe.fr");

      user.setPassword("azerty123");
      expect(user.getPassword()).toBe("azerty123");
    });

    it("should setter displayName use capitalize", () => {
      const user = new User(
        "Alice",
        "AuPaysDesMerveilles",
        false,
        "alice@merveilles.so",
        "********"
      );

      const expectedResult = `${user
        .getLastName()
        .charAt(0)
        .toUpperCase()}${user.getLastName().slice(1).toLowerCase()} ${user
        .getFirstName()
        .charAt(0)
        .toUpperCase()}${user.getFirstName().slice(1).toLowerCase()}`;
      expect(user.displayName()).toBe(expectedResult);
    });
  });
});
