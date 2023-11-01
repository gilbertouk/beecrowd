/*

Time Conversion

Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

Input
The input file contains an integer N.

Output
Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

*/

'use strict';

export function problem(lines) {
  const time = Number(lines[0]);

  const hours = Math.floor(time / 3600);
  const remainder = time % 3600;

  const minutes = Math.floor(remainder / 60);

  const seconds = remainder % 60;

  console.log(`${hours}:${minutes}:${seconds}`);
}
