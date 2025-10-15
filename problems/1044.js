"use strict";

export function problem(lines) {
  const [a, b] = lines[0]
    .split(" ")
    .map(Number)
    .sort((x, y) => x - y);

  if (b % a === 0) {
    console.log("Sao Multiplos");
  } else {
    console.log("Nao sao Multiplos");
  }
}
