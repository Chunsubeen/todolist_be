const express = require('express');
const router = express.Router();
const taskApi = require('./task.api');  // task.api.js 파일과 연결
const userApi = require('./user.api');

// /api/tasks로 들어오는 요청을 taskApi로 라우팅
router.use('/tasks', taskApi);
router.use("/user",userApi);


module.exports = router;
