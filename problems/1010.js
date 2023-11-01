/*

Simple Calculate

In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

Input
The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

Output
The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

*/

'use strict';

export function problem(lines) {
  const [product1, product2] = lines;

  const [productCode1, unitsProduct1, priceProduct1] = product1.split(' ');

  const [productCode2, unitsProduct2, priceProduct2] = product2.split(' ');

  const total =
    Number(unitsProduct1) * Number(priceProduct1) +
    Number(unitsProduct2) * Number(priceProduct2);

  console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
}
