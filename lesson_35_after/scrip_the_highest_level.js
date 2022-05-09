'use strict';

const someString = 'This is some strange string';

function reverse(str) {
	if (typeof str !== 'string') {
		return console.log('Ошибка!');
	}
	return console.log(str.split('').reverse().join(''));
}
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	if (arr.length === 0) {
		return console.log('Нет доступных валют');
	}
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== missingCurr) {
			newArr.push(arr[i]);
		}
	}
	return console.log(`Доступные валюты:\n${newArr.join('\n')}`);
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
