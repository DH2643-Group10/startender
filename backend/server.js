const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

const usersRouter = require('./routes/users.js')
const drinkRouter = require('./routes/drinks.js')
const commentsRouter = require('./routes/comments.js')
const loginRouter = require('./routes/login.js')



mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected'))

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/login', loginRouter)
app.use('/users', usersRouter)
app.use('/drinks', drinkRouter)
app.use('/comments', commentsRouter)

app.listen(4000,()=> console.log('server is up and running on port:4000'))
