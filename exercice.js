/*
    Exercice 1 : Distributeur intelligent
    Choice correspond au choix de l'utilisateur.
    Il contient la boisson choisie par l'utilisateur.

    Écris le code permettant d'afficher les phrases suivantes :
    - Si choice est 'eau', afficher "Voici de l'eau".
    - Si choice est 'soda', afficher "Voici du soda".
    - Si choice est 'perrier citron', afficher "Voici du perrier citron".

    - Si choice est 'thé', afficher "Option non valide".

    Exemple pour afficher "Voici de l'eau" :
    console.log("Voici de l'eau").
*/

function getDrinks(choice) {
  // Écris le code ici
}

/*
    Exercice 2 : Accès au parc d'attractions
    age correspond à l'âge du client.

    Afin de savoir s'il peut accéder au parc d'attractions,
    je te demande d'écrire le code qui permet :

    - Si l'âge est inférieur à 12 ans : afficher "Accès refusé : trop jeune".
    - Si l'âge est supérieur ou égal à 12 ans et inférieur à 18 ans : afficher "Accès autorisé avec accompagnement".
    - Si l'âge est supérieur à 18 ans : afficher "Accès autorisé".
*/

function canAcces(age) {
  // Écris le code ici
}

/*
    Exercice 3 : Code promotionnel

    Calculer le prix de vente code promotionnel déduit
    de l'article.

    3 articles sont en vente dans votre boutique :
    - 'basket_air_fronce_8' vendu à 89 €,
    - 'basket_cat' vendu à 140 €,
    - 'savatte_dodo' vendu à 20 €.

    Pour chaque paire de chaussures, affichez le modèle ainsi que son prix de vente remisé.
    Exemple : console.log(`basket_air_fronce_8 62.3 €`).

    Le code promotionnel est le suivant : 'SOLDE_HIVER_MOINS_30'.
    Il offre une promotion de -30 %.

    Si le code promotionnel ne correspond pas, affichez : 'Erreur 404 code promotionnel invalide'.
*/

function codePromo(article, prix, code) {
  // Écris le code ici
}

module.exports = { getDrinks, canAcces, codePromo };
