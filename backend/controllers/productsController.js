// eslint-disable-next-line @typescript-eslint/no-require-imports
const { response, request } = require('express')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const Product = require('../models/productsModel')

const createProduct = async (req = request, res = response) => {
  try {
    const { body } = req

    const product = new Product(body)
    await product.save()

    res.status(201).json({
      msg: 'Product created using protected endpoint',
      product
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error creating new producttyt',
      error
    })
  }
}

const readProduct = async (req, res) => {
  try {
    const { limit = null } = req.query
    const queryParam = { isActive: true }
    const recordLength = await Product.countDocuments()
    const product = await Product.find(queryParam).limit(Number(limit))
    const greeting = 'Hello from backend response'
    res.json({
      greeting,
      recordLength,
      product,
      msg: 'Product read successfully'
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error reading product',
      error
    })
  }
}

const updateProduct = async (req = request, res) => {
  try {
    const { params, body } = req
    const { productId } = params

    await Product.findByIdAndUpdate(productId, body)
    const productToShow = await Product.findById(productId)

    res.status(202).json({
      msg: 'Products updated successfully',
      productToShow
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error updating products',
      error
    })
  }
}

const deleteProduct = async (req = request, res = response) => {
  try {
    const { productId } = req.params
    const deleteState = { isActive: false }
    await Product.findByIdAndUpdate(productId, deleteState)
    const productToShow = await Product.findById(productId)

    res.status(202).json({
      msg: 'Products deleted successfully',
      productToShow
    })
  } catch (error) {
    res.status(500).json({
      msg: 'Error deleting products',
      error
    })
  }
}

module.exports = {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct
}
