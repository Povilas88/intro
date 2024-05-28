// [1, 2, 3] -> [2, 4, 6]

function double(list) {
    const result = [];

    for (const item of list) {
        result.push(item * 2);
    }

    return result;
}

function triple(list) {
    const result = [];

    for (const item of list) {
        result.push(item * 3);
    }

    return result;
}

const a1 = [1, 2, 3];
const a2 = [10, 2, 8, 4, 6];

console.log(a1, double(a1));
console.log(a2, double(a2));

console.log(a1, triple(a1));
console.log(a2, triple(a2));

function map(list, transformFunc) {
    const result = [];

    for (const item of list) {
        result.push(transformFunc(item));
    }

    return result;
}

console.log(map(a1, n => n * 2));
console.log(map(a2, n => n * 3));

console.log(map(a1, n => 1));
console.log(map(a2, n => 0));

console.log(map(a2, n => n + 1));
console.log(map(a2, n => (2 * n + 1) % 10));

console.log('--------------------')
console.log(a1);
console.log(a1.map(n => n * 2));

console.log(a2);
console.log(a2.map(n => n * 3));

console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.length));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s[0]));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.charAt(s.length - 1)));

const firstSymbol = s => s[0];
const lastSymbol = s => s[s.length - 1];

console.log(['Labas', 'rytas', 'Lietuva'].map(firstSymbol));
console.log(['Labas', 'rytas', 'Lietuva'].map(lastSymbol));
console.clear();

const marks = [10, 2, 8, 4, 6];

const updatedMarks = marks.map(n => n + 1 > 10 ? 10 : n + 1);
console.log(updatedMarks);

function increaseMarks(mark) {
    if (mark === 10) {
        return 10;
    }

    return mark + 1;
}

const updatedMarks2 = marks.map(increaseMarks);
console.log(updatedMarks2);
console.clear();

const randomNumbers = [10, -3, 3.14, 5, 777, -13, -2.727];

const positiveNumbers = randomNumbers.filter(n => n >= 0);
console.log(positiveNumbers);

const negativeNumbers = randomNumbers.filter(n => n < 0);
console.log(negativeNumbers);

const integerNumbers = randomNumbers.filter(n => n % 1 === 0);
console.log(integerNumbers);

const decimalNumbers = randomNumbers.filter(n => n % 1 !== 0);
console.log(decimalNumbers);

console.clear();

const randomData = [0, 10, NaN, Infinity, - 3, 'labas', 3.14, true, 5, [], 777, -13, {}, undefined, -2.727];

// teigiami sveikieji skaiciai
// ne neigiami sveikieji skaiciai
const tss = randomData                      //15
    .filter(n => Number.isInteger(n))       //6
    .filter(n => n >= 0);

console.log(tss);

const tss2 = randomData                         //15
    .filter(n => typeof n === 'number')         //15
    .filter(n => isFinite(n))                   //10
    .filter(n => n >= 0)                        //6
    .filter(n => n % 1 === 0);                  //5

console.log(tss2);

const tss3 = randomData                             //15
    .filter(n => Number.isInteger(n) && n >= 0);    //15

console.log(tss3);