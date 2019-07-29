const express = require('express')
const route = express.Router()
const productValidator = require('../middleware/validators/products')

//import the product controller
const productController = require('../controllers/productController')

route.get('/', productController.fetchAll)
route.post('/create', productValidator.create, productController.create)
route.get('/:id', productController.fetchOne)
route.put('/:id/update', productController.update)
route.delete('/:id/delete', productController.delete)

module.exports = route;