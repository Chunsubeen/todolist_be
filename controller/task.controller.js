const Task = require("../model/Task");
const taskController = {};

// Task 생성
taskController.createTask = async (req, res) => {
    try {
        const { task, isComplete } = req.body;
        const newTask = new Task({ task, isComplete });
        await newTask.save();

        res.status(200).json({ status: 'success', data: newTask });
    } catch (err) {
        res.status(400).json({ status: 'fail', error: err.message });
    }
};

// Task 목록 조회
taskController.getTask = async (req, res) => {
    try {
        const taskList = await Task.find().select("-__v");
        res.status(200).json({ status: "success", data: taskList });
    } catch (err) {
        res.status(400).json({ status: "fail", error: err.message });
    }
};

// Task 수정
taskController.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) throw new Error("Task not found");

        const fields = Object.keys(req.body);
        fields.forEach(field => task[field] = req.body[field]);

        await task.save();
        res.status(200).json({ status: "success", data: task });
    } catch (err) {
        res.status(400).json({ status: "fail", error: err.message });
    }
};

// Task 삭제
taskController.deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) throw new Error("Task not found");

        res.status(200).json({ status: "success", data: deletedTask });
    } catch (err) {
        res.status(400).json({ status: "fail", error: err.message });
    }
};

module.exports = taskController;
