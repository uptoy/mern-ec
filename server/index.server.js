const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose');
const path = require('path')

//routes
const userRoutes = require('./routes/user.auth')
const adminRoutes = require('./routes/admin/admin.auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')


env.config()

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.aegyg.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
).then(() => {
    console.log('Database connected')
});


app.use(express.json())
app.use('public', express.static(path.join(__dirname, 'upload'))) //静的ファイル読み込み
app.use('/api', userRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)



app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})