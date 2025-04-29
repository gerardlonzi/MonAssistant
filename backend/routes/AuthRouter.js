const express = require("express")
const { register, verifyToken, login } = require("../controllers/Authcontroller")
const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/verifyToken",verifyToken)

module.exports = router