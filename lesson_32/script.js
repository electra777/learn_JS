'use strict';

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red',
	},
	mekeSet: function () {
		console.log('test2');
	},
};

const { border, bg } = options.colors;
console.log(bg);
//Деструктуризация

console.log(Object.keys(options).length);

let counter = 0;
for (let key in options) {
	counter++;
	console.log(`Свойство - ${key}, значение - ${options[key]}`);
}

console.log(counter);
