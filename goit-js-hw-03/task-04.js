"use strict";

const countTotalSalary = function (employees) {
  let total = 0;

  const salaryValues = Object.values(employees);
  for (const value of salaryValues) {
    total += value;
  }
  return total;

  // const salaryKeys = Object.keys(employees);

  // for (const key of salaryKeys) {
  //   // console.log(key);
  //   total += employees[key];
  // }
  // return total;

  // Или For In:///////////////////////

  // for (const key in employees) {
  //   total += employees[key];
  // }
  // return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
