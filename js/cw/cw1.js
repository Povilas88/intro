//array plus array
function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    let sum2 = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
    }
    return sum1 + sum2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

console.log();
console.log('------------');
// convertina numbers i array
function rowSumOddNumbers(n) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(rowSumOddNumbers(42, 7000));
console.log();

//convert string to array with .split and print out smallest word count
function shortestWord(string) {
    let len = [];
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        len.push(words[i].length);
    }
    return Math.min(...len);
}

console.log(shortestWord('bitcoin take over the world maybe who knows perhaps'));
console.log(shortestWord("Let's travel abroad shall we"));

console.clear();
console.log('------------');
//Square(n) Sum
function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }
    return sum;
}

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));

// function squareSum(numbers) {
//     return numbers.reduce(function (sum, n) {
//         return (n * n) + sum;
//     }, 0)
// }
console.log();

//boolean filter true
function countSheeps(sheep) {
    const trueCount = sheep.filter(Boolean).length
    return trueCount;
}

console.log(countSheeps([[]]));
console.log(countSheeps([undefined]));
console.log(countSheeps([null]));
console.log(countSheeps([false]));
console.log(countSheeps([true]));
console.log(countSheeps([undefined, null, false, true]));
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]));
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));

/*
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
*/
console.clear();
console.log('------------');
function addLength(str) {
    const words = str.split(" ");
    const length = words.map((w) => w.length);
    const finalArray = [];
    for (let i = 0; i < words.length; i++) {
        finalArray.push(words[i] + ' ' + length[i]);
    }
    return finalArray;
}
function addLength2(str) {
    return str.split(" ").map(word => `${word} ${word.length}`)
}
console.log(addLength('apple ban'));
console.log(addLength2('you will win'));

console.clear()
console.log('------------');
//sum positives
function positiveSum(arr) {
    let results = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            results += arr[i];
        }
    }
    return results;
}

console.log(positiveSum([1, -2, 3, 4, 5]))
console.log(positiveSum([]))
console.clear();
console.log('------------');
//string split
function solution(str) {
    let result = [];
    if (str.length % 2 !== 0) {
        str += '_';
    } for (let i = 0; i < str.length; i += 2) {
        result.push(str.substring(i, i + 2));
    }
    return result
}
console.log(solution("abcdef"));
console.log(solution("abcdefg"));

//reverse word
function solution1(str) {
    let words = str.split('')
    return words.reverse().join('')
}
console.log(solution1('world'));

console.clear()
console.log('------------');
//unique in order + split
var uniqueInOrder = function (iterable) {
    let results = '';
    if (typeof iterable === 'string') {
        for (let i = 0; i < iterable.length; i++) {
            if (iterable[i] !== iterable[i + 1])
                results += iterable[i];
        } return results.split('');
    } else if (!iterable.some(i => !Number.isInteger(i))) {
        for (let i = 0; i < iterable.length; i++) {
            if (iterable[i] !== iterable[i + 1])
                results += iterable[i];
        } return results.split('').map(Number);
    } else if (!iterable.some(i => !Number.isInteger(i)) === false) {
        for (let i = 0; i < iterable.length; i++) {
            if (iterable[i] !== iterable[i + 1])
                results += iterable[i];
        } return results.split('');
    }
}
// let x = [123, 234, 345];
// let y = [123, 'invalid', 345];
// let z = [123, 234.5, 345];
// !x.some(i => !Number.isInteger(i))  // true
// !y.some(i => !Number.isInteger(i))  // false
// !z.some(i => !Number.isInteger(i))  // false

/*
var uniqueInOrder = function (iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i - 1])
}
*/

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
console.log(uniqueInOrder(['a', 'b']))
console.log('------------');
//Enumerable Magic #4 - True for None?
function none(arr, fun) {
    return !arr.some(fun)
}
console.log(none([1, 2, 3, 4, 5], function (item) { return item > 5 }), true)
console.log(none([1, 2, 3, 4, 5], function (item) { return item > 4 }), false)
console.log('------------');
//Convert number to reversed array of digits
function digitize(n) {
    let array = n.toString().split('');
    let reverse = array.reverse();
    return reverse.map(Number)
}
//return String(n).split('').map(Number).reverse()
console.log(digitize(35231), [1, 3, 2, 5, 3]);
console.log(digitize(0), [0]);
console.log('------------');
//get character from ASCII Value
function getChar(c) {
    return String.fromCharCode(c)
}
console.log(getChar(55));

console.clear()
console.log('------------');
//What is between?
function between(a, b) {
    let array = [];
    for (let i = a; i <= b; i++) {
        array += i + ' ';
    }
    return array.split(' ').map(Number).slice(0, -1)
}
/*
function between(a, b) {
  // your code here
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}
*/
console.log(between(1, 4));
console.log(between(-2, 2));

console.clear();
console.log('------------');
//Number of People in the Bus
var number = function (busStops) {
    let peopleOnBus = 0;
    for (let i = 0; i < busStops.length; i++) {
        peopleOnBus += busStops[i][0] - busStops[i][1];
    }
    return peopleOnBus
}
console.log(number([[10, 0], [3, 5], [5, 8]])); //5
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])); //17
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])) //21
console.log(number([[0, 0]])) //0

console.clear();
console.log('The Hashtag Generator');
console.log();

//The Hashtag Generator
function generateHashtag(str) {
    let words = str.split(' ')
    let upper = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    if (words.join('').length >= 140 || words.join('').length === 0) {
        return false;
    } for (let i = 0; i < words.length; i++) {
        words[i] += '';
    } return '#' + upper.join('');
}

console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))//"#CodeWars"

console.log();

