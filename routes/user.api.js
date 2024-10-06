const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controller")


//회원가입 endpoint
router.post("/", userController.createUser);
router.post("./login", userController)

module.exports = router;