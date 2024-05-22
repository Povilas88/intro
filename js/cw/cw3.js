//Removing Elements
console.log('Removing Elements\n');
function removeEveryOther(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i += 2) {
        results.push(arr[i])
    }
    return results;
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Sum of Digits / Digital Root
console.log('\nSum of Digits / Digital Root\n');
function digitalRoot(n) {
    const a = n.toString().split('');
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += parseInt(a[i]);
    }
    if (sum.toString().length === 2) {
        sum = sum.toString().split('')
        sum = parseInt(sum[0]) + parseInt(sum[1]);
        sum = sum.toString().length === 2 ? sum.toString().split('') : sum
        return sum.length === 2 ? parseInt(sum[0]) + parseInt(sum[1]) : sum
    }
    if (sum.toString().length === 3) {
        sum = sum.toString().split('')
        return parseInt(sum[0]) + parseInt(sum[1]) + parseInt(sum[2]);
    }
    return sum;
}

console.log(digitalRoot(16))//7
console.log(digitalRoot(456))//6
console.log(digitalRoot(555887))//2
console.log(digitalRoot(999999999999))//9

// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }

//Beginner - Lost Without a Map
console.log('\nBeginner - Lost Without a Map\n');
function maps(x) {
    let double = []
    for (let i = 0; i < x.length; i++) {
        double.push(x[i] * 2)
    }
    return double
}

console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4]));

//Expression Matter
console.log('\nExpression Matter\n');
function expressionMatter(a, b, c) {

    const a1 = a * (b + c)
    const b1 = a * b * c
    const c1 = a + b * c
    const d1 = (a + b) * c
    const e1 = a + b + c

    return Math.max(a1, b1, c1, d1, e1)
}

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(1, 1, 1));

//Multiples of 3 or 5
console.log('\nMultiples of 3 or 5\n');
function solution(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if ([i] % 3 === 0 || [i] % 5 === 0)
            sum += i;
    }
    return sum
}

console.log(solution(10));
