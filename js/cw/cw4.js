//Training JS #34: methods of Math---pow() sqrt() and cbrt()
console.log('Training JS #34: methods of Math---pow() sqrt() and cbrt()\n');
function cutCube(volume, n) {
    const diff = volume / n;
    const cbrt = Number.isInteger(Math.cbrt(n)) ? Math.cbrt(diff) : false;
    return Number.isInteger(cbrt)
}
console.log(cutCube(27, 27))
console.log(cutCube(512, 8))
console.log(cutCube(512, 64))
console.log(cutCube(50000, 50))
console.log(cutCube(432, 16))
console.log(cutCube(256, 8))
console.log(cutCube(27, 3))
console.log(cutCube(123, 456))
console.log(cutCube(27, 8))

//letterCheck
console.log('\nLetterCheck\n');
function letterCheck(arr) {
    const lowerCase = arr.map(w => w.toLowerCase());
    const str1 = lowerCase[0];
    const str2 = lowerCase[1];
    for (let char of str2) {
        if (str1.indexOf(char) === -1) {
            return false
        }
    }
    return true
}
console.log(letterCheck(["trances", "nectar"]))
console.log(letterCheck(["assert", "staring"]))

//IndexOf Array in Array
console.log('\nIndexOf Array in Array\n');
var searchArray = function (arrayToSearch) {
    let query = [5, 9]
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i].length !== 2 || query.length !== 2 || !Array.isArray(arrayToSearch) || !Array.isArray(query)) {
            throw 'Error';//Error()
        } else {
            if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
                return i;
            }
        }
    }
    return -1
}

console.log(searchArray([[1, 2]]));
console.log(searchArray([[1, 2], [5, 9], [8, 9], [5, 4]]));
console.log(searchArray([[1, 2], [5, 9], [8, 9, 4]]));

//Asterisk it
console.log('\nAsterisk it\n');
function asteriscIt(n) {
    let result = '';
    let split = n.toString().replace(/,/g, '').split('').map(Number);
    for (let i = 0; i < split.length; i++) {
        result += split[i];
        if (split[i] % 2 === 0 && split[i + 1] % 2 === 0) {
            result += '*';
        }
    }
    return result;
}
console.log(asteriscIt(5312708));
console.log(asteriscIt(9682135));
console.log(asteriscIt([1, 4, 64, 68, 67, 23, 1]));

//Halving sum
console.log('\nHalving sum\n');
function halvingSum(n) {
    let sum = 0;
    for (let i = n; i > 0; i = Math.floor(i / 2)) {
        sum += i;
    }
    return sum
}
console.log(halvingSum(25));

//Training JS #18: Methods of String object--concat() split() and its good friend join()
console.log('\nTraining JS #18: Methods of String object--concat() split() and its good friend join()\n');
function splitAndMerge(string, separator) {
    let arr = []
    const a = string.split(' ');
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].split('').join(separator)
        arr.push(a[i]);
    }
    return arr.join(' ');
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));

//Training JS #29: methods of arrayObject---concat() and join()
console.log('\nTraining JS #29: methods of arrayObject---concat() and join()\n');
function bigToSmall(arr) {
    const sort = arr.flat().sort(function (a, b) { return b - a });//descending sort array
    //arr.sort(function (a, b) { return a - b }); ascending sort array

    return sort.join('>')
}

console.log((bigToSmall([[1, 2], [3, 4], [5, 6]]), "6>5>4>3>2>1"));

//Convert A Hex String To RGB
console.log('\nConvert A Hex String To RGB\n');
function hexStringToRGB(hexString) {
    hexString = hexString.replace('#', '')

    const r = parseInt(hexString.substring(0, 2), 16)
    const g = parseInt(hexString.substring(2, 4), 16)
    const b = parseInt(hexString.substring(4, 6), 16)

    return { r, g, b }
}

console.log(hexStringToRGB('ff9933'));