const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
];

// Surasti ilgiausia stringą;
function longestString(arr) {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > string.length) {
            string = arr[i]
        }
    }
    return string;
}

// Surasti trumpiausia stringą;
function findShortestString(arr) {
    let shortest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }

    return shortest;
}

console.log(longestString(B));

// Surasti stringą, kuris prasideda “a” raide;
const stringsStartingWithA = [];

for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(0) === 'a') {
        stringsStartingWithA.push(array[i]);
    }
}

// Surasti stringą su daugiausia žodžių;
function findStringWithMostWords(arr) {
    let maxWords = 0;
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        const words = arr[i].split(' ').length;
        if (words > maxWords) {
            maxWords = words;
            result = arr[i];
        }
    }
    return result;
}
// Surasti stringą su mažiausiai žodžių; --------------------

function findShortestString(arr) {
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].split(' ').length < shortest.split(' ').length) {
            shortest = arr[i];
        }
    }
    return shortest;
}


// Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;

function findShortestString(arr) {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].split(' ').length > 4) {
            count++
        }
    }
    return count;
}

// Suskaičiuoti kiek masyve yra žodžių;

function countWordsInArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].split(' ').length;
    }
    return sum;
}

const concatenatedString = stringArray.join(" ");
const wordCount = concatenatedString.split(" ").length;

// Suskaičiuoti visas ‘s’ raides;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    for (let j = 0; j < word.length; j++) {
        if (word[j] === 's') {
            count++;
        }
    }
}

// Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);


let spaceCount = 0;
for (let i = 0; i < stringArray.length; i++) {
    const currentString = stringArray[i];
    for (let j = 0; j < currentString.length; j++) {
        if (currentString[j] === ' ') {
            spaceCount++;
        }
    }
}

// Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);

let longestWord = '';

for (let sentence of sentences) {
    const words = sentence.split(' ');
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
}

function allS(array) {
    const b = B.join(',')
    let totalallS = 0;

    for (let i = 0; i < b.length; i++) {
        if (b[i].toLowerCase() === 's')
            totalallS++
    }
    return totalallS;
}

console.log(allS(B));