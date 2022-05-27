'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');
const wrapper = wrapper.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
// box.style.cssText = 'background-color: blue; width: 500px';

let num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach((item) => {
	item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // создать элемент
const text = document.createTextNode('Тут был я'); // редко используется

div.classList.add('black'); // добавить класс

// document.body.append(div);
wrapper.append(div); // вставить в конец элемента
// wrapper.appendChild(div); // вставить в конец элемента (старая команда)

// wrapper.prepend(div); // вставить в начало элемента

// wrapper.before(div); // вставить перед элементом
// wrapper.after(div); // вставить после элементом

// wrapper.insertBefore(div, hearts[0]); // вставить в начало родителя (старый метод)

// circles[0].remove(); // удалить элемент
// wrapper.removeChild(hearts[1]); // удалить элемент (старая команда)

// hearts[0].replaceWith(circles[0]); // заменить один элемент другим
// wrapper.replaceChild(circles[0], hearts[0]); // заменить один элемент другим (старая команда)

// div.innerHTML = 'Hello world'; // вставка HTML
// div.innerHTML = '<h1>Hello world</h1>'; // вставка HTML
// div.textContent = 'Hello'; // вставка текста

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // вставка HTML перед элементом (как before())
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // вставка HTML в начало элемента (как prepend())
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // вставка HTML в конец элемента (как append())
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // вставка HTML после элемента (как after())
