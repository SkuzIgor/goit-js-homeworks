"use strict";
const china = "китай";
const priceInChina = 100;
const chily = "чили";
const priceInChily = 250;
const australia = "австралия";
const priceInAustralia = 170;
const india = "индия";
const priceInIndia = 80;
const jamajka = "ямайка";
const priceInJamajka = 120;
let message;

const promptLabel = "Введите название страны, в которую нужно доставить товар.";
let userInput = prompt(promptLabel);

if (userInput === null) {
  message = "Отменено пользователем";
} else
  switch (userInput.toLowerCase()) {
    case china.toLowerCase():
      message = `Доставка в ${china} будет стоить ${priceInChina} кредитов`;
      break;
    case chily.toLowerCase():
      message = `Доставка в ${chily} будет стоить ${priceInChily} кредитов`;
      break;
    case australia.toLowerCase():
      message = `Доставка в ${australia} будет стоить ${priceInAustralia} кредитов`;
      break;
    case india.toLowerCase():
      message = `Доставка в ${india} будет стоить ${priceInIndia} кредитов`;
      break;
    case jamajka.toLowerCase():
      message = `Доставка в ${jamajka} будет стоить ${priceInJamajka} кредитов`;
      break;
    default:
      message = `В вашей стране доставка не доступна.`;
  }

alert(message);
