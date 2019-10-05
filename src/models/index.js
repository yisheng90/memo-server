import mongoose from 'mongoose'

const connectDb = () => mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

export { connectDb }
