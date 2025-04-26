const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')
const studentRoutes = require('./routes/student.router')

const dotenv = require('dotenv')
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB()

app.use('/student', studentRoutes)

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001')
})
