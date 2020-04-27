"use strict";
let userChoise;
let total = 0;
let message;
let numberUserChoice;

while (userChoise !== null) {
  userChoise = prompt("введите число.");
  inputIsNan = Number(userChoise);

  if (Number.isNaN(numberUserChoice)) {
    message = "Было введено не число, попробуйте еще раз";
    alert(message);
  } else {
    total = total + numberUserChoice;
  }
}

console.log(total);
