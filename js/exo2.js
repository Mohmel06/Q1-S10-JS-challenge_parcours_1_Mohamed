/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK.
 * 2. À la soumission du formulaire, on additionne les deux nombres,
 * 3. On affiche le résultat dans #result.
 */
let formElement = document.querySelector('#container');
console.log(formElement);

formElement.addEventListener('submit', displayResult);

function displayResult(event) {
    event.preventDefault();
    let numberInput1 = document.getElementById('input1').value;
    console.log(numberInput1);
    let numberInput2 = document.getElementById('input2').value;
    let result = parseInt(numberInput1) + parseInt(numberInput2);
    let resultElement = document.querySelector('#result');
    resultElement.textContent = result;
    console.log(result);
}