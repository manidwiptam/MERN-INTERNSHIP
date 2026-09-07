import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

import router from './routes/route.js'

const port = process.env.PORT


app.get('/', (req, res) => {
  res.send('Hello World! Welcome to my page bitches')
})

app.use('/iie', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

