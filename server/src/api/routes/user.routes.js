import express from "express"

import userController from "../controllers/user.controller.js"

const { login, register, check_eligibility } = userController
const router = express.Router()

router.get("/")
router.post("/login", login)
router.post("/register", register)
router.post("/check_eligibility", check_eligibility)

// module.exports = router

export default router
