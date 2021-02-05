const route = require('express').Router()
const userController = require('../controllers/user')

route.post('/login', userController.create)
route.get('/get/:id', userController.get)
route.put('/edit/:id', userController.edit)
route.delete('/delete/:id', userController.delete)

module.exports = route
