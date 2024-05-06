/*
If - palyginimas

Palyginimo operatoriai:
Visi: <, >, <=, >=, ==(lygu), !=(nelygu), ===(triguba lygu), !==(triguba nelegybybe)
Naudotini: <, >, <=, >=, ===, !==
Nenaudotini: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {}  else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}  
*/

const age = 99;
const ageLimit = 18;

//{} logikos blokas
if(age > ageLimit) {
    console.log('Sorry, bet esi per jaunas...');
} else {
    console.log('ok, uzeik ir pasismagink...');
}

console.clear();

//negali but vieno = 
if (4 <= 2) {
    console.log('Taip, daugiau');
} else {
    console.log('Ne, maziau');
}

console.clear();

/*
const color = 'red';

if (color === 'red') {
    console.log('Raudona');
} else if (color === 'blue'){
    console.log('Melyna');
} else if (color === 'green'){
    console.log('Zalia');
} else{
    console.log('Nezinau');
}
*/

function colorTranslation(color) {
    let translaton = '';

    if (color === 'red') {
        translation = 'raudona';
    } else if (color === 'blue'){
        translation = 'melyna';
    } else if (color === 'green'){
        translation = 'zalia';
    } else{
        translation = '...';
    }
    // COLOR -> Spalva;
    return color + ' -> ' + translation;
}

console.log(colorTranslation('white'));
console.log(colorTranslation('black'));
console.log(colorTranslation('red'));
console.log(colorTranslation('orange'));
console.log(colorTranslation('blue'));
console.log(colorTranslation('violet'));
console.log(colorTranslation('green'));
console.log(colorTranslation('yellow'));