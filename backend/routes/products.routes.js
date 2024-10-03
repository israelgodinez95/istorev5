// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Router } = require('express')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createProduct, readProduct, updateProduct, deleteProduct } = require('../controllers/productsController')

const router = Router()

router.post('/', createProduct) // C reate
router.get('/', readProduct) // R ead
router.put('/?ptt=productId', updateProduct) // U pdate
router.delete('/:productId', deleteProduct) // D elete

module.exports = router
