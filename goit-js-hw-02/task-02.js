"use strict";

const calculateEngravingPrice = function (message, pricePerWord) {
  const arrayOfWords = message.split(" ");
  const totalCost = arrayOfWords.length * pricePerWord;
  return totalCost;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus ertwefsd qreqewd",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);
