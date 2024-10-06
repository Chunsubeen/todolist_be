const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task 스키마 정의
const taskSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true }
);

// Task 모델 생성
const Task = mongoose.model("Task", taskSchema);

// 모듈 내보내기
module.exports = Task;
