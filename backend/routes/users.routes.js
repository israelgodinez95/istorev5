// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Router } = require('express')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createUser, readUser, updateUser, deleteUser } = require('./../controllers/usersController')

const router = Router()

router.post('/', createUser) // C reate
router.get('/', readUser) // R ead
router.put('/:userId', updateUser) // U pdate
router.delete('/:userId', deleteUser) // D elete

module.exports = router
