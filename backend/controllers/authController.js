// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcrypt')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jwt = require('jsonwebtoken')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const User = require('../models/userModel')

// Handle user signup
const signupUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if the user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' })
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create and save the new user
    const newUser = new User({ email, password: hashedPassword })
    await newUser.save()

    res.status(201).json({ msg: 'User created successfully' })
  } catch (error) {
    res.status(500).json({ msg: 'Error during signup', error: error.message })
  }
}

// Handle user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if the user exists
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' })
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' })
    }

    // Generate a token (e.g., JWT) for the user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.status(200).json({ token, msg: 'Login successful' })
  } catch (error) {
    res.status(500).json({ msg: 'Error during login', error: error.message })
  }
}

module.exports = { signupUser, loginUser }
