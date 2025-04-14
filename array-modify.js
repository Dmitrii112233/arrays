// массив с элементами "Jazz" и "Blues"
let styles = ["Jazz", "Blues"];
console.log("Шаг 1:", styles); // ["Jazz", "Blues"]

// "Rock-n-Roll" в конец массива
styles.push("Rock-n-Roll");
console.log("Шаг 2:", styles); // ["Jazz", "Blues", "Rock-n-Roll"]

// Заменяем среднего элемента на "Classical"
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classical";
console.log("Шаг 3:", styles); // ["Jazz", "Classical", "Rock-n-Roll"]

// удаляем первого элемента и его вывод
let removed = styles.shift();
console.log("Удалённый элемент:", removed); // "Jazz"
console.log("Шаг 4:", styles); // ["Classical", "Rock-n-Roll"]

// вставляем "Rap" и "Reggae" в начало массива
styles.unshift("Rap", "Reggae");
console.log("Шаг 5:", styles); // ["Rap", "Reggae", "Classical", "Rock-n-Roll"]
