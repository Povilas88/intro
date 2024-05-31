//Counting Duplicates
console.log('Counting Duplicates\n');
function duplicateCount(text) {
    const low = text.toLowerCase();
    let array = [];

    for (let i = 0; i < low.length; i++) {
        if (low.lastIndexOf(low[i]) !== i && !array.includes(low[i])) {
            array.push(low[i]);
        }
    }
    return array.length
}

console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("Indivisibility"))

//compute cube as sums
console.log('\ncompute cube as sums\n');
function findSummands(n) {
    let start = n * n - n + 1;
    let result = [];
    for (let i = 0; i < n; i++) {
        console.log(i);
        result.push(start + 2 * i);
    }
    return result;
}

console.log(findSummands(1));
console.log(findSummands(3));
console.log(findSummands(5));