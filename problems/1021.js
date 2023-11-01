/*

Banknotes and Coins

Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

Input
The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

Output
Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.


*/

'use strict';

export function problem(lines) {
  let newAmount = Number(lines[0]);

  const obj = {
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
    0.5: 0,
    0.25: 0,
    0.1: 0,
    0.05: 0,
    0.01: 0,
  };

  const options = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];

  for (let i = 0; i < options.length; i++) {
    if (newAmount >= options[i]) {
      obj[options[i]] = Math.floor(newAmount / options[i]);
      newAmount = (newAmount % options[i]).toFixed(2);
    }
  }

  console.log('NOTAS:');
  console.log(`${obj[100]} nota(s) de R$ 100.00`);
  console.log(`${obj[50]} nota(s) de R$ 50.00`);
  console.log(`${obj[20]} nota(s) de R$ 20.00`);
  console.log(`${obj[10]} nota(s) de R$ 10.00`);
  console.log(`${obj[5]} nota(s) de R$ 5.00`);
  console.log(`${obj[2]} nota(s) de R$ 2.00`);
  console.log('MOEDAS:');
  console.log(`${obj[1]} moeda(s) de R$ 1.00`);
  console.log(`${obj[0.5]} moeda(s) de R$ 0.50`);
  console.log(`${obj[0.25]} moeda(s) de R$ 0.25`);
  console.log(`${obj[0.1]} moeda(s) de R$ 0.10`);
  console.log(`${obj[0.05]} moeda(s) de R$ 0.05`);
  console.log(`${obj[0.01]} moeda(s) de R$ 0.01`);
}
