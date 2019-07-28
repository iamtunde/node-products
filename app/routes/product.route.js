const express = require('express')
const route = express.Router()

//import the product controller
const productController = require('../controllers/productController')

route.get('/', productController.fetchAll)
route.post('/create', productController.create)
route.get('/:id', productController.fetchOne)
route.put('/:id/update', productController.update)
route.delete('/:id/delete', productController.delete)

module.exports = route;