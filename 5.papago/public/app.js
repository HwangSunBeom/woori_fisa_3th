const text = document.getElementById("translate-box");

const fromSelect = document.getElementById("fromSelect");
const toSelect = document.getElementById("toSelect");

const translated = document.getElementById("translated-box");

const [fromSelectBox, toSelectBox] = document.getElementsByTagName("select");

const numCount = document.getElementById("numCount");

const btn = document.getElementById("btn_translate");

const xhr = new XMLHttpRequest();

const url_detect = "/detect";
const url_translate = "/translate";



const debounce = (callback, delay) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
      xhr.open("POST", url_detect);
      xhr.setRequestHeader("Content-Type", "application/json");
      if (text.value.length != 0) {
        xhr.send(JSON.stringify({ query: text.value }));
      }
    }, delay);
  };
};

const inputEvent = () => {
  const inputText = text.value;
  const length = inputText.length;
  numCount.innerText = length;

  xhr.onload = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
  
      // 결과 데이터 받음
      const responseData = xhr.responseText;
  
      // 결과 데이터를 JS 객체로 파싱
      const parsedData = JSON.parse(responseData);
  
      // 화면에 출력하는 처리 로직
      const detectedLang = parsedData.langCode; // ko
      fromSelect.value = detectedLang;
    }
  };

};

text.addEventListener("input", debounce(inputEvent, 1000));

fromSelect.addEventListener("change", (e) => {
  console.log(fromSelect.value);
});

toSelect.addEventListener("change", (e) => {

});

btn.addEventListener("click", () => {
  const data = JSON.stringify({
    source: fromSelect.value != '언어감지' ? fromSelect.value : "ko",
    target: toSelect.value,
    text: text.value,
  })

  xhr.open("POST", url_translate);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);

  xhr.onload = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
  
      // 결과 데이터 받음
      const responseData = xhr.responseText;
  
      // 결과 데이터를 JS 객체로 파싱
      const parsedData = JSON.parse(responseData);

  
      // 화면에 출력하는 처리 로직
      const translatedText = parsedData.message.result.translatedText; // ko

      translated.value = translatedText;
    }
  };
});

// dark mode 토글 버튼
const checkbox = document.getElementById("checkbox");

// dark mode 적용하기 위해 태그를 가져오고, <html>에 class="dark"를 적용해야함
const html = document.querySelector("html");

// 삼항연산자 checkbox의 값이 checked로 변경되면 class="dark" 옵션 추가
// 그렇지 않을 경우, class="dark" 옵션을 제거

checkbox.addEventListener("click", () => {
    checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
});



// /**
//  * source ~ : 번역할 텍스트, 번역할 언어의 타입(ko, ja..)
//  * target ~ : 번역 결과 텍스트, 번역될 언어의 타입(ko, ja..)
//  */
// const [sourceSelect, targetSelect] = document.getElementsByTagName("select");
// const [sourceTextArea, targetTextArea] = document.getElementsByTagName("textarea");

// // 번역될 언어의 타입 변경 이벤트
// // English면 en, 한국어면 ko
// let targetLanguage = "en"; // 번역하고 싶은 언어의 타입, 초기값은 en(English)
// targetSelect.addEventListener("change", (event) => (targetLanguage = event.target.value));

// // 번역할 텍스트 입력 이벤트

// let timer;
// sourceTextArea.addEventListener("input", (event) => {
//   if (timer) clearTimeout(timer);

//   timer = setTimeout(() => {
//     const text = event.target.value;

//     // detect에게 요청 후 응답 결과 받아서
//     // { langCode: 'ko' }
//     // ko 값을 활용하여 셀렉트 박스를 '한국어'로 변경
//     // XMLHttpRuquestAPI 활용

//     const xhr = new XMLHttpRequest(); // XMLHttpRequest API 불러오기

//     // Node.js 서버로부터 응답이 완료되었을 때 동작시킬 이벤트
//     xhr.onload = () => {
//       if (xhr.readyState === xhr.DONE && xhr.status === 200) {
//         // 결과 데이터 받음
//         const responseData = xhr.responseText;

//         // 결과 데이터를 JS 객체로 파싱
//         const parsedData = JSON.parse(responseData);

//         // 화면에 출력하는 처리 로직
//         const detectedLang = parsedData.langCode; // ko
//         sourceSelect.value = detectedLang;
//       }
//     };
//     const url = "/detect"; // Node.js의 언어 감지 API URL
//     // 언어감지 API에 보낼 데이터 준비
//     /*
//             {
//                 "query": "안녕"
//             }
//         */
//     const data = {
//       query: text,
//     };

//     // 문자열 포맷으로 직렬화된 데이터
//     const strigifiedData = JSON.stringify(data);

//     xhr.open("POST", url);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(strigifiedData);
//   }, 1500);
// });
