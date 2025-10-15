"use strict";

export function problem(lines) {
  const [start, end] = lines[0].split(" ").map(Number);

  if (start === end) {
    console.log("O JOGO DUROU 24 HORA(S)");
  } else {
    const duration = end > start ? end - start : 24 - start + end;
    console.log(`O JOGO DUROU ${duration} HORA(S)`);
  }
}
