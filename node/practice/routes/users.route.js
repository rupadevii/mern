import { Router } from "express"
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/users.controller.js";

const router = Router()

router.get("/", getUsers)
router.post("/", addUser)
router.delete("/:id", deleteUser)
router.patch("/:id", updateUser)

export default router