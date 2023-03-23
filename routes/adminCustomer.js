const express = require('express');
const router = express.Router();
const adminCustomer = require('../controllers/adminCustomer');

router.get('/delete/:id', adminCustomer.deleteBooking);

module.exports = router;

