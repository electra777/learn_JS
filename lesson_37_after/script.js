'use strict';

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5,
		},
		{
			width: 15,
			length: 7,
		},
		{
			width: 20,
			length: 5,
		},
		{
			width: 8,
			length: 10,
		},
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000,
};

function isBudgetEnough(data) {
	let volume = 0;
	for (let i = 0; i < data.shops.length; i++) {
		volume += data.shops[i].width * data.shops[i].length * data.height;
	}
	if (volume * data.moneyPer1m3 <= data.budget) {
		return console.log(`Бюджета достаточно`);
	} else return console.log(`Бюджета недостаточно`);
}
isBudgetEnough(shoppingMallData);
