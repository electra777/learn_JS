'use strict';

// Место для первой задачи
function sayHello(name) {
	return `Привет, ${name}!`;
}
sayHello('Антон');

// Место для второй задачи
function returnNeighboringNumbers(number) {
	return [number - 1, number, number + 1];
}
returnNeighboringNumbers(5);

// Место для третьей задачи
function getMathResult(number, numberInProgress) {
	let result = number;
	let subnum = number;
	if (typeof numberInProgress === 'number' || numberInProgress > 0) {
		for (let i = 1; i < numberInProgress; i++) {
			number += subnum;
			result += `---${number}`;
		}
	}
	return console.log(result);
}
getMathResult(3, 10);
