class Personnage {
  nom;
  prenom;
  xPos;
  yPos;
  life;
  weapons;
  moveSpeed;
  damage;

  constructor(nom, prenom, xPos, yPos, life, weapons, moveSpeed, damage) {
    this.nom = nom;
    this.prenom = prenom;
    this.xPos = xPos;
    this.yPos = yPos;
    this.life = life;
    this.weapons = weapons;
    this.moveSpeed = moveSpeed;
    this.damage = damage;
  }

  moveForward() {
    this.xPos += this.moveSpeed;
  }

  moveBackward() {
    this.xPos -= this.moveSpeed;
  }

  receiveDamaged(degat) {
    this.life -= degat;
  }
}

class Ennemy extends Personnage {
  constructor(nom, prenom, weapons) {
    super(nom, prenom, 0, 0, 1024, weapons, 10, 128);
  }
}

module.exports = { Personnage, Ennemy };
