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
console.log();

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
console.log();
console.log('Veiksmai su kintamaisiais');
console.log();

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

if (jonasWeight > markasWeight) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (jonasWeight < markasWeight) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (jonasWeight === markasWeight) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (jonasWeight !== markasWeight) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (jonasWeight >= markasWeight) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (jonasWeight <= markasWeight) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

const red = 'raudona';
const blue = 'melyna';
const redSum = red.length;
const blueSum = blue.length;

console.log(redSum);
console.log(blueSum);

if (redSum > blueSum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (redSum < blue) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (redSum === blueSum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (redSum >= blueSum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (redSum <= blueSum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (redSum !== blueSum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

const array10 = [9, 6, 8, 4, 6, 3, 7, 8, 9, 6];
const array8 = [1, 8, 2, 3, 4, 6, 1, 8,];

let array10Sum = array10.length;
console.log(array10Sum);
let array8Sum = array8.length;
console.log(array8Sum);

if (array10Sum > blueSum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (array10Sum < array8Sum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (array10Sum === array8Sum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (array10Sum >= array8Sum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (array10Sum <= array8Sum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

if (array10Sum !== array8Sum) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita kart');
}

/*
Ciklo for panaudojimas

Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    0 … 0
    0 … 4
    0 … 100
    574 … 815
    -50 … 50
    -70 … 30
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
    pvz.: “abcdef” -> “fedcba”
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    0 - 11
    8 - 31
    -18 - 18
rezultatą pateikti tokiu formatu:
    Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
    Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
    Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

console.clear();

console.log();
console.log('Ciklo for panaudojimas');
console.log();

const pirmasSkaicius = 574;
const antrasSkaicius = 815;

let cikloSum = 0;
for (let i = pirmasSkaicius; i <= antrasSkaicius; i++) {
    cikloSum += i;
}
console.log(cikloSum);

console.log();

const raides = 'abcdef';

for (let i = 0; i < raides.length; i++) {
    console.log(i, raides[i]);
}

console.log();
/*
for (let i = 0; i <= raides.length - 1; i++) {
    console.log(i, raides[i]);
}
*/
//reverse 

for (let i = 0; i < raides.length; i++) {
    console.log(i, raides[raides.length - 1 - i]);
}

/*
for (let i = raides.length; i >= 0; i--) {
    console.log(i, raides[i]);
}
*/

console.log();

const pirmasSkaicius1 = -18;
const antrasSkaicius1 = 18;
let dalmuo3 = 0;
let dalmuo5 = 0;
let dalmuo7 = 0;
for (let i = pirmasSkaicius1; i < antrasSkaicius1; i++) {
    if (i % 3 === 0) {
        dalmuo3++
    }
    if (i % 5 === 0) {
        dalmuo5++
    }
    if (i % 7 === 0) {
        dalmuo7++
    }
}
console.log(`Skaičių intervale tarp ${pirmasSkaicius1} ir ${antrasSkaicius1}, besidalijančių be liekanos iš 3 yra ${dalmuo3} vienetai(-u).`)
console.log(`Skaičių intervale tarp ${pirmasSkaicius1} ir ${antrasSkaicius1}, besidalijančių be liekanos iš 5 yra ${dalmuo5} vienetai(-u).`)
console.log(`Skaičių intervale tarp ${pirmasSkaicius1} ir ${antrasSkaicius1}, besidalijančių be liekanos iš 7 yra ${dalmuo7} vienetai(-u).`)

console.clear();
console.log();
console.log('Funkcijos');
console.log();

//1
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

//2
function daugyba(skaicius1, skaicius2) {
    const sum = skaicius1 * skaicius2;
    return sum;
}
console.log(daugyba(5, 9));
console.log(daugyba(6, -9));
console.log(daugyba(0, 9));

console.log();

//3
function skaitmenuKiekisSkaiciuje(skaicius) {
    if (isNaN(skaicius)) {
        return console.log('Pateikta netinkamo tipo reikšmė');
    }
    const kiekis = skaicius.length;
    return console.log(kiekis);

}
skaitmenuKiekisSkaiciuje('781');
skaitmenuKiekisSkaiciuje('abcd');
skaitmenuKiekisSkaiciuje('49875');

console.log();

//4 isarray true
function didziausiasSkaiciusSarase(sarasas) {
    if (sarasas.length === 0) {
        return console.log('Pateiktas sąrašas negali būti tuščias.');
    }
    else if (Array.isArray(sarasas) === false) {
        return console.log('Pateikta netinkamo tipo reikšmė.');
    }
    else {
        const maxnumber = Math.max(...sarasas); //...?
        return console.log(maxnumber);
    }
}
didziausiasSkaiciusSarase([1]);
didziausiasSkaiciusSarase([1, 2, 3]);
didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]);
didziausiasSkaiciusSarase([69, 69, 69, 69, 66]);
didziausiasSkaiciusSarase([-1, -2, -3, -4, -5]);
didziausiasSkaiciusSarase('pomidoras');
didziausiasSkaiciusSarase([]);

console.log();

//5
function isrinktiRaides(tekstas, raide) {
    if (isNaN(tekstas) === false) {
        return console.log('Pirmasis kintamasis yra netinkamo tipo.');
    }
    else if (tekstas === 0 && tekstas.length > 100) {
        return console.log('Pirmojo kintamojo reikšmė yra netinkamo dydžio.');
    }
    else if (isNaN(raide) === true) {
        return console.log('Antrasis kintamasis yra netinkamo tipo.');
    }
    else if (raide <= 0) {
        return console.log('Antrasis kintamasis turi būti didesnis už nulį.');
    }
    else if (raide >= tekstas.length) {
        return console.log('Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.');
    }
    else {
        let alternate = tekstas;
        for (i = raide; i <= tekstas.length; i += raide) {
            process.stdout.write((alternate[i - 1]));
            //console.log(alternate[i - 1]);
        }
    }
}

isrinktiRaides('abcdefg', 2);
console.log();
isrinktiRaides('abcdefghijkl', 3);
console.log();
isrinktiRaides('abc', 0);
isrinktiRaides('abc', 4);
isrinktiRaides(1561, 2);
console.log();
//console.clear();

//6
function dalyba(pirmas, antras) {
    if (isNaN(pirmas) === true || isNaN(antras) === true) {
        return console.log('Iveskite skaicius');
    }
    else if (pirmas === 0 || antras === 0) {
        return console.log('Dalyba is 0 negalima');
    }
    else {
        const atsakymas = pirmas / antras;
        console.log(atsakymas);
    }
}

dalyba('p', 2);
dalyba('p', 'p');
dalyba(20, 10);
dalyba(20, 0);
dalyba(45, 8);
dalyba(0, 8);
dalyba(0, 'p');