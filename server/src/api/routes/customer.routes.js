import express from "express"

import customerController from "../controllers/customer.controller"

const { add_customer } = customerController
const router = express.Router()

router.get("/")
router.post("/add_customer", add_customer)

// module.exports = router

export default router
