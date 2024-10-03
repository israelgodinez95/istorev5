// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require('express')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { signupUser, loginUser } = require('../controllers/authController')

const router = express.Router()

// POST /api/signup
router.post('/signup', signupUser)

// POST /api/login
router.post('/login', loginUser)

module.exports = router
