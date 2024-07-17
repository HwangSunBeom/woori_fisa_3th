import HTTP from 'superagent';

// server.js는 Node.js 환경에서 실행시킬(되는) 코드
// Node.js - 브라우저 밖에서 JS를 실행할 수 있는 JS 런타임
// 런타임 - JS를 실행할 수 있는 환경

// console.log('hello');

const clientId = 'edwgz9by0h';
const clientSecret = 'iFetxOwqbqP0xVjwxvNQiRlxa1n4vB1XywWJBqou';

// Papago 언어 감지 API 요청을 처리할 URL 주소
const url = 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation';

const query = '안녕';

const data = {
    source : "ko",
    target : "en",
    text: "감자"
}

HTTP.post(url)
    .send(data)
    .set('Content-Type', 'application/json')
    .set('X-NCP-APIGW-API-KEY-ID', clientId)
    .set('X-NCP-APIGW-API-KEY', clientSecret)
    .end((err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res.body);
        }
    });