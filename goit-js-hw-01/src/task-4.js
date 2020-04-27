const credits = 23580;
const pricePerDroid = 3000;
let message;

let input = prompt("Какое к-во ремонтных дроидов вы хотите купить?");
if (input === null) {
  message = "Отменено пользователем!";
} else {
  let num = Number(input);
  let totalPrice = num * pricePerDroid;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    let rest = credits - totalPrice;
    message = `Вы купили ${num} дроидов, на счету осталось ${rest} кредитов.`;
  }
}

console.log(message);
