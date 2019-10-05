import mongoose from 'mongoose'
import uuid from 'node-uuid'

const ideaSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid.v4(),
    },
    title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        maxlength: [140, 'Body must be less than 140 characters.']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Idea = mongoose.model('Idea', ideaSchema)

export default Idea