const router = require('express').Router();
const controller = require('./controller');

// Routes
router.post('/customers', controller.findOrCreate);

module.exports = router;
