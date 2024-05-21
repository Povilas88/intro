//Lario and Muigi Pipe Problem
console.log('Lario and Muigi Pipe Problem');


function pipeFix(numbers) {
    let num = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) { // numbers[numbers.length - 1] iki paskutinto array elemento
        num.push(i)
    }
    return num
}
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
// Array.from({length: numbers.slice(-1) - numbers[0] + 1},(_,index) => index + numbers[0])

//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
/*
String.prototype.toAlternatingCase = function () {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            result += this[i].toLowerCase()
        } else {
            result += this[i].toUpperCase()
        }
    }
    return result
}
*/

//Count Odd Numbers below n
console.log('\nCount Odd Numbers below n');
function oddCount(n) {
    let numbers = [];
    let arr2 = []
    for (i = 1; i < n; i++) {
        numbers.push(i)
    }
    let a = numbers
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            arr2.push(a[i]);
        }
    }
    return arr2.length
}
console.log(oddCount(15))

// function oddCount(n){
// return Math.floor(n / 2);
// }

/*
function describeAge(age) {
    if (age <= 12) {
        return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
        return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
        return "You're a(n) adult";
    } else {
        return "You're a(n) elderly";
    }
}
*/

//Be Concise I - The Ternary Operator
function describeAge(age) {
    const a = (age) <= 12 ? 'kid' : (age) >= 13 && (age) <= 17 ? 'teenager' : age >= 18 && age <= 64 ? 'adult' : 'elderly'; return `You're a(n) ${a}`
}

console.log(describeAge(13));

//Create a phone number
console.log('\nCreate a phone number');
function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), " = (123) 456-7890");

//Who Likes it
console.log('\nWho likes it\n');
function likes(names) {
    const a = names.length === 1 ? `${names} likes this`
        : names.length === 2 ? `${names[0]} and ${names[1]} like this`
            : names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`
                : names.length >= 4 ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
                    : "no one likes this";
    return a;
}
console.log(likes([])),// 'no one likes this');
    console.log(likes(['Peter'])),// 'Peter likes this');
    console.log(likes(['Jacob', 'Alex'])),// 'Jacob and Alex like this');
    console.log(likes(['Max', 'John', 'Mark'])),// 'Max, John and Mark like this');
    console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))// 'Alex, Jacob and 2 others like this');

//No zeros for heros
console.log('\nNo zeros for heros\n');
function noBoringZeros(n) {
    let number = n.toString()
    for (let i = 0; i < 10; i++) {
        if (number.endsWith('0') && n !== 0) {
            number = number.slice(0, -1)
        }
    }
    return number
}

console.log(noBoringZeros(1450))
console.log(noBoringZeros(960000))
console.log(noBoringZeros(-1050))
console.log(noBoringZeros(0))