function extract(start, end) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numbers.slice(start, end + 1);
}


console.log(extract(2, 4)); // Вывод: [3, 4, 5]
console.log(extract(0, 2)); // Вывод: [1, 2, 3]
console.log(extract(5, 8)); // Вывод: [6, 7, 8, 9]
