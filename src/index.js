import 'dotenv'
import cors from 'cors'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!!!'))

app.listen(PORT, () =>
  console.log(`Hello. You are listening on port ${PORT} 🚀`)
)
