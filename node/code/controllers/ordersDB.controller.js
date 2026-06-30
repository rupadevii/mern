import Order from "../models/order.model.js";

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate("customer", "name email").populate("products.product", "name price")

        if(orders.length===0){
            return res.status(404).json({msg: "No orders found."})
        }

        res.status(200).json({msg: "Orders", data: orders})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message})
    }
}

export const getOrderById = async (req, res) => {
    try {   
        const {id} = req.params

        const order = await Order.findById(id).populate("customer", "name email").populate("products.product", "name price")

        if(!order){
            return res.status(404).json({msg: "Order not found"})
        }

        res.status(200).json({msg: "Order details", data:order})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message})
    }
}

export const addOrder = async (req, res) => {
    try {
        const {customerId, products, address, pricing, paymentStatus, modeOfPayment, orderStatus } = req.body

        if(!customerId || !Array.isArray(products) || products.length===0 || !address || !pricing || !modeOfPayment){
            return res.status(400).json({msg: "Provide required details"})
        }

        const newOrder = {
            customer:customerId,
            pricing,
            products,
            address,
            paymentStatus: paymentStatus||'pending',
            modeOfPayment,
            orderStatus: orderStatus||'pending'
        }

        const order = await Order.create(newOrder)

        res.status(201).json({msg: "New Order created successfully", data: order})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message})
    }
}

export const updateOrder = async (req, res) => {
    try {
        const {id} = req.params

        const updates = req.body
        
        const updatedOrder = await Order.findByIdAndUpdate(id, updates, {new: true, runValidators: true})

        if(!updatedOrder){
            return res.status(404).json({msg: "Order not found"})
        }

        res.status(200).json({msg: "Order updated successfully", data: updatedOrder})

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message})
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const {id} = req.params

        const order = await Order.findByIdAndDelete(id)

        if(!order){
            return res.status(404).json({msg: "Order not found"})
        }

        res.status(200).json({msg: "Order deleted successfully."})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message})
    }
}