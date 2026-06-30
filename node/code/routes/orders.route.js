import Router from 'express'
import { addOrder, deleteOrder, getOrderById, getOrders, updateOrder } from '../controllers/orders.controller.js';

const router = Router()

router.get('/', getOrders)
router.get('/:id', getOrderById)
router.post('/', addOrder)
router.patch('/:id', updateOrder)
router.delete('/:id', deleteOrder)

export default router