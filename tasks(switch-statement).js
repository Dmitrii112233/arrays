// Задача 10: Перевод цифры в слово с использованием switch


let n = 8;

switch (n) {
  case 0:
    console.log("Zero");
    break;
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
  case 5:
    console.log("Five");
    break;
  case 6:
    console.log("Six");
    break;
  case 7:
    console.log("Seven");
    break;
  case 8:
    console.log("Eight");
    break;
  case 9:
    console.log("Nine");
    break;
  default:
    console.log(n + " is not a digit");
    break;
}

/*
Ожидаемые результаты:

Case 1:
Input: n = 1
Output: One

Case 2:
Input: n = 10
Output: 10 is not a digit
*/
