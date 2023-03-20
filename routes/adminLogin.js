const express = require('express');
const router = express.Router();
const adminLogin = require('../controllers/adminLogin');
const menu = require('./adminMenu');


router.use('/', adminLogin.logIn);
router.use('/menu', menu)
router.get('/adminView', adminLogin.adminView);
router.get('/logOut', adminLogin.logOut);
module.exports = router;