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
if (age > ageLimit) {
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
    } else if (color === 'blue') {
        translation = 'melyna';
    } else if (color === 'green') {
        translation = 'zalia';
    } else {
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

console.clear();

function numberSize(n) {
    const nAstext = '' + n;
    if (n % 1 !== 0 && n < 0) {
        return nAstext.length - 2;// - su neigiamais desimtainiais skaiciais
    } if (n % 1 !== 0) {
        return nAstext.length - 1;// liekana grazina be kablelio
    } if (n < 0) {
        return nAstext.length - 1;
    }
    return nAstext.length;
}

console.log(numberSize(5));
console.log(numberSize(0));
console.log(numberSize(3.14));
console.log(numberSize(-3.14));
console.log(numberSize(-3.144687));

console.log();
console.clear();

function numberSize2(n) {
    if (typeof n !== 'number') {
        return 'Blogas duomenu tipas';
    }
    const nAstext2 = '' + n;
    if (!isFinite(nAstext2)) { // === false
        return 'Duok normalu skaiciu';
    }
    let size = nAstext2.length;
    //desimtainis
    if (n % 1 !== 0) {
        size--;
    }
    //neigiamas
    if (n < 0) {
        size--;
    }
    return size;
}
console.log(numberSize2(5));
console.log(numberSize2(0));
console.log(numberSize2(3.14));
console.log(numberSize2(-3.14));
console.log(numberSize2(-3.144687));
console.log(numberSize2(NaN));
console.log(numberSize2(Infinity));
console.log(numberSize2(-Infinity));
console.log(numberSize2(true));
console.log(numberSize2(false));
console.log(numberSize2(undefined));
console.log(numberSize2(null));
console.log(numberSize2(numberSize2));
console.log(numberSize2());
console.log(numberSize2(''));
console.log(numberSize2('zodis belekoks'));
console.log(numberSize2('pomidoras'));
console.log(numberSize2([]));
console.log(numberSize2([1, 2]));
console.log(numberSize2(['labas', 'rytas']));
console.log(numberSize2(['labas', 'rytas', 'Lieutva']));