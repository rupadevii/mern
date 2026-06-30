import Router from "express"
import { addStudent, deleteStudent, getStudentDetails, getStudents, updateStudent } from "../controllers/studentsDB.controller.js";
// import { addStudent, deleteStudent, getStudentDetails, getStudents, updateStudent } from "../controllers/students.controller.js";

const router = Router()

router.get('/', getStudents)
router.get('/:id', getStudentDetails)
router.post('/', addStudent)
router.patch('/:id', updateStudent)
router.delete('/:id', deleteStudent)

export default router