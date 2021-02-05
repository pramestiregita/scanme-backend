const route = require('express').Router()
const userController = require('../controllers/user')

route.post('/login', userController.create)

module.exports = route
