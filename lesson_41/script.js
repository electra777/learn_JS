'use strict';

let x = 5;
alert(x++); // 5

console.log([] + false); // 'false'
console.log([] + false - null); //'Nan'
console.log([] + false - null + true); //'Nan'

let y = 1;
let x = (y = 2);
alert(x);

console.log([] + 1 + 2); // 12

alert('1'[0]); // 1

console.log(2 && 1 && null && 0 && undefined); //null И запинается на лжи

console.log(!!(1 && 2) === (1 && 2)); // false !! gриводит к boolean

alert(null || (2 && 3) || 4); // 3 ИЛИ запинается на правде

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); //false

alert(typeof +'Infinity'); // Infinity - number

console.log('Ёжик' > 'яблоко');

console.log(0 || '' || 2 || undefined || true || falsе);
