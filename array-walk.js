// Создаём массив из n чисел
let n = 5;
let numbers = [];
for (let i = 0; i < n; i++) {
    numbers.push(i + 1); // Массив: [1, 2, 3, 4, 5]
}

// 1. Цикл for
console.log("Цикл for:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. Цикл while
console.log("Цикл while:");
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

// 3. Цикл do...while
console.log("Цикл do...while:");
i = 0;
do {
    console.log(numbers[i]);
    i++;
} while (i < numbers.length);

// 4. Цикл for...in (по индексам)
console.log("Цикл for...in:");
for (let index in numbers) {
    console.log(numbers[index]);
}

// 5. Цикл for...of (по значениям)
console.log("Цикл for...of:");
for (let num of numbers) {
    console.log(num);
}

// 6. Метод forEach
console.log("Метод forEach:");
numbers.forEach(function(num) {
    console.log(num);
});

// 7. Метод map
console.log("Метод map:");
numbers.map(function(num) {
    console.log(num);
});

// 8. Дополнительный способ — через join и разделение строками
console.log("С помощью join:");
console.log(numbers.join('\n'));

// Моё мнение:
// Лучший способ — это for...of или forEach.
// forEach удобен для функционального стиля и читается очень просто.
// for...of более гибкий — можно использовать break/continue.
// Если нужен просто вывод без логики — forEach или join самый компактный.
