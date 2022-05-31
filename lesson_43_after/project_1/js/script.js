/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...'],
};

const blurb = document.querySelector('.promo__adv-title');
const images = document.querySelectorAll('img');
const genre = document.querySelector('.promo__genre');
const background = document.querySelector('.promo__bg');
const films = document.querySelectorAll('.promo__interactive-item');

blurb.remove();

images.forEach((item) => {
	item.remove();
});

genre.textContent = 'драма';

background.style.backgroundImage = 'url(../project_1/img/bg.jpg)';

movieDB.movies.sort();

films.forEach((item, index) => {
	item.textContent = `${index + 1}. ${movieDB.movies[index]}`;
});
