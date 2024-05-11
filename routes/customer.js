const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer');

router.get('/', customerController.getAllCustomers);

router.get('/:id', customerController.getSingleCustomer);

router.post('/', customerController.createCustomer);

router.put('/:id', customerController.updateCustomer);

router.delete('/:id', customerController.deleteCustomer);

module.exports = router;