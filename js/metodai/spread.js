/*
Spread operatorius
Destrukturizavimas
*/

// Value by reference
const a = [1, 2, 3];
const b = a;

console.log(a);
console.log(b);

a[0] = 44;
console.log(a);
console.log(b);

b[2] = 777;
console.log(a);
console.log(b);

let c = 7;
let d = c;

console.log(c, d);

c = 9999999;
console.log(c, d);

d = 11111;
console.log(c, d);

console.clear();

// ...Spread array

const e = [1, 2, 3];
const f = [...e];
console.log(e, f);

e[0] = 111;
console.log(e, f);

f[2] = 999999;
console.log(e, f);

const g = [0, ...e, 4, 5];
console.log(g);

const h = [55, ...e, 51, ...e, 452, ...e, 777];
console.log(h);

console.clear();
// ...spread object

const obj1 = { name: 'Jonas', age: 99 };
const obj2 = obj1;

obj1.name = 'Maryte';
console.log(obj1);
console.log(obj2);

obj2.age = 88;
console.log(obj1);
console.log(obj2);

const obj3 = { brand: 'Audi', model: '80' };
const obj4 = { ...obj3 };

console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo';
console.log(obj3);
console.log(obj4);

obj4.model = 'S40';
console.log(obj3);
console.log(obj4);
console.clear();

const person = {
    name: 'Petras',
    age: 77,
};

const address = {
    city: 'Miestas',
    street: 'Gatve 123',
    number: 45,
};

const fullPersonDetails = {
    id: 111111111,
    phone: 8612345678,
    ...person,
    ...address,
    name: 'Ona',
    number: 666,
};
console.log(fullPersonDetails);
console.log(fullPersonDetails.id);
console.log(fullPersonDetails.name);
console.log(fullPersonDetails.age);

const str = 'abc';
const arr = [
    'a',    // 0
    'b',    // 1
    'c',    // 2
];
const obj = {
    0: 'a',
    1: 'b',
    2: 'c',
};

console.log(str[0], arr[0], obj[0]);

const k = [1, 2, 3];
const l = { name: 'Ona', age: 66 };

// const o = [...k, ...l];
// console.log(o);

const p = { ...k, ...l };
console.log(p);