const express = require('express');
const taskController = require("../controller/task.controller");  // 컨트롤러 불러오기
const router = express.Router();

// CRUD 작업 정의
router.post('/', taskController.createTask);
router.get('/', taskController.getTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
