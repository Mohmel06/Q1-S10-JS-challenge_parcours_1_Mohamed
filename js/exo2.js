/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK.
 * 2. À la soumission du formulaire, on additionne les deux nombres,
 * 3. On affiche le résultat dans #result.
 */

let numberInput1 = document.getElementById('input1');
console.log(numberInput1);
let numberInput2 = document.getElementById('input2');
let result = numberInput1 + numberInput2;
let buttonElement = document.getElementById('result');
buttonElement.addEventListener('click', buttonElement);
buttonElement.textContent = +result;
console.log(buttonElement);