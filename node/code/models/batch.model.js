import mongoose from 'mongoose'

const batchSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Batch = mongoose.model('Batch', batchSchema)

export default Batch