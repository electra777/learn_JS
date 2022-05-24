'use strict';

let a = 5;
let b = a;

b = b + 5; //Передача по значению
console.log(a);
console.log(b);

const obj = {
	a: 5,
	b: 1,
};

const cop = obj; //Передача по ссылке
cop.a = 10;

console.log(cop);
console.log(obj);

//Поверхностное копирование объекта через цикл

function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 5,
	},
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

// поверхностное клонировние или соединение объектов методом assing

const add = {
	d: 17,
	e: 20,
};

const clone = Object.assign({}, add);

clone.d = 51;

console.log(add);
console.log(clone);

// поверхностное клонирование массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asssaaasd';
console.log(newArray);
console.log(oldArray);

//Оператор спрэт для копирования массива

const video = ['youtube', 'vimeo', 'rytube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

console.log(...num);

const arrayTwo = ['a', 'b'];
const arrayTwoNew = [...arrayTwo];

console.log(arrayTwoNew);

const q = {
	one: 1,
	two: 2,
};

const newObj = { ...q };

console.log(newObj);
