/*
ARRAY - masyvas, sarasas, listas, matrica, kolekcija

*/

const empty = [];
console.log(empty);
/*
const marks = [10, 2, 8, 4, 6];
console.log(marks);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const count = 5;
const average1 = sum / count;

console.log(average1);
*/

//              0, 1, 2, 3, 4,..... pozicija
const marks = [10, 2, 8, 4, 6];
console.log(marks);

const sum = marks[0] + marks[1] + marks[2];// imti is eiles
const count = marks.length; //length skaiciuoja array ilgi
const average = sum / count;

// paveines reiksmes isitraukiame
console.log('>>>', marks[0]);
console.log('>>>', marks[1]);
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]);

console.log('Vidurkis', average);
console.log('Kiekis', count);
console.log('Suma', sum);

console.clear();

let sum3 = 0;
let index = 0; //index pozicijos numeris

//index = 0 - > 1,......
sum3 += marks[index++];//++index pradetu nuo 2 pozicijos
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];

//sum3 = sum3 + marks[5]; // ? = 30 + undefined

console.log(sum3);