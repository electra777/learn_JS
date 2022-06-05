'use strict';

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes); //получить все ноды(узлы) внутри родителя body

// console.log(document.body.firstChild); //находит первую дочернюю ноду
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild); //находит первый дочерний элемент

// console.log(document.querySelector('#current').parentNode.parentNode); //находит родительскую ноду
// console.log(document.querySelector('#current').parentElement); //находит родительский элемент

// console.log(document.querySelector('[data-current="3"]').nextSibling); //находит следующую ноду
// console.log(document.querySelector('[data-current="3"]').previousSibling); //находит предыдущую ноду

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //находит следующий элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); //находит предыдущий элемент

for (let node of document.body.childNodes) {
	if (node.nodeName == '#text') {
		continue;
	}
	console.log(node);
}
