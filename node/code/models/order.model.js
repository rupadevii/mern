import mongoose from 'mongoose'
import User from './user.model.js';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema)

const orderSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Product
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    address: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: String
        }
    },
    pricing: {
        subTotal: {
            type: Number,
            required: true
        },
        shippingCost : {
            type: Number
        },
        discount: {
            type: Number
        },
        total: {
            type: Number,
            required: true
        }
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'pending'],
        default: 'pending'
    },
    modeOfPayment: {
        type: String,
        enum: ['cash', 'UPI', 'wallet']
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'],
        default: 'pending'
    }

})

const Order = mongoose.model("Order", orderSchema)

export default Order