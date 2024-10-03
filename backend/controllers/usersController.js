// eslint-disable-next-line @typescript-eslint/no-require-imports
const { response, request } = require('express')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const User = require('../models/usersModel')

const createUser = async (req = request, res = response) => {
  console.log(req.body)

  try {
    const { body } = req
    const user = new User(body)
    await user.save()
    console.log('user is: ', user)
    // user.meow()
    res.status(201).json({
      msg: 'User created no hash password',
      user
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error creating new user',
      error
    })
  }
}

const readUser = async (req, res) => {
  try {
    const { limit = 10 } = req.query
    const queryParam = { isActive: true }
    const recordLength = await User.countDocuments()
    const user = await User.find(queryParam).limit(Number(limit))
    res.json({
      recordLength,
      user
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error reading user',
      error
    })
  }
}

const updateUser = async (req = request, res) => {
  try {
    const { params, body } = req
    const { userId } = params

    await User.findByIdAndUpdate(userId, body)
    const userToShow = await User.findById(userId)

    res.status(202).json({
      msg: 'Users updated successfully',
      userToShow
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error updating users',
      error
    })
  }
}

const deleteUser = async (req = request, res = response) => {
  try {
    const { userId } = req.params
    const deleteState = { isActive: false }
    await User.findByIdAndUpdate(userId, deleteState)
    const userToShow = await User.findById(userId)

    res.status(202).json({
      msg: 'Users deleted successfully',
      userToShow
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error deleting users',
      error
    })
  }
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser
}
