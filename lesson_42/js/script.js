'use strict';

const box = document.getElementById('box');
console.log(box);

// HTMLCollection
const btns = document.getElementsByTagName('button');
console.log(btns[2]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// NodeList
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(function (item) {
	console.log(item);
});

hearts.forEach((item) => {
	console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
