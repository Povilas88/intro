const a = [1, -2, -50, 99, 6, 89, 51, 48, -23]

function maxValue(arr) {
    let biggestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNumber) {
            biggestNumber = arr[i]
        }
    }
    return biggestNumber;
}

function minValue(arr) {
    let lowestNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowestNumber) {
            lowestNumber = arr[i]
        }
    }
    return lowestNumber;
}

function largestNegativeNumber(arr) {
    let negative = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > negative && arr[i] < 0) {
            negative = arr[i];
        }
    }
    return negative;
}

function n50(arr) {
    let n50 = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n50 && arr[i] < 50) {
            n50 = arr[i];
        }
    }
    return n50;
}

function sumPos(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];;
        }
    }
    return sum;
}

function sumMin(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum += arr[i];;
        }
    }
    return sum;
}

function square(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i] ** 2;
        }
    }
    return sum;
}

console.log(maxValue(a));
console.log(minValue(a));
console.log(largestNegativeNumber(a));
console.log(n50(a));
console.log(sumPos(a));
console.log(sumMin(a));
console.log(square(a));