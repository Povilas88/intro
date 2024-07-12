function incrementString(strng) {
    let str = strng;
    let digitArr = [];
    strng = strng.split('');
    str = str.split('');

    for (let i = str.length - 1; i >= 0; i--) {
        if (!isNaN(strng[i])) {
            digitArr.push(strng[i]);
        } else {
            break;
        }
    }

    for (let i = str.length - 1; i >= 0; i--) {
        if (!isNaN(str[str.length - 1])) {
            str.splice(i, 1);
        }
    }

    strng = strng.join('');
    str = str.join('');
    digitArr = digitArr.reverse().join('');

    digitArr = (parseInt(digitArr) + 1).toString().padStart(digitArr.length, '0');

    return isNaN(strng[strng.length - 1]) ? strng + 1 :
        str + digitArr
}

console.log(incrementString("foo99bar000",));
console.log(incrementString("foobar999",));
console.log(incrementString("foobar00999",));
console.log(incrementString("foobar",));
