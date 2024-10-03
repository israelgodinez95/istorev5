// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars
const { Schema, model, default: mongoose } = require('mongoose')

const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is mandatory'],
    unique: true
  },
  price: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

/*
ProductSchema.pre('save', async function (next) {
  try {
    if (this.isModified('category') || !this.categoryName) {
      const category = await mongoose.model('Category').findById(this.category)
      this.categoryName = category.categoryName
    }
    next()
  } catch (error) {
    next(error)
  }
}) */

module.exports = model('Product', ProductSchema)
