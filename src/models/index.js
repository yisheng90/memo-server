import mongoose from 'mongoose'

import Idea from './idea'

const connectDb = () => mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

export {connectDb}

export default {
    Idea
}