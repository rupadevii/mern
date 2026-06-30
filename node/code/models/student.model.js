import mongoose from 'mongoose'
import Batch from './batch.model.js';

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    personalDetails: {
        phoneNumber: {
            type: String
        },
        dob: {
            type: Date,
        },
        address: {
            type: String
        }
    },
    course: {
        type: String,
        required: true
    },
    batch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Batch,
        required: true
    },
    joined: {
        type: Date,
        required: true
    },
    mockStatus: {
        frontEnd: {
            type: String,
            enum: ['attempted', 'cleared', 'unattempted'],
            default: 'unattempted'
        },
        fullStack: {
            type: String,
            enum: ['attempted', 'cleared', 'unattempted'],
            default: 'unattempted'
        }
    }
}, {timestamps: true})

const Student = mongoose.model('Student', studentSchema)

export default Student
