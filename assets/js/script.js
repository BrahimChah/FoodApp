var temps; /*on définie une variable temps qui contiendra l'échéance de l'aniumation*/

function tempschargement() { /* On définie la fonction tempschagrment : au bout d'un délai de 2000ms, la fonction reveler() s'exécute */
  temps = setTimeout(reveler, 2000);
}

window.addEventListener("DOMContentLoaded", (evenements) => { /* Quand la fenêtre sera chargée, la fonction temps chargement s'executera
et elle-même va exécuter la fonction reveler() au bout de 2 secondes. */
    console.log(evenements); //Rapport des diffétents évènements qu'on affiche dans la console.*/
    tempschargement();
});

function reveler() {
  document.getElementById("rond").style.display = "none"; /*DOM de la div du rond de chargement, on change la propriété display de son css
  pour le rendre invisible une fois les deux secondes écoulée : on remet les choses en ordre*/
  document.getElementById("body").style.display = "block"; /*La véritable page devient visible.*/
}