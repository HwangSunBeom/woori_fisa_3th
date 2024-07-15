// JS Doc 문서화 주석

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns  {number} 덧셈 결과
 * @author 'beom'
 */

function add(a, b) {
  return a + b;
}

add(3, 5);

const mtp = function (a, b) {
  return a * b;
};

const sub = (a, b) => a - b; // 함수 몸체가 1줄이면 암묵적으로 리턴 생략 가능
console.log(sub(3, 5));

// 파라미터가 없어도 ()는 생략 불가
const hello = () => {
  console.log("hello");
};


const square = (a) => a * a;
const square2 = a => a * a; // 매개변수가 하나면 괄호 생략 가능