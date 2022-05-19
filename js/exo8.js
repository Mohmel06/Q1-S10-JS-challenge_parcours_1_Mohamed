/* === Exo8 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la chaîne de caractères la plus longue de l'Array.
 *
 * Par exemple :
 * - ['coucou', 'hello', 'bonjour'] : 'bonjour'
 * - ['css', 'html', 'js', 'php'] : 'html'
 * - ['un', 2, 'trois', 4, 'cinq'] : 'trois'
 * - [] : false
 */
/*function getLongestString(arr) {
    let str = arr;
    let stringArray = str.split(" ");
    stringArray.sort(function(a, b) {
        return a.split('').length < b.split('').length;
    })
    return stringArray[0];
}
*/
function getLongestString(arr) {
    //let str = arr
    // str = str.match(/[a-zA-Z0-9]+/gi);
    console.log(arr);
    let largest = "";
    if (arr.length > 0) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > largest.length) {
                largest = arr[i]
            }
        }
        return largest;
    } else {
        return false;
    }
}






// Stop ! Tests, on ne touche pas :P
check.exo8(getLongestString);