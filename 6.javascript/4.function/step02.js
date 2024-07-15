// //  콜백 함수 - 기본

// // function greeting(name) {
// //   console.log('Hi');
// // }

// const greeting = (name) => {
//     console.log(`Hi, ${name}`);
// } 

// greeting('beom');

// function processUserInput(name, callbackFn) {
//     callbackFn(name);
// }

// processUserInput('beom', greeting);

// const waitCoupang = (appleBox, callback) =>{
//     console.log(`쿠팡에서 ${appleBox}가 도착했다.`);
//     callback();
// }

// const bringItToneighbor = () => {
//     console.log('옆집 아주머니에게 전달 완료');
// }

// waitCoupang('applebox', bringItToneighbor);

// const number = [1, 2, 3, 4, 5];
// array.forEach(number => {
//     console.log(number);
// });


// 콜백 함수 - 기본

// Hello {name}를 출력하는 함수
// function greeting(name) {
//     console.log(`Hello, ${name}`);
// }

// greeting을 화살표 함수로 변경
const greeting = (name) => console.log(`Hello, ${name}`);
greeting('yoo');


function processUserInput(name, callbackFn) {
    callbackFn(name); // greeting('yoo')와 같음
}

processUserInput('yoo', greeting);

// 함수 2개 구현

// 1. 쿠팡에서 사과를 기다리는 함수 waitCoupang(appleBox, callback)
// 함수의 동작: `쿠팡에서 ${appleBox}가 도착했다`를 출력하는 함수

// 2. bringItToNeighbor(별도의 파라미터 없음) 
// 함수의 동작: '옆집 아주머니에게 전달 완료'를 출력하는 함수

const waitCoupang = (appleBox, callback) => {
    console.log(`쿠팡에서 ${appleBox}가 도착했다.`);
    callback();
}

const bringItToNeighbor = () => console.log('옆집 아주머니에게 전달 완료');

waitCoupang('appleBox', bringItToNeighbor);

const numbers = [1,2,3,4];
// Array.forEach로 출력
// numbers.forEach(number => console.log(number));

// 콜백 함수 정의
const callbackFn = number => console.log(number);
numbers.forEach(callbackFn);