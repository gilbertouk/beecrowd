"use strict";

export function problem(lines) {
  const numbers = lines[0];

  const numbersArray = numbers.split(" ").map((num) => Number(num));

  const sortedNumbers = [...numbersArray].sort((a, b) => a - b);

  for (let i = 0; i < sortedNumbers.length; i++) {
    console.log(sortedNumbers[i]);
  }

  console.log("");

  for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
  }
}
