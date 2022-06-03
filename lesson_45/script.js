'use strict';

const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = () => {
// 	alert('click');
// };

//переназначает
// btn.onclick = () => {
// 	alert('second click');
// };

// btn.addEventListener('click', () => {
// 	alert('click');
// });

// btn.addEventListener('click', () => {
// 	alert('second click');
// });

// let i = 0;
// const deleteElement = (e) => {
// 	console.log(e.target);
// 	// e.target.remove();
// 	i++;
// 	if (i == 1) {
// 		btn.removeEventListener('click', deleteElement);
// 	}
// };
// btn.addEventListener('click', deleteElement);

const deleteElement = (e) => {
	console.log(e.currentTarget);
	console.log(e.type);
};
btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e.target);
});

btns.forEach((btn) => {
	btn.addEventListener('click', deleteElement, { once: true });
});
