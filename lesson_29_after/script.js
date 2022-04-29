'use strict';

// Место для первой задачи
function calculateVolumeAndArea(cubeEdge) {
	if (typeof cubeEdge !== 'number' || cubeEdge <= 0 || cubeEdge % 1 !== 0) {
		return 'При вычислении произошла ошибка';
	} else {
		return `Объем куба: ${cubeEdge * cubeEdge * cubeEdge}, площадь всей поверхности: ${
			cubeEdge * cubeEdge * 6
		}`;
	}
}
calculateVolumeAndArea();

// Место для второй задачи
function getCoupeNumber(seat) {
	if (typeof seat !== 'number' || seat < 0 || seat % 1 !== 0) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else if (seat === 0 || seat > 36) {
		return 'Таких мест в вагоне не существует';
	} else if (seat % 4 === 0) {
		return seat / 4;
	} else {
		return Math.trunc((seat + 4) / 4);
	}
}
getCoupeNumber(7);
