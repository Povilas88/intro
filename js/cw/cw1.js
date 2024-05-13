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
