/*

Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise, write the message “Valores nao aceitos” (Values not accepted).

Input
Four integer numbers A, B, C and D.

Output
Show the corresponding message after the validation of the values​​.

*/

'use strict';

export function problem(lines) {
  const values = lines[0].split(' ').map(Number);

  const valueA = values[0];
  const valueB = values[1];
  const valueC = values[2];
  const valueD = values[3];

  const sumCD = valueC + valueD;
  const sumAB = valueA + valueB;
  const isPositive = valueC > 0 && valueD > 0 ? true : false;
  const isEven = valueA % 2 === 0 ? true : false;

  if (
    valueB > valueC &&
    valueD > valueA &&
    sumCD > sumAB &&
    isPositive &&
    isEven
  ) {
    console.log('Valores aceitos');
  } else {
    console.log('Valores nao aceitos');
  }
}
