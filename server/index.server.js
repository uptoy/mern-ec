const express = require('express')
const env = require('dotenv')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/admin.auth')


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


app.use(bodyParser)
app.use('/api', authRoutes)
app.use('/api', adminRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})