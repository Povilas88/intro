/*
STRING - tekstas, tekstiniu simboliu grandinele
inicijavimas: '(vienguba)', "(dviguba)"
*/

const name = 'Jonas'; //nubrauktas name
console.log(name);

const name2 = "Maryte"; 
console.log(name2);

const sakinys = 'Labas rytas, Lietuva!'; 
console.log(sakinys);

//Vienguba (') // rasome su "" noredami atspausdinti '
const kabutes1 = "Vienguba (') kabute."; 
console.log(kabutes1);

const kabutes2 = 'Dviguba (") kabute.'; 
console.log(kabutes2);


const personName = 'Chuck';
const personSurname = 'Norris';
const fullname = personName + ' ' + personSurname;// padaro tarpa
console.log(fullname);

//Vienguba (') ir 
//                dviguba (") kabutes.

const kabutes3 = "Vienguba (') ir " + 'dviguba (") kabutes';// tarpas teksto dalis
console.log(kabutes3);

const kabutes3_1 = 'Vienguba (\') ir dviguba (") kabutes';// \ 
const kabutes3_2 = "Vienguba (') ir dviguba (\") kabutes";

console.log(kabutes3_1);
console.log(kabutes3_2);

console.clear();
/*
Pinigines turinys : 0;
Piginine papildyta: 10;
Pinigines turinys : 10;
Pinigine papildyta: 90;
Pinigines turinys : 100;
*/

const likutis1 = 'Pinigines turinys: ';
const likutis2 = 'Pinigine papildyta: ';
let pinigine = 0;
let pinigine1 = 10;
let pinigine2 = 90;
console.log(likutis1 + pinigine);
pinigine += pinigine1;
console.log(likutis2 + pinigine1);
console.log(likutis1 + pinigine);
pinigine += pinigine2;
console.log(likutis2 + pinigine2);
console.log(likutis1 + pinigine);