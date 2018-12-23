const answer = require('../answers.js')[1];

/**
 * @title Multiples of 3 and 5
 * @description If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const sumOfAllMultiplesOf3Or5Under = n => {
  let sum = 0;
  for (let i = 0; i < n; i++)
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  return sum;
};

console.assert(sumOfAllMultiplesOf3Or5Under(10) === 23, "Provided test didn't pass");
console.assert(sumOfAllMultiplesOf3Or5Under(1000) === answer, "Answer didn't pass");