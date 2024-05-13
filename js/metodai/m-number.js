/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/
//iesko skaitmenu
console.log('Number.isFinite()');
console.log(Number.isFinite(152614));
console.log(Number.isFinite(-152614));
console.log(Number.isFinite(0));
console.log(Number.isFinite(15.3659));
console.log(Number.isFinite(-15.3659));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(null));// nera number

console.log('---------------');
console.log('isFinite()');

console.log(isFinite(152614));
console.log(isFinite(-152614));
console.log(isFinite(0));
console.log(isFinite(15.3659));
console.log(isFinite(-15.3659));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));
console.log(isFinite(null));//prilyginamas 0

console.log('---------------');
console.log('isNaN()');

console.log(isNaN(152614));
console.log(isNaN(-152614));
console.log(isNaN(0));
console.log(isNaN(15.3659));
console.log(isNaN(-15.3659));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(NaN));
console.log(isNaN(null));

console.log('---------------');
console.log('parseInt()');

//narsyklese viskas yra text
console.log(parseInt('87'));
console.log(parseInt('-87'));
console.log(parseInt('3.14'));//tiktais sveikieji skaiciai
console.log(parseInt('-3.14'));
console.log(parseInt('NaN'));
console.log(parseInt('Infinity'));
console.log(parseInt('undefined'));
console.log(parseInt('grybu karas'));
console.log(parseInt(''));
console.log(parseInt('123abc'));
console.log(parseInt('abc123'));
//skaito is kaires i desine iki pirmo netinkamo simbolio

// desimtainiai skaiciai
console.log('---------------');
console.log('parseFloat()');
console.log(parseFloat('87'));
console.log(parseFloat('-87'));
console.log(parseFloat('3.14'));//tiktais sveikieji skaiciai
console.log(parseFloat('-3.14'));
console.log(parseFloat('NaN'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-Infinity'));
console.log(parseFloat('undefined'));
console.log(parseFloat('grybu karas'));
console.log(parseFloat(''));
console.log(parseFloat('123abc'));
console.log(parseFloat('abc123'));
console.log(parseFloat('1234e5'));
console.log(parseFloat('1.234e5'));
console.log(parseFloat('7e5'));

//e = skaiciaus standartine israiska 100 -> 1 * 10^2 -> 1e2
// 1.000.000 -> 1 * 10^6 -> 1e6
// 125 -> 1.25 * 10^2 -> 1.25e2
// 0.001 -> 1*10^-3 -> 1e-3
// 0.00125 -> 1*10^-3 -> 1.25e-3 // 1 sveikasis skaicius visada

console.log('---------------');
console.log('Number.toFixed()');

const c = 5.00;
const cc = 5.1485;
// 5.00

console.log(c.toFixed(2));//0<=20 narsykleje, 100 terminale
console.log(parseFloat(cc.toFixed(20)));