const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
    },
    hash_password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    contactNumber: { true: String },
    profilePicture: { true: String }
}, { timestamps: true })

userSchema.virtual('password') //hash_passwordをpasswordとして吐き出してくれる(仮装的なフィールドを返してくれる)
    .set(function (password) {
        this.hash_password = bcrypt.hashSync(password, 10) //hash 暗号化
    })

userSchema.virtual('fullname')
    .set(function (password) {
        return `${this.firstName}${this.lastName}`
    })

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password)
    }
}


module.exports = mongoose.model('User', userSchema)