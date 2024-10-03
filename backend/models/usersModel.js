// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  userName: {
    type: String,
    required: [true, 'Name is mandatory'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is mandatory'],
    unique: true
  },
  phoneNumber: {
    type: Number
  },
  password: {
    type: String,
    required: [true, 'Password is mandatory']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

module.exports = model('User', UserSchema)
