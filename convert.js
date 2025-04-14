function convert(fn, array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(fn(array[i]));
    }
    return result;
}


function square(x) {
    return x * x;
}


console.log(convert(square, [1, 2, 3, 4])); // Output: [1, 4, 9, 16]
console.log(convert(square, []));          // Output: []

let arr = [1, 2, 3];
console.log(convert(square, arr));         // Output: [1, 4, 9]
console.log(arr);
