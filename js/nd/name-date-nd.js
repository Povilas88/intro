/*
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
*/

const name = ('Ryan');
const surname = ('Gosling');

const nameLength = name.length;
const surnameLength = surname.length;

if(nameLength < surnameLength){
    console.log(name);
}else{
    console.log(surname);
}

const vardas = ('Jonas');
const pavarde = ('Jonaitis');
const metai = 1996;
const sieMetai = 2024;

const dabarMetu = sieMetai - metai;

console.log(`As esu ${vardas} ${pavarde}. Man yra ${dabarMetu} metai(u).`);