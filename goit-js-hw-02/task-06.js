"use strict";
let input;
const numbers = [];
let total = 0;
let message;
let inputIsNan;

while (input !== null) {
  input = prompt("Введите число!");
  inputIsNan = Number(input);
  if (Number.isNaN(inputIsNan)) {
    message = "Вы ввели не число, попробуйте еще раз!!!";
    alert(message);
  } else {
    numbers.push(inputIsNan);
  }
}

for (const number of numbers) {
  total += number;
}

console.log(numbers);
alert(`Сумма ${total}`);
