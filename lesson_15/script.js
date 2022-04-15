/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

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

if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	alert('Вы киноман');
} else {
	alert('Произошла ошибка');
}

console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
// 	const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
// 	const gradeFilm = prompt('На сколько оцените его?', '');

// 	if (
// 		lastFilm != null &&
// 		gradeFilm != null &&
// 		lastFilm.length != 0 &&
// 		lastFilm.length < 50 &&
// 		gradeFilm.length != 0
// 	) {
// 		personalMovieDB.movies[lastFilm] = gradeFilm;
// 	} else {
// 		i--;
// 	}
// }

// for (let i = 0; i < 2; i++) {
// 	const lastFilm = prompt('Один из последних просмотренных фильмов?', '');

// 	if (lastFilm.length == 0 || lastFilm.length > 50) {
// 		i--;
// 		continue;
// 	} else {
// 		const gradeFilm = prompt('На сколько оцените его?', '');
// 		personalMovieDB.movies[lastFilm] = gradeFilm;
// 	}
// }

// let counter = 2;
// while (counter) {
// 	const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
// 	if (lastFilm.length == 0 || lastFilm.length > 50 || typeOf(lastFilm) == null) {
// 		continue;
// 	} else {
// 		const gradeFilm = prompt('На сколько оцените его?', '');
// 		personalMovieDB.movies[lastFilm] = gradeFilm;
// 		counter--;
// 	}
// }

// switch (personalMovieDB.count) {
// 	case 10 > personalMovieDB.count:
// 		alert('Просмотрено довольно мало фильмов');
// 		break;
// 	case 10 < personalMovieDB.count > 30:
// 		alert('Вы классический зритель');
// 		break;
// 	case personalMovieDB.count > 30:
// 		alert('Вы киноман');
// 		break;

// 	default:
// 		alert('Произошла ошибка');
// 		break;
// }
