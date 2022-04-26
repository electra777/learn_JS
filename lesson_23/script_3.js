'use strict';
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = lines; i >= 0; i--) {
	for (let j = i; j > 0; j--) {
		result += ' ';
	}
	for (let k = 1; k <= 11; k++) {
		result += '*';
		if (i == 5 && k == 1) break;
		if (i == 4 && k == 3) break;
		if (i == 3 && k == 5) break;
		if (i == 2 && k == 7) break;
		if (i == 1 && k == 9) break;
	}

	result += '\n';
}

console.log(result);
