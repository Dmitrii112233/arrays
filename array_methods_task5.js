function uniqueSorted() {
    const original = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
    const unique = [...new Set(original)];
    return unique.sort((a, b) => a - b);
}

console.log(uniqueSorted());
