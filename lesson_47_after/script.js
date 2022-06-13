'use strict';

function factorial(n) {
	if (typeof n !== 'number' || n !== Math.round(n)) {
		return 'enter an integer';
	} else if (n <= 0) return 1;
	else if (n === 1) return n;
	else return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial('k'));
console.log(factorial(1.2));

function factorialByCycle(n) {
	if (typeof n !== 'number' || n !== Math.round(n)) {
		return 'enter an integer';
	} else if (n <= 0) return 1;
	else if (n === 1) return n;
	else {
		let res = 1;
		for (let i = 1; i <= n; i++) {
			res *= i;
		}
		return res;
	}
}

console.log(factorialByCycle(0));
console.log(factorialByCycle(1));
console.log(factorialByCycle(2));
console.log(factorialByCycle(3));
console.log(factorialByCycle(4));
console.log(factorialByCycle(5));
console.log(factorialByCycle('k'));
console.log(factorialByCycle(1.2));
