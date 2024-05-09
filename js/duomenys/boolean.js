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
/*
string
    - jei tuscias - false
    - jei ne tuscias - true
number
    - jei nulis - false
    - jei ne nulis 0 true
    - jei NaN - false
    - jei infinity - true
    - jei -infinity - true
array
    - jei tuscias - false
    - jei ne tuscias - true
object
    - jei tuscias - true
    - jei ne tuscias - true
undefined - false
null - false
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

if (21526) {
    console.log(true);
} else {
    console.log(false);
}