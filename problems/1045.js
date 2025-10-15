"use strict";

export function problem(lines) {
  const array = lines[0].split(" ").map(Number);
  const [a, b, c] = array.sort((x, y) => y - x);

  const answers = [];

  if (a >= b + c) {
    answers.push("NAO FORMA TRIANGULO");
  } else {
    if (a * a === b * b + c * c) {
      answers.push("TRIANGULO RETANGULO");
    }
    if (a * a > b * b + c * c) {
      answers.push("TRIANGULO OBTUSANGULO");
    }
    if (a * a < b * b + c * c) {
      answers.push("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
      answers.push("TRIANGULO EQUILATERO");
    }
    if ((a === b && a !== c) || (b === c && b !== a) || (a === c && c !== b)) {
      answers.push("TRIANGULO ISOSCELES");
    }
  }

  for (const answer of answers) {
    console.log(answer);
  }
}
