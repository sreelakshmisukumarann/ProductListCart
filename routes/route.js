const express = require('express')
const Productcontroller = require('../controller/productController')
const cartController = require('../controller/cartController')

const router = express.Router()

// PRODUCT route
router.get('/product/getProductlist',Productcontroller.getProductItems)

// cart routes
router.post('/cart/addcart',cartController.addToCart)
router.get('/cart/getcart',cartController.getCartItems)
router.delete('/cart/delete/:id',cartController.removeFromCart)

module.exports = router