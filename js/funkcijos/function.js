/*
FUNCTION - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/

function funkcijosPavadinimas() { //return undefined;
}

const a = funkcijosPavadinimas();
console.log(a);

//function function,const negalima
function empty() {
    return undefined;
}

console.log(empty());

function giveMeFive() {
    return 5;
}

console.log(giveMeFive());
/*
Input:
name: jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
Laba diena, as esu Petras Petraisi!
Laba diena, Es esu Ona Onaityte!
*/

function intro(name, lastname) {
    return 'Laba diena, as esu ' + name + ' ' + lastname + '!';
}

console.log(intro('Jonas','Jonaitis'));
console.log(intro('Maryte','Marytaite'));
console.log(intro('Petras','Petraitis'));

/*
Input:
-pirmas skaicius = 5
-antras skaicius = 7

Output:
35
*/

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(5, 7));

// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus.
// Mano vardas yra Maryte, man 88 metai ir as megstu balionus.

function iLike(name, age, item){
    return 'Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item + '.';
    //return 'Mano vardas yra VARDAS, man XX metai ir as megstu DALYKAS';
}

console.log(iLike('Joanas', 99, 'cepelinus'));
console.log(iLike('Maryte', 88, 'balionus'));

console.clear();

function price(value){
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease;

    return priceForSale;
}

console.log(price(100));
console.log(price(150));

// Dictionary: word, word, word
function words(w1, w2,w3){
    let sentence = 'Dictionary: ';
    sentence += w1;
    sentence += ', ';
    sentence += w2;
    sentence += ', ';
    sentence += w3;
    sentence += '.';

    return sentence;
}

console.log(words('labas', 'rytas', 'Lietuva'));