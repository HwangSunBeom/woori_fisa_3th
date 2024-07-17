import sum from "./function.js";

const x = 10;
const y = 5;

const add = document.getElementById('add');
add.textContent = `sum : ${sum(x,y)}`;