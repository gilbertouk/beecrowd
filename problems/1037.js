/*

You must make a program that read a float-point number and print a message saying in which of following intervals the number belongs: [0,25] (25,50], (50,75], (75,100]. If the read number is less than zero or greather than 100, the program must print the message “Fora de intervalo” that means "Out of Interval".

The symbol '(' represents greather than. For example:
[0,25] indicates numbers between 0 and 25.0000, including both.
(25,50] indicates numbers greather than 25 (25.00001) up to 50.0000000.

Input
The input file contains a floating-point number.

Input Sample
25.01
25.00
100.00
-25.02

Output
The output must be a message like following example.

Output Sample
Intervalo (25,50]
Intervalo [0,25]
Intervalo (75,100]
Fora de intervalo

*/

'use strict';

export function problem(lines) {
  const number = +lines[0];

  function checkInterval(number) {
    if (number >= 0 && number <= 25) {
      return 'Intervalo [0,25]';
    }

    if (number > 25 && number <= 50) {
      return 'Intervalo (25,50]';
    }

    if (number > 50 && number <= 75) {
      return 'Intervalo (50,75]';
    }

    if (number > 75 && number <= 100) {
      return 'Intervalo (75,100]';
    }

    return 'Fora de intervalo';
  }

  console.log(checkInterval(number));
}
