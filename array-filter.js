const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

// Элементы меньше 5
function lessThanFive(arr) {
    return arr.filter(num => num < 5);
}

console.log("Элементы меньше 5:", lessThanFive(numbers));

// Позиции максимального и минимального элемента
function minMaxPositions(arr) {
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;

    arr.forEach((value, index) => {
        if (value < min) {
            min = value;
            minIndex = index;
        }
        if (value > max) {
            max = value;
            maxIndex = index;
        }
    });

    return { minIndex, maxIndex };
}

const { minIndex, maxIndex } = minMaxPositions(numbers);
console.log(`Позиция минимального элемента: ${minIndex}`);
console.log(`Позиция максимального элемента: ${maxIndex}`);

// Элементы больше среднего арифметического
function aboveAverage(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr.length;
    return arr.filter(num => num > avg);
}

console.log("Элементы больше среднего:", aboveAverage(numbers));

// Количество положительных и отрицательных чисел
function countPosNeg(arr) {
    let positive = 0;
    let negative = 0;

    for (let num of arr) {
        if (num > 0) positive++;
        if (num < 0) negative++;
    }

    return { positive, negative };
}

const { positive, negative } = countPosNeg(numbers);
console.log(`Положительных: ${positive}, Отрицательных: ${negative}`);
