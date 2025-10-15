"use strict";

export function problem(lines) {
  const [x, y] = lines[0].split(" ");

  if (Number(y) === 0 && Number(x) === 0) {
    console.log("Origem");
  } else if (Number(y) === 0) {
    console.log("Eixo X");
  } else if (Number(x) === 0) {
    console.log("Eixo Y");
  } else if (Number(y) > 0 && Number(x) > 0) {
    console.log("Q1");
  } else if (Number(y) > 0 && Number(x) < 0) {
    console.log("Q2");
  } else if (Number(y) < 0 && Number(x) < 0) {
    console.log("Q3");
  } else {
    console.log("Q4");
  }
}
