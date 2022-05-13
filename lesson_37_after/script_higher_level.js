'use strict';

const students = [
	'Peter',
	'Andrew',
	'Ann',
	'Mark',
	'Josh',
	'Sandra',
	'Cris',
	'Bernard',
	'Takesi',
	'Sam',
	'Samssq',
];

function sortStudentsByGroups(arr) {
	arr.sort();
	let arrNew = [];
	let lost = 'Оставшиеся студенты: ';
	for (let i = 0; i < 9; i += 3) {
		arrNew.push(arr.slice(i, i + 3));
	}

	for (let j = 9; j < arr.length; j++) {
		if (j == arr.length - 1) {
			lost += arr[j];
		} else {
			lost += `${arr[j]}, `;
		}
	}
	if (arr.length == 9) {
		lost += '-';
	}
	arrNew.push(lost);
	return console.log(arrNew);
}
sortStudentsByGroups(students);
