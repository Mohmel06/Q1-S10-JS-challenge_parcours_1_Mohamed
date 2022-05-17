/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */

let nombre1 = parseInt(window.prompt('veuillez entrez un premier nombre :'));
let nombre2 = parseInt(window.prompt('veuillez entrez un deuxième nombre :'));
let result = nombre1 + nombre2;
let resultElement = document.getElementById("result");
resultElement = resultElement.textContent + result;