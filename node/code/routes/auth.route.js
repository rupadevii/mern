import Router from "express"
import { getNewToken, login, register } from "../controllers/auth.controller.js";

const router = Router()

router.post("/signup", register)
router.post("/login", login)
router.post("/refresh", getNewToken)

export default router
