/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (
			personalMovieDB.count == '' ||
			personalMovieDB.count == null ||
			isNaN(personalMovieDB.count)
		) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const lastFilm = prompt('Один из последних просмотренных фильмов?', '');

			if (lastFilm == null || lastFilm.length == 0 || lastFilm.length > 50) {
				i--;
				continue;
			} else {
				for (let j = 0; j < 1; j++) {
					const gradeFilm = prompt('На сколько оцените его?', '');
					if (gradeFilm == null || gradeFilm.length == 0 || gradeFilm.length > 50) {
						j--;
						continue;
					} else {
						personalMovieDB.movies[lastFilm] = gradeFilm;
					}
				}
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			alert('Вы киноман');
		} else {
			alert('Произошла ошибка');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		personalMovieDB.privat = !personalMovieDB.privat;
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
			if (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == '') {
				i--;
			}
		}
		personalMovieDB.genres.forEach(function (item, index) {
			console.log(`Любимый жанр #${index + 1} - это ${item}`);
		});
	},
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();
