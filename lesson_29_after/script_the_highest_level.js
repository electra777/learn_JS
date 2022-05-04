'use strict';

function fib(number) {
	if (typeof number !== 'number' || number <= 0 || number % 1 !== 0) {
		return '';
	}

	let result = '';
	let a = 0;
	let b = 1;
	let c = 0;

	for (let i = 0; i < number; i++) {
		if (i + 1 === number) {
			result += `${c}`;
		} else {
			result += `${c} `;
		}
		c = a + b;
		b = a;
		a = c;
	}
	return console.log(result);
}

fib(10);
