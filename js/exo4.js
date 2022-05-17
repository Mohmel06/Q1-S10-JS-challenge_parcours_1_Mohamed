/* === Exo4 ===
 *
 * 1. Dans #container, afficher l'heure à la seconde près.
 *    Format d'affichage : 11h 12m 06s
 * 2. À chaque seconde, l'heure doit être actualisée.
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */

let displayDate = document.getElementById('container');

let now = new Date();
console.log(now);
let hours = (now.getHours());
let minutes = (now.getMinutes());
let seconds = (now.getSeconds());

let newElement = document.querySelector('section');

let newTime = '<section id="test"><div id="container">' + hours + ":" + minutes + ":" + seconds + '</div></section>';
console.log(newTime);
newElement.insertAdjacentHTML('beforeend', newTime);

function transform(number) {
    if (number < 10) { number = "0" + number; }
    return number;
}
console.log(transform(number));