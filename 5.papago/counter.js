const word = document.getElementById('word-count');

const text = document.getElementsByTagName('textarea')[0];

text.addEventListener('input', (event) => {
    word.textContent = event.target.value.length;
});

