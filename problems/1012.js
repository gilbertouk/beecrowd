/*

Area

Make a program that reads three floating point values: A, B and C. Then, calculate and show:
a) the area of the rectangle triangle that has base A and height C.
b) the area of the radius's circle C. (pi = 3.14159)
c) the area of the trapezium which has A and B by base, and C by height.
d) the area of ​​the square that has side B.
e) the area of the rectangle that has sides A and B.

Input
The input file contains three double values with one digit after the decimal point.

Output
The output file must contain 5 lines of data. Each line corresponds to one of the areas described above, always with a corresponding message (in Portuguese) and one space between the two points and the value. The value calculated must be presented with 3 digits after the decimal point.

*/

'use strict';

export function problem(lines) {
  let [a, b, c] = lines[0].split(' ');
  a = Number(a.replace(',', '.'));
  b = Number(b.replace(',', '.'));
  c = Number(c.replace(',', '.'));

  const pi = 3.14159;

  const rectangleTriangle = (a * c) / 2;
  const circle = pi * c ** 2;
  const trapezium = ((a + b) / 2) * c;
  const square = b ** 2;
  const rectangle = a * b;

  console.log(`TRIANGULO: ${rectangleTriangle.toFixed(3)}`);
  console.log(`CIRCULO: ${circle.toFixed(3)}`);
  console.log(`TRAPEZIO: ${trapezium.toFixed(3)}`);
  console.log(`QUADRADO: ${square.toFixed(3)}`);
  console.log(`RETANGULO: ${rectangle.toFixed(3)}`);
}
