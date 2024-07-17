const xhr = new XMLHttpRequest();
const name = document.getElementsByTagName('h1');


console.log(xhr);

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    // if (xhr.readyState === 4 && xhr.status === 200) {
    const responseData = xhr.responseText;
    name[0].innerHTML = JSON.parse(responseData).name;
    console.log(name[0].innerHTML, responseData);
  }
};

const url = 'https://jsonplaceholder.typicode.com/users/1';
xhr.open('GET', url);

xhr.send();

