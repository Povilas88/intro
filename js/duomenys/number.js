/*
NUMBERS
- sveikieji/desimtainiai (1,2,3/1,1 2,7)
- teigiami/nulis/neigiami teigiamas ir neigiamas 0
- normalus/ ne normalus (begaliniai - ne normalus)

"Ne normalus":
    - Infinity
    - -Infinity
    - NaN (not-a-number) error

Matematiniai operatoriai:
    - aritmetiniai: +, -, /, *, **, %, ++, --
    ** laipsnis
    % liekana
    - priskyrimo +=, -=, /=, *=, **=, %=
    ++, --
*/

// kintamieji const(tipas)


const pirmas = 5;
const antras = 7;
const trecias = -2.727;
const nulis = 0;

const sum = pirmas+antras

const string1 = "55" // raidines reiksmes
const string2 = "b"

console.log(3.1415);
console.log(pirmas);

const suma = pirmas + antras;
console.log(suma);

const skirtumas = pirmas - antras;
console.log(skirtumas);

const sandauga = pirmas * antras;
console.log(sandauga);

const dalmuo1 = pirmas / antras;
const dalmuo2 = antras / pirmas;

const laipsnis1 = pirmas ** antras;
const laipsnis2 = antras ** pirmas;

console.log(2 * 2,2 ** 2);
console.log(2 * 2 * 2,2 ** 3); //pakelta 3 laipsniu
console.log(2 * 2 * 2 * 2,2 ** 4); 

const liekana1 = pirmas % antras;//eiliskumas nesvarbu
console.log(pirmas, '%', antras, '=', liekana1);

const liekana2 = antras % pirmas;
console.log(antras, '%', pirmas, '=', liekana2);

// console.clear();

console.clear();

let pinigine = 0;
console.log(pinigine);

pinigine = 10;
console.log(pinigine);

pinigine = 50;
console.log(pinigine);

console.clear(); // pridejimas

let money = 0; // 0
console.log(money);

money = 5; // 5
console.log(money);

money = money + 5; // ?? = 5 + 5 (10)
console.log(money);

money = money + 5; // 15 = 10 + 5
console.log(money);

// keliant 0 gausi 1
// override be "let/const" money = 200

console.clear();

let x = 1;
x = x+1;
x = x+1;
x = x+1;
x = x+1;

x += 1; // x = x + 1; x += 1
x += 1;

console.log(x);

x **= 10;
console.log(x);

x %= 3;
console.log(x);

console.clear();

let y = 10;
console.log(y);

y += 10 + 10 + 10;// skaiciuoja desinei = priority
console.log(y);

y -= 5 * 4; // (5*4)=40-20=20
console.log(y);

console.clear();

let makaronai = 2;
console.log(makaronai);

makaronai += 2;
console.log(makaronai);

makaronai += 1;
console.log(makaronai);

makaronai ++;//prideda praeita apibrezta kieki (+1)
console.log(makaronai);

makaronai --;// atima 1
console.log(makaronai);

++makaronai;
makaronai++;
makaronai++;
++makaronai;
console.log(makaronai);

console.clear();

let g = 6;
console.log(g);//6
console.log(g++);//6 nes ++ uz kintamojo vyksta po panaudojimo, pirmiau spausdina poto padidina
console.log(++g);// pirmiau padidina po to spausdina