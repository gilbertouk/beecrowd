/*

Banknotes

In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. Print the read value and the list of banknotes.

Input
The input file contains an integer value N (0 < N < 1000000).

Output
Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example. Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.

*/

'use strict';

export function problem(lines) {
  const bankNotes = {
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
    100: 0,
  };
  const value = Number(lines[0]);

  let remainder = value;

  if (value >= 100) {
    bankNotes[100] = Math.floor(value / 100);
    remainder = value % 100;
  }

  if (remainder >= 50) {
    bankNotes[50] = Math.floor(remainder / 50);
    remainder = remainder % 50;
  }

  if (remainder >= 20) {
    bankNotes[20] = Math.floor(remainder / 20);
    remainder = remainder % 20;
  }

  if (remainder >= 10) {
    bankNotes[10] = Math.floor(remainder / 10);
    remainder = remainder % 10;
  }

  if (remainder >= 5) {
    bankNotes[5] = Math.floor(remainder / 5);
    remainder = remainder % 5;
  }

  if (remainder >= 2) {
    bankNotes[2] = Math.floor(remainder / 2);
    remainder = remainder % 2;
  }

  if (remainder >= 1) {
    bankNotes[1] = Math.floor(remainder / 1);
    remainder = remainder % 1;
  }

  console.log(`${value}`);
  console.log(`${bankNotes[100]} nota(s) de R$ 100,00`);
  console.log(`${bankNotes[50]} nota(s) de R$ 50,00`);
  console.log(`${bankNotes[20]} nota(s) de R$ 20,00`);
  console.log(`${bankNotes[10]} nota(s) de R$ 10,00`);
  console.log(`${bankNotes[5]} nota(s) de R$ 5,00`);
  console.log(`${bankNotes[2]} nota(s) de R$ 2,00`);
  console.log(`${bankNotes[1]} nota(s) de R$ 1,00`);
}
