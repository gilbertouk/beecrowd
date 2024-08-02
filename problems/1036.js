/*
Bhaskara's Formula

Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.

Input
Read 3 floating-point numbers (double) A, B and C.

Output
Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.

*/

'use strict';

export function problem(lines) {
  const [a, b, c] = lines[0].split(' ').map(Number);

  function calculate(a, b, c) {
    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0 || a === 0) {
      console.log('Impossivel calcular');
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);

      console.log(`R1 = ${x1.toFixed(5)}`);
      console.log(`R2 = ${x2.toFixed(5)}`);
    }
  }

  calculate(a, b, c);
}
