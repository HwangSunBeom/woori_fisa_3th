const addBtn = document.getElementById('add');
const resetBtn = document.getElementById('reset');
const subBtn = document.getElementById('sub');

const count = document.getElementById('count');

const addOnClick = ()=>{
    count.innerText = parseInt(count.innerText) + 1;
}

const subOnClick = ()=>{
    count.innerText = parseInt(count.innerText) - 1;
}

const resetOnClick = ()=>{
    count.innerText = 0;
}

addBtn.addEventListener('click', addOnClick);
resetBtn.addEventListener('click', resetOnClick);
subBtn.addEventListener('click', subOnClick);