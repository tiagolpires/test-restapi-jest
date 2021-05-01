const express = require('express')

const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/', ProductController.index)
routes.post('/', ProductController.store)

module.exports = routes