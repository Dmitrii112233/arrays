const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const modifiedArray = numbers.reduce((acc, num, index) => {
    if (index === 4 || index === 5 || index === 6) {
        acc.push(0);
    } else {
        acc.push(num);
    }
    return acc;
}, []);

console.log(modifiedArray);
