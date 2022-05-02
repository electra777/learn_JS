'use strict';

// Место для первой задачи
function getTimeFromMinutes(minutes) {
	if (typeof minutes !== 'number' || minutes % 1 !== 0 || minutes < 0) {
		return console.log('Ошибка, проверьте данные');
	} else {
		let hour = Math.trunc(minutes / 60);
		let minLeft = minutes % 60;
		let strHour = 'час';
		let strMinute = 'минута';

		if (
			(hour >= 5 && hour <= 20) ||
			hour.toString().slice(-1) === '0' ||
			(hour.toString().slice(-1) >= '5' && hour.toString().slice(-1) <= '9')
		) {
			strHour = 'часов';
		} else if (
			(hour >= 2 && hour <= 4) ||
			(hour.toString().slice(-1) >= '2' && hour.toString().slice(-1) <= '4')
		) {
			strHour = 'часа';
		}

		if (
			(minLeft >= 5 && minLeft <= 20) ||
			minLeft.toString().slice(-1) === '0' ||
			(minLeft.toString().slice(-1) >= '5' && minLeft.toString().slice(-1) <= '9')
		) {
			strMinute = 'минут';
		} else if (minLeft.toString().slice(-1) >= '2' && minLeft.toString().slice(-1) <= '4') {
			strMinute = 'минуты';
		}

		return console.log(`Это ${hour} ${strHour} и ${minLeft} ${strMinute}`);
	}
}
getTimeFromMinutes(141);

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
	if (
		typeof a !== 'number' ||
		typeof b !== 'number' ||
		typeof c !== 'number' ||
		typeof d !== 'number'
	) {
		return 0;
	}

	let max = a;
	if (b > max) {
		max = b;
	}
	if (c > max) {
		max = c;
	}
	if (d > max) {
		max = d;
	}

	return console.log(max);
}
findMaxNumber(12, 5, 11, 6.6);
