const express = require('express');
const router = express.Router();
const adminLogin = require('../controllers/adminLogin');
const adminMenu = require('./adminMenu');
const adminCustomer = require('./adminCustomer');


router.use('/', adminLogin.logIn);
router.use('/menu', adminMenu);
router.use('/customer', adminCustomer);
router.get('/adminView', adminLogin.adminView);
router.get('/logOut', adminLogin.logOut);
module.exports = router;