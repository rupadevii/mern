import Router from 'express'
import { addEmployee, deleteEmployee, getEmployeeById, getEmployees, updateEmployee } from '../controllers/employee.controller.js';

const router = Router()

router.get('/', getEmployees)
router.get('/:id', getEmployeeById)
router.post('/', addEmployee)
router.patch('/:id', updateEmployee)
router.delete('/:id', deleteEmployee)

export default router