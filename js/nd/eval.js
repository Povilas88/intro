function calc(a, operation, b) {
    if (operation === '+') {
        return a + b;
    }
    if (operation === '-') {
        return a - b;
    }
    if (operation === '*') {
        return a * b;
    }
    if (operation === '/') {
        return a / b;
    }
}

console.log(calc(7, '+', 5));
console.log(calc(7, '-', 5));
console.log(calc(7, '*', 5));
console.log(calc(7, '/', 5));

const sum = (a, b) => a + b;

function diff(a, b) {
    return a - b;
}

function calcObj(n1, operation, n2) {
    const mathFunctions = {
        '+': sum,
        '-': diff,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '**': (a, b) => a ** b,
        '0': () => 0,
    };

    return mathFunctions[operation](n1, n2);
}

console.log(calcObj(7, '+', 5));
console.log(calcObj(7, '-', 5));
console.log(calcObj(7, '*', 5));
console.log(calcObj(7, '/', 5));
console.log(calcObj(7, '**', 5));
console.log(calcObj(7, '0', 5));
console.log(calcObj(7, 0, 5));