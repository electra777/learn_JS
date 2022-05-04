'use strict';

const arr = [1, 32, 7, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
	return a - b;
}

arr.pop();
arr.push(7);

console.log(arr, arr.length);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (let value of arr) {
	console.log(value);
}

arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt('vvedite', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));
