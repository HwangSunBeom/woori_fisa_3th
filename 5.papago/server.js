// express 기반으로 동작할 서버 로직 작성 파일
// express 모듈을 사용하기 위해서 express import
import express, {json} from 'express';
import HTTP from 'superagent';
import dotenv from 'dotenv';



// app -> express 모듈을 활용할 수 있는 객체
// app을 통해서 express의 설정들을 조작, 관리
const app = express();

// 미들웨어 추가
app.use(express.static('public')) // public 폴더를 정적 리소스가 제공되는 디렉토리로 명시
app.use(json()); // json 형태의 데이터를 파싱할 수 있도록 설정

dotenv.config()

const baseURL = 'https://naveropenapi.apigw.ntruss.com';

const url_detect = 'https://naveropenapi.apigw.ntruss.com/langs/v1/dect';
const url_translate = 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation';


// 사용자가 브라우저에서 http://www.localhost:3000/ 경로로 요청 시 응답할 담당자(Handler)를 구현
app.get('/', (_, response) => {
    response.sendFile('index.html');
});

app.post('/detect', (request, response) => {
    // HTTP.post(url_detect)
    HTTP.post(`${baseURL}/langs/v1/dect`)
    .send(request.body)
    .set('Content-Type', 'application/json')
    .set('X-NCP-APIGW-API-KEY-ID', process.env.clientId)
    .set('X-NCP-APIGW-API-KEY', process.env.clientSecret)
    .end((err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res.body);
            response.status(200).send(res.body);
        }
    });
});

app.post('/translate', (request, response) => {
    HTTP.post(`${baseURL}/nmt/v1/translation`)
    .send(request.body)
    .set('Content-Type', 'application/json')
    .set('X-NCP-APIGW-API-KEY-ID', process.env.clientId)
    .set('X-NCP-APIGW-API-KEY', process.env.clientSecret)
    .end((err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res.body);
            response.status(200).send(res.body);
        }
    });
});

const port = 3000; // 실행시킬 포트 번호를 port라는 변수에 할당
app.listen(port, 
    () => console.log(`http://127.0.0.1:${port}/ 서버 프로세스가 3000번 포트에서 실행 중입니다.`)
);




