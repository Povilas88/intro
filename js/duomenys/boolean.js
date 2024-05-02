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

console.log(!true); // false
console.log(!false); // true

console.clear();

/*
ND visas imanomas kombinacijos su 4 booleanais 128
*/
let a = 1;
console.log(a,true && true && true && true);
a += 1;
console.log(a,true && true && true && false);
a += 1;
console.log(a,true && true && false && false);
a += 1;
console.log(a,true && false && false && false);
a += 1;
console.log(a,false && false && false && false);
a += 1;
console.log(a,false && true && true && true);
a += 1;
console.log(a,false && false && true && true);
a += 1;
console.log(a,false && false && false && true);
a += 1;
console.log(a,true && false && true && false);
a += 1;
console.log(a,false && true && false && true);
a += 1;
console.log(a,true && false && false && true);
a += 1;
console.log(a,false && true && true && false);
a += 1;
console.log(a,false && false && true && false);
a += 1;
console.log(a,false && true && false && false);
a += 1;
console.log(a,true && false && true && true);
a += 1;
console.log(a,true && true && false && true);
// 16
a += 1;
console.log(a,true && true && true || true);
a += 1;
console.log(a,true && true && true || false);
a += 1;
console.log(a,true && true && false || false);
a += 1;
console.log(a,true && false && false || false);
a += 1;
console.log(a,false && false && false || false);
a += 1;
console.log(a,false && true && true || true);
a += 1;
console.log(a,false && false && true || true);
a += 1;
console.log(a,false && false && false || true);
a += 1;
console.log(a,true && false && true || false);
a += 1;
console.log(a,false && true && false || true);
a += 1;
console.log(a,true && false && false || true);
a += 1;
console.log(a,false && true && true || false);
a += 1;
console.log(a,false && false && true || false);
a += 1;
console.log(a,false && true && false || false);
a += 1;
console.log(a,true && false && true || true);
a += 1;
console.log(a,true && true && false || true);
// 32
a += 1;
console.log(a,true && true || true && true);
a += 1;
console.log(a,true && true || true && false);
a += 1;
console.log(a,true && true || false && false);
a += 1;
console.log(a,true && false || false && false);
a += 1;
console.log(a,false && false || false && false);
a += 1;
console.log(a,false && true || true && true);
a += 1;
console.log(a,false && false || true && true);
a += 1;
console.log(a,false && false || false && true);
a += 1;
console.log(a,true && false || true && false);
a += 1;
console.log(a,false && true || false && true);
a += 1;
console.log(a,true && false || false && true);
a += 1;
console.log(a,false && true || true && false);
a += 1;
console.log(a,false && false || true && false);
a += 1;
console.log(a,false && true || false && false);
a += 1;
console.log(a,true && false || true && true);
a += 1;
console.log(a,true && true || false && true);
// 48
a += 1;
console.log(a,true || true && true && true);
a += 1;
console.log(a,true || true && true && false);
a += 1;
console.log(a,true || true && false && false);
a += 1;
console.log(a,true || false && false && false);
a += 1;
console.log(a,false || false && false && false);
a += 1;
console.log(a,false || true && true && true);
a += 1;
console.log(a,false || false && true && true);
a += 1;
console.log(a,false || false && false && true);
a += 1;
console.log(a,true || false && true && false);
a += 1;
console.log(a,false || true && false && true);
a += 1;
console.log(a,true || false && false && true);
a += 1;
console.log(a,false || true && true && false);
a += 1;
console.log(a,false || false && true && false);
a += 1;
console.log(a,false || true && false && false);
a += 1;
console.log(a,true || false && true && true);
a += 1;
console.log(a,true || true && false && true);
// 64
a += 1;
console.log(a,true && true || true || true);
a += 1;
console.log(a,true && true || true || false);
a += 1;
console.log(a,true && true || false || false);
a += 1;
console.log(a,true && false || false || false);
a += 1;
console.log(a,false && false || false || false);
a += 1;
console.log(a,false && true || true || true);
a += 1;
console.log(a,false && false || true || true);
a += 1;
console.log(a,false && false || false || true);
a += 1;
console.log(a,true && false || true || false);
a += 1;
console.log(a,false && true || false || true);
a += 1;
console.log(a,true && false || false || true);
a += 1;
console.log(a,false && true || true || false);
a += 1;
console.log(a,false && false || true || false);
a += 1;
console.log(a,false && true || false || false);
a += 1;
console.log(a,true && false || true || true);
a += 1;
console.log(a,true && true || false || true);
// 80
a += 1;
console.log(a,true || true || true && true);
a += 1;
console.log(a,true || true || true && false);
a += 1;
console.log(a,true || true || false && false);
a += 1;
console.log(a,true || false || false && false);
a += 1;
console.log(a,false || false || false && false);
a += 1;
console.log(a,false || true || true && true);
a += 1;
console.log(a,false || false || true && true);
a += 1;
console.log(a,false || false || false && true);
a += 1;
console.log(a,true || false || true && false);
a += 1;
console.log(a,false || true || false && true);
a += 1;
console.log(a,true || false || false && true);
a += 1;
console.log(a,false || true || true && false);
a += 1;
console.log(a,false || false || true && false);
a += 1;
console.log(a,false || true || false && false);
a += 1;
console.log(a,true || false || true && true);
a += 1;
console.log(a,true || true || false && true);
// 96
a += 1;
console.log(a,true || true && true || true);
a += 1;
console.log(a,true || true && true || false);
a += 1;
console.log(a,true || true && false || false);
a += 1;
console.log(a,true || false && false || false);
a += 1;
console.log(a,false || false && false || false);
a += 1;
console.log(a,false || true && true || true);
a += 1;
console.log(a,false || false && true || true);
a += 1;
console.log(a,false || false && false || true);
a += 1;
console.log(a,true || false && true || false);
a += 1;
console.log(a,false || true && false || true);
a += 1;
console.log(a,true || false && false || true);
a += 1;
console.log(a,false || true && true || false);
a += 1;
console.log(a,false || false && true || false);
a += 1;
console.log(a,false || true && false || false);
a += 1;
console.log(a,true || false && true || true);
a += 1;
console.log(a,true || true && false || true);
// 112
a += 1;
console.log(a,true || true || true || true);
a += 1;
console.log(a,true || true || true || false);
a += 1;
console.log(a,true || true || false || false);
a += 1;
console.log(a,true || false || false || false);
a += 1;
console.log(a,false || false || false || false);
a += 1;
console.log(a,false || true || true || true);
a += 1;
console.log(a,false || false || true || true);
a += 1;
console.log(a,false || false || false || true);
a += 1;
console.log(a,true || false || true || false);
a += 1;
console.log(a,false || true || false || true);
a += 1;
console.log(a,true || false || false || true);
a += 1;
console.log(a,false || true || true || false);
a += 1;
console.log(a,false || false || true || false);
a += 1;
console.log(a,false || true || false || false);
a += 1;
console.log(a,true || false || true || true);
a += 1;
console.log(a,true || true || false || true);
//128