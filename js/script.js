'use strict'

let b = 2;
let a = 2;

for (a; a < 999999; a * a) {
   a *= 2;
   console.log(`2 в степени ${b++} = ${a}`);
}
