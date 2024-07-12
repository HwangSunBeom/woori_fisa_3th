const selectButton = document.getElementById('cookie');
const result = document.getElementById('result');

function setResult(){
    if(selectButton.value === 'one'){
        result.textContent = '한대';
    } else if(selectButton.value === 'two'){
        result.textContent = '두대';
    } else if(selectButton.value === 'random'){
        result.textContent = '보류';
    } else {
        result.textContent = '선택해주세요';
    }
}

selectButton.addEventListener('change', setResult);