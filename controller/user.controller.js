const User = require("../models/User");
const bcrypt = require("bcrypt"); //암호화 해주는 라이브러리
const saltRounds = 10 //암호화 10번

const userController = {}

userController.createUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            throw new Error('이미 가입이 된 유저 입니다.');
        }
        //암호화된 비밀번호 생성
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({ email, name, password: hash })
        await newUser.save()
        res.status(200).json({ status: "success" })

    } catch (error) {
        res.status(400).json({ status: "fail", error });

    }
};

userController.loginWithEmail = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            const isMath = bcrypt.compareSync(password, user.password);
        }
    } catch (error) {

    }
}



module.exports = userController;