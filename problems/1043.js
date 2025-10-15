"use strict";

export function problem(lines) {
  const numbers = lines[0];

  const [a, b, c] = numbers.split(" ").map(Number);

  if (a + b > c && a + c > b && b + c > a) {
    const perimeter = a + b + c;
    console.log(`Perimetro = ${perimeter.toFixed(1)}`);
  } else {
    const area = ((a + b) * c) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
  }
}
