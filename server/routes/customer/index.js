const router = require('express').Router()
const CustomerController = require('../../controllers/CustomerController')

// Routes
router.get('/', CustomerController.findUserById)
router.put('/', CustomerController.updateUser)
router.post('/', CustomerController.createUser)

module.exports = router;
