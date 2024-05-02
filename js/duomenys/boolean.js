/*
BOOLEAN - logines reiskmes

- true
- false
- logika

Boolean logikos operatoriai
- && (and)
- || (or)
- ! (not) 
*/

const username = 'jonas';
const age = 99;
const isSunShining = true; //kintamasis klausimo forma
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('Kaip nenaudoti:', true + true); //true = 1, false = 0

console.log('-------------');
console.log(true && true);// true
console.log(true && false);// false aplink && false = all false
console.log(false && true);// false
console.log(false && false);// false

//mergina
//kada eisiu i pasimatyma?

const isBeautiful = true;
const isYoung = true;
const isRich = true;

const willIGoTo = isBeautiful && isYoung && isRich;
console.log('>>>', willIGoTo); // && privalo visi true

//vaikinas
//ar eisiu i pasimatyma?

const isBeautiful2 = true;
const isYoung2 = false;
const isRich2 = false;

const willIGoTo2 = isBeautiful2 || isYoung2 || isRich2;
console.log('>>>', willIGoTo2); // || or tinka nors vienas true

console.clear();

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);// true
console.log(true || false);// true
console.log(false || true);// true
console.log(false || false);// false

console.clear();
console.log(true && true || false);// true && priority?
console.log(true && false || true);//true
console.log(true && false || false);//false

console.log('------------');

console.log(true || true && true);//true
console.log(true || true && false);//false, nes pirmenybe && poto ||?

/*
visas imanomas kombinacijos su 4 booleanais 128
*/
console.log(true && true && true && true);
console.log(true && true && true && false);

console.log(true && true && true || true);
console.log(true && true && true || false);

console.clear();
console.log(!true); // false
console.log(!false); // true