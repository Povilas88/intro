/*
Duomens tipo nustatymas

TYPEOF (duomens tipo nustatymo operatorius)
*/

function empty() {

}

console.log(typeof 5);
console.log(typeof 3.15);
console.log(typeof infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'string');
console.log(typeof ' ');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [1, 6, 3]);
console.log(typeof ['1', '6', '3']);
console.log(typeof {});
console.log(typeof empty);
console.log();
// kai norite patikrinti ar tai yra masyvas/array

console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3, 4, 5]));
console.log(Array.isArray('labas'));
console.log(Array.isArray(true));
console.log(Array.isArray(empty));
console.log();

//tikrinamas dalykas
if ('asdas' === null) {
    console.log('taip');
} else {
    console.log('ne');
}
if (null === null) {
    console.log('taip');
} else {
    console.log('ne');
}
console.log();
console.clear();

const a = '78';
console.log(a);

//butina 'string'
if (typeof a === 'string') { //typeof a !== 'number'
    console.log('As dirbu su string');
} else {
    console.log('As dirbu ne su string');
}

console.log(a);
console.clear();

const x = 6;
const y = '7';

if (typeof (x && y) !== 'number') {
    console.log('ERROR');
} else {
    console.log('OK');
}

/*
if (typeof x !== 'number') {
    console.log('ERROR');
} else if (typeof y !== 'number') {
    console.log('ERROR');
} else {
    console.log('Viskas ok');
}
*/

