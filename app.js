const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require("./routes/index");
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD
// console.log("mogo",MONGODB_URI_PROD);


// 미들웨어 설정
app.use(bodyParser.json());  // JSON 형식의 요청을 처리
app.use("/api", indexRouter);  // /api로 시작하는 요청은 모두 indexRouter로 전달

// MongoDB 연결 URI
const mongoURI = MONGODB_URI_PROD;

// MongoDB 연결 설정
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose connected");
    })
    .catch(err => {
        console.error("DB connection failed:", err.message);  // 오류 메시지 출력
    });

// 서버 시작
app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});

//1.회원가입
//유저가 이메일, 패스워드, 유저이름 입력해서 보냄
//받은 정보를 저장함(데이터베이스 모델 필요)
//패스워드를 암호화 시켜서 저장

//1. 라우터
//2.모델
//3.데이터를 저장(이미 가입된 유저 유무, 패스워드 암호화)
//4. 응답을 보낸다


//2.로그인
//이메일 패스워드를 입력해서 보냄
//데이터베이스에 해당 이메일과 패스워드를 가진 유저가 있는지 확인
//없으면 실패
//있다면? 유저정보 +토큰
//프론트엔드에서는 이 정보를 저장

//1.라우터설정
//2.이메일 패스워드 정보 읽어오기
//3.이메일을 가지고 유저정보 가져오기
//4.이 유저에 DB에 있는 패스워드와 프론트엔드가 보낸 패스워드가 같은지 비교
//5.맞다:토큰발행
//6.틀림:error
//7.응답으로 유저정보 + 토큰보냄