
const Product = require('../models/product')
const shortid = require('shortid')
const slugify = require('slugify')

exports.createProduct = (req, res) => {

    const {
        name, price, quantity, description, category, createdBy
    } = req.body
    let = productPictures = []

    if (req.files.length > 0) {
        productPictures = req.files.map(filter => {
            return { img: file.name }
        })
    }

    const product = new Product({
        //a　& b
        name: name,
        slug: slugify(name),
        price,
        description,
        quantity,
        productPictures,
        category,
        createdBy: req.user._id
    })

    product.save().exec((error, product) => {
        if (error) return res.status.json(400)({ error })
        if (product) {
            res.status(201).json({ product })
        }
    })
}