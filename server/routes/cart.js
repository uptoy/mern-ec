const express = require('express')
const { addItemToCart } = require('../controllers/cart')
const { requireSignin, adminMiddleware } = require('../common-middleware')
const router = express.Router()


router.post('/user/cart/addtocart', requireSignin, adminMiddleware, addItemToCart)

module.exports = router