import 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import { connectDb } from './models'

import ideaRouter from './routes/idea_router'
import ideasRouter from './routes/ideas_router'

const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.redirect('/ideas'))

app.use('/ideas', ideasRouter)
app.use('/idea', ideaRouter)

connectDb().then(async () => {
	app.listen(PORT, () => console.log(`Hello. You are listening on port ${PORT} 🚀`))
})
