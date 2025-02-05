export const createImage = (src, alt, height = 25, weight = 25) => {
  const img = document.createElement("img");

  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  img.setAttribute("height", height);
  img.setAttribute("weight", weight);

  return img;
};

export const generateMap = (size = 25) => {
  let map = Array.from({ length: size }, () => Array(size).fill(0)); // Remplit tout en herbe (0)

  // 🔹 1. Entourer la carte d'eau (1) pour créer une île
  for (let i = 0; i < size; i++) {
    map[0][i] = 1; // Bord haut
    map[size - 1][i] = 1; // Bord bas
    map[i][0] = 1; // Bord gauche
    map[i][size - 1] = 1; // Bord droit
  }

  map[1][1] = 3; // Coin supérieur gauche
  map[1][size - 2] = 4; // Coin supérieur droit
  map[size - 2][1] = 5; // Coin inférieur gauche
  map[size - 2][size - 2] = 6; // Coin inférieur droit

  // 🔹 3. Appliquer le code 7 au reste du bord supérieur (hors coins)
  for (let i = 2; i < size - 2; i++) {
    map[1][i] = 7;
  }

  // 🔹 4. Appliquer le code 8 au reste du bord inférieur (hors coins)
  for (let i = 2; i < size - 2; i++) {
    map[size - 2][i] = 8;
  }

  // 🔹 5. Appliquer le code 10 au reste du bord droit (hors coins)
  for (let i = 2; i < size - 2; i++) {
    map[i][size - 2] = 10;
  }

  // 🔹 6. Appliquer le code 9 au reste du bord gauche (hors coins)
  for (let i = 2; i < size - 2; i++) {
    map[i][1] = 9;
  }

  // 🔹 2. Générer un chemin (2) qui traverse la carte
  let startX = Math.floor(size / 2); // Départ au milieu de la carte
  let x = startX;
  let y = 2; // Commence juste après la mer

  while (y < size - 2) {
    // S'arrête avant la dernière ligne d'eau
    map[y][x] = 2; // Mettre un chemin

    // 🔸 Entourer le chemin d'herbe (déjà par défaut)
    if (x > 1) map[y][x - 1] = 0;
    if (x < size - 2) map[y][x + 1] = 0;

    // 🔸 Déplacement aléatoire du chemin
    let direction = Math.random();
    if (direction < 0.4 && x > 1) x--; // Gauche
    else if (direction > 0.6 && x < size - 2) x++; // Droite
    y++; // Avancer en bas
  }

  return map.flat();
};

export const createImgNodeFromImage = (imgs, size) => {
  const mapNode = document.createElement("div");
  mapNode.setAttribute("id", "map");

  let row;
  let k = 1;

  imgs.forEach((imgElement, index) => {
    if (index % size === 0) {
      // À chaque multiple de 25, créer une nouvelle ligne
      row = document.createElement("div");
      row.classList.add(`row-container-${k}`);
      mapNode.appendChild(row);
      k++;
    }

    // Ajouter l'image à la ligne courante
    row.appendChild(imgElement);
  });

  return mapNode;
};

export const displayBrowserScreen = (imgs, size) => {
  const imagesMap = createImgNodeFromImage(imgs, size);
  // ne pas supprimer cette
  document.getElementById("app").appendChild(imagesMap);
};
