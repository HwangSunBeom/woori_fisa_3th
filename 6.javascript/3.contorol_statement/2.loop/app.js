// for (let index = 0; index < 10; index++) {
//   console.log(`${index} 번 반복`);
// }

// const rainbow = "rainbow";
// console.log(rainbow[0], rainbow[1]);

// for (let index = 0; index < rainbow.length; index++) {
//   const element = rainbow[index];
//   console.log(element);
// }


// // Java 문법과 동일
// // 전통적인 반복문 작성 형태
// for (let index = 1; index < 5; index++) {
//     console.log(`${index} 번 반복`);
// }

// const rainbow = 'rainbow'; // JS에서 문자열은 배열처럼 동작하기도 함
// console.log(rainbow[0], rainbow[1], rainbow[2], rainbow[3]);

// for (let index = 0; index < rainbow.length; index++) {
//     const element = rainbow[index];
//     console.log(element);
// }

const foods = ['apple', 'orange-cookie', 'avocado', 'doctor-peppermint'];
let favorite = '내가 좋아하는 음식은..';

// 반복문, 조건문을 활용하여 아래와 같이 출력되도록
// 내가 좋아하는 음식은.. apple, orange-cookie, avocado 그리고 doctor-peppermint 입니다.

for (let index = 0; index < foods.length; index++) {
    if (index === foods.length - 1) {
        favorite += ` 그리고 ${foods[index]} 입니다.`;
    } else {
        favorite += ` ${foods[index]},`;
    }
}

console.log(favorite);

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

fruits.forEach(fruit => console.log(fruit));