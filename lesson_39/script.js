'use strict';

// To String

// 1)
console.log(typeof String(null));
console.log(typeof String(5));

//2)
console.log(typeof (5 + ''));

const num = 7;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof Number('5'));

// 2)
console.log(typeof +'5');

// 3)
console.log(typeof parseInt('15px', 10));
// let answer = +prompt('hello', '');

// To Boolean

// 0, '', null, undefind, NaN  -  ложь

// 1)
let switcher = null;

if (switcher) {
	console.log('Working..');
}

switcher = 1;

if (switcher) {
	console.log('Working..');
}

// 2)
console.log(typeof Boolean('6'));

// 3)
console.log(typeof !!'78888888');
