// ND: Man reikia atsitiktinio skaiciaus intervale nuo 23 iki 617 imtinai.

// return Math.random() * (max - min // + 1) + min;

const array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * (617 - 23 + 1) + 23))
}

console.log(`${array} 
\nMax array reiksme: ${Math.max(...array)} 
\nMin array reiksme: ${Math.min(...array)}`);