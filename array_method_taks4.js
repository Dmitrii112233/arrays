function filterNumbers() {
    const original = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, "word", 7, 8, false, 9, 100];
    return original.filter(item => typeof item === "number" && item >= 1 && item <= 9);
}

console.log(filterNumbers());
