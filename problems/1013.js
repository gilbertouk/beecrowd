/*



*/

'use strict';

export function problem(lines) {
  let [a, b, c] = lines[0].split(' ');
  a = Number(a);
  b = Number(b);
  c = Number(c);

  const result = (a + b + Math.abs(a - b)) / 2;

  if (result > c) {
    console.log(`${result} eh o maior`);
  } else {
    console.log(`${c} eh o maior`);
  }
}
