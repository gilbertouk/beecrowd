'use strict';

export function problem(lines) {
  const [item, quantity] = lines[0].split(' ').map(Number);

  function calculateTotalPrice(item, quantity) {
    const items = {
      1: 4.0,
      2: 4.5,
      3: 5.0,
      4: 2.0,
      5: 1.5,
    };

    const totalPrice = quantity * items[item];
    return `Total: R$ ${totalPrice.toFixed(2)}`;
  }

  console.log(calculateTotalPrice(item, quantity));
}
