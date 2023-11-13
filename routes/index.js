const express = require('express')
const route = express.Router()
const verifyToken = require('../middleware/auth')
const todoRoute = require('./todo-route')
const authRoutes = require('./auth-route')
const userRoute = require('./user-route')

route.get('/', (req, res) => {
    res.json({
        messsage: "selamat datang di server"
    })
})

route.use('/auth', authRoutes)
route.use("/todos", verifyToken, todoRoute)
route.use("/user", verifyToken, userRoute)

module.exports = route