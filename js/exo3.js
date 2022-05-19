/* === Exo3 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input.
 * 2. Chaque fois qu'on tape au clavier dans l'un des deux inputs,
 *      et si les deux inputs sont remplis,
 *      on additionne les deux nombres.
 * 3. On affiche le résultat dans #result
 */


let formElement = document.querySelector('#container');
//console.log(formElement);
formElement.addEventListener('input', formResult);


function formResult(event) {
    event.preventDefault();
    let numb1 = document.getElementById('input1').value;
    let numb2 = document.getElementById('input2').value;

    //if ((!empty(numb1)) && (!empty(numb2))) {
    let result = parseInt(numb1) + parseInt(numb2);
    let resultElement = document.querySelector('#result');
    resultElement.textContent = result;

    return result;
    // } else {
    // return "Champ obligatoire";
    // }
}