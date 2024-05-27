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