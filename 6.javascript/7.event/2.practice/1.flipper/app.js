const btn = document.getElementById('btn');
const rgbCode = document.getElementById('rgb');
const flipper = document.getElementById('flipper');

const clickHandler = ()=>{
    // 구조분해 할당
    const [r, g, b] = [Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)];
    // const red = Math.floor(Math.random()*256).toString();
    // const green = Math.floor(Math.random()*256).toString();
    // const blue = Math.floor(Math.random()*256).toString();
    flipper.style.backgroundColor = `rgb(${r},${g},${b})`;
    // document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    rgb.innerText = `rgb(${r},${g},${b})`;
}

btn.addEventListener('click', clickHandler);