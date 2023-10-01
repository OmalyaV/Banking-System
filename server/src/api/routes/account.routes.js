import express from "express"

import accountController from "../controllers/account.controller.js"


const { add_account, get_account_list, get_account_details } = accountController
const router = express.Router()
console.log("Account route")

router.get("/")
router.post("/add_account", add_account)
router.post("/account_list", get_account_list)
router.post("/account_details", get_account_details)

// module.exports = router

export default router
