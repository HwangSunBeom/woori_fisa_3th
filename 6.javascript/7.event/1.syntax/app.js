const btn = document.getElementById('btn');

console.log(btn);

const clickHandler = ()=>{
    console.log('Button clicked');
}

btn.addEventListener('click', clickHandler);