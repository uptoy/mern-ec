const express = require('express')
const { signup, signin, requireSignin } = require('../../controllers/admin/admin.auth')
const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)




module.exports = router