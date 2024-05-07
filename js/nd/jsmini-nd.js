/*
Kintamųjų inicijavimas

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
*/
console.log('Kintamųjų inicijavimas');

const a = 1;
console.log(a);
const b = 2;
console.log(b);
const c = 3;
console.log(c);

const a1 = 'Vienas';
console.log(a1);
const a2 = 'Du';
console.log(a2);
const a3 = 'Trys';
console.log(a3);

const sarasas1 = [1, 2, 3, 4, 5,];
console.log(sarasas1);
const sarasas2 = [6, 2, 6, 4, 3,];
console.log(sarasas2);
const sarasas3 = [4, 7, 2, 9, 5,];
console.log(sarasas3);

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'White'];
console.log(colors);
const trees = ['Oak', 'Willow', 'Birch', 'Evergreen', 'Palm'];
console.log(trees)
const abc = ['a', 'b', 'c', 'd', 'e']
console.log(abc);

/*
Veiksmai su kintamaisiais

Susumuoti visus skaičiaus tipo kintamuosius
    Rezultatą išvesti į console
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    Rezultatą išvesti į console
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
    Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

console.log('Veiksmai su kintamaisiais');

let index = 0;
let sum1 = 0;
    sum1 += sarasas1[index++];
    sum1 += sarasas1[index++];
    sum1 += sarasas1[index++];
    sum1 += sarasas1[index++];
    sum1 += sarasas1[index++];

let index1 = 0;
let sum2 = 0;
    sum2 += sarasas2[index1++];
    sum2 += sarasas2[index1++];
    sum2 += sarasas2[index1++];
    sum2 += sarasas2[index1++];
    sum2 += sarasas2[index1++];

let index2 = 0;
let sum3 = 0;
    sum2 += sarasas3[index2++];
    sum2 += sarasas3[index2++];
    sum2 += sarasas3[index2++];
    sum2 += sarasas3[index2++];
    sum2 += sarasas3[index2++];

const sum = a + b + c + sum1 + sum2 + sum3;

console.log(sum);

console.log(a1 + ' ' + a2 + ' ' + a3);

let index5 = 0;
    let summ1 = 0;
    summ1 += sarasas1[index5++];
    summ1 -= sarasas1[index5++];
    summ1 += sarasas1[index5++];
    summ1 -= sarasas1[index5++];
    summ1 += sarasas1[index5++];

console.log('1 Sarasas sum: ', summ1);

let index6 = 0;
    let summ2 = 0;
    summ2 += sarasas2[index6++];
    summ2 -= sarasas2[index6++];
    summ2 += sarasas2[index6++];
    summ2 -= sarasas2[index6++];
    summ2 += sarasas2[index6++];

console.log('2 Sarasas sum: ', summ2);

let index7 = 0;
    let summ3 = 0;
    summ3 += sarasas3[index7++];
    summ3 -= sarasas3[index7++];
    summ3 += sarasas3[index7++];
    summ3 -= sarasas3[index7++];
    summ3 += sarasas3[index7++];

console.log('3 Sarasas sum: ', summ3);

colors.reverse();

trees.reverse();

abc.reverse();

const stringSum = colors.join(', ') + ', ' + trees.join(', ') + ', ' + abc.join(', ');
console.log(stringSum);

/*
Kintamųjų palyginimas
Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus
Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus
*/

console.log();
console.log('Kintamuju palyginimas');
console.log();

const jonasWeight = 55;
const markasWeight = 75;

if (jonasWeight > markasWeight){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (jonasWeight < markasWeight){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (jonasWeight === markasWeight){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (jonasWeight !== markasWeight){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (jonasWeight >= markasWeight){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (jonasWeight <= markasWeight){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

const red = 'raudona';
const blue = 'melyna';
const redSum = red.length;
const blueSum = blue.length;

console.log(redSum);
console.log(blueSum);

if (redSum > blueSum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (redSum < blue){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (redSum === blueSum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (redSum >= blueSum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (redSum <= blueSum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (redSum !== blueSum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

const array10 = [9, 6, 8, 4, 6, 3, 7, 8, 9, 6];
const array8 = [1, 8, 2, 3, 4, 6, 1, 8,];

let array10Sum = array10.length;
console.log(array10Sum);
let array8Sum = array8.length;
console.log(array8Sum);

if (array10Sum > blueSum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (array10Sum < array8Sum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (array10Sum === array8Sum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (array10Sum >= array8Sum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (array10Sum <= array8Sum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}

if (array10Sum !== array8Sum){
    console.log('Pomidoras');
} else{
    console.log('Bandykite kita kart');
}