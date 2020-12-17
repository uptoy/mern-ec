const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    //a　& b
    name: {
        type: String,
        required: true,
        trim: true,
    },
    //a and b (npm install slugify)
    slug: {
        type: String,
        required: true,
        unique: true
    },
    parentId: {
        type: String
    }

}, { timestamps: true })


module.exports = mongoose.model('Category', categorySchema)