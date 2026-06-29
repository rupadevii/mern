import Router from "express"
import { addStudent, getStudentDetails, getStudents, updateStudent } from "../controllers/students.controller.js";

const router = Router()

router.get('/', getStudents)
router.get('/:id', getStudentDetails)
router.post('/', addStudent)
router.patch('/:id', updateStudent)

export default router