'use strict';

const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%',
		},
		exp: '1 month',
	},
	showAgeAndLangs: function () {
		const { age } = personalPlanPeter;
		const { languages } = personalPlanPeter.skills;
		let langs = '';

		langs = languages.join(' ').toUpperCase();
		return console.log(`Мне ${age} и я владею языками: ${langs}`);
	},
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
	const { exp } = plan.skills;
	return console.log(exp);
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
	const { programmingLangs } = plan.skills;
	let result = '';

	for (let key in programmingLangs) {
		result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}
	return console.log(result);
}
showProgrammingLangs(personalPlanPeter);
