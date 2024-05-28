//Missing number in Unordered Arithmetic Progression
function find(seq) {
    let max = seq[0];
    let min = seq[seq.length - 1];

    for (let num of seq) {
        if (num < min) {
            min = num;
        } else if (num > max) {
            max = num;
        }
    }
    let diff = (max - min) / seq.length;
    let set = new Set(seq);

    for (let i = min + diff; i < max; i += diff) {
        if (!set.has(i)) {
            return i;
        }
    }
}

//Moving Zeros To The End
console.log('\nMoving Zeros To The End\n');
function moveZeros(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }
    return arr
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))

//https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript
console.log('\nThey say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?\n');
function isOpposite(s1, s2) {
    const split1 = s1.split('');
    const split2 = s2.split('');

    if (split1.length === 0
        || split2.length === 0
        || split1.length !== split2.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        if (split1[i] === split2[i]) {
            return false;
        }
    }

    return true;
}

console.log(isOpposite("ab", "AB"), true)
console.log(isOpposite("aB", "Ab"), true)
console.log(isOpposite("aBcd", "AbCD"), true)
console.log(isOpposite("aBcde", "AbCD"), false)
console.log(isOpposite("AB", "Ab"), false)
console.log(isOpposite("", ""), false)

//Replace With Alphabet Position
console.log('\nReplace With Alphabet Position\n')
function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const split = alphabet.split('');
    const low = text.toLowerCase().split('');
    let result = [];

    for (let i = 0; i < low.length; i++) {
        for (let j = 0; j < split.length; j++) {
            if (low[i] === split[j]) {
                result.push(j + 1);
            }
        }
    }
    return result.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))

//Persistent Bugger.
console.log('\nPersistent Bugger.\n');
function persistence(num) {
    let result = 0;
    let numStr = num.toString();

    if (numStr.length === 1) {
        return 0;
    }
    while (numStr.length > 1) {
        num = numStr.split('').reduce((a, b) => a * parseInt(b), 1);
        numStr = num.toString();
        result++
    }
    return result;
}

console.log(persistence(39));

//Convert string to camel case
console.log('\nConvert string to camel case\n');
function toCamelCase(str) {
    const split1 = str.split('_').join(' ');
    const split2 = split1.split('-').join(' ');
    const split3 = split2.split(' ');

    if (str === '') {
        return '';
    }
    for (let i = 0; i < split3.length; i++) {
        split3[i] = split3[i].charAt(0).toUpperCase() + split3[i].slice(1);// replace first character
        if (split3[0].charAt(0) !== str.charAt(0)) {
            split3[0] = split3[0].charAt(0).toLowerCase() + split3[0].slice(1);
        }
    }
    return split3.join('')
}

console.log(toCamelCase("the_stealth_warrior"));

/*
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
*/