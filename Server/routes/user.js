const express = require("express")
const router = express.Router()

const {signup, login, sendotp} = require("../controllers/loginSignup")

const { auth } = require("../middlewares/auth")

// basic routes
router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendotp);

module.exports = router