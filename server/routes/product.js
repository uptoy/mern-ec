const express = require('express')
const { requireSignin, adminMiddleware } = require('../common-middleware')
const { createProduct } = require('../controllers/product')
const router = express.Router()
//ファイルupload
const multer = require('multer')
const shortid = require('shortid')
const path = require('path')

//multer hp参照
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage })

router.post('/product/create', requireSignin, adminMiddleware, createProduct, upload.array('productPicture'))

module.exports = router