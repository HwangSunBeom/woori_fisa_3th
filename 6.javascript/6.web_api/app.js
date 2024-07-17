console.dir(document);

console.log(window);

console.log(window.document == document);

const h1 = document.querySelector('h1');
console.log(typeof h1);
console.dir(h1);
console.log(h1.innerText);

console.log(h1 instanceof HTMLHeadingElement);

const liList = document.querySelectorAll('li');
console.log(liList);

console.log(liList[1].innerHTML)

const liList2 = document.getElementsByClassName('list-item');
console.log(liList2);