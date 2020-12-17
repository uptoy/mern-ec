const express = require('express')
const { addCategory, getCategory } = require('../controllers/category')
const { requireSignin, adminMiddleware } = require('../common-middleware')
const router = express.Router()


router.post('/category/create', requireSignin, adminMiddleware, addCategory)
router.post('/category/getcategory', getCategory)

module.exports = router