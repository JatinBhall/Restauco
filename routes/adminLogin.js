const express = require('express');
const router = express.Router();
const path = require('path')
const adminLogin = require('../controllers/adminLogin');
const menu = require('./adminMenu');


router.use('/', adminLogin.logIn);
router.use(express.static(path.join(__dirname, 'public')));
router.get('/adminView', adminLogin.adminView);
router.get('/logOut', adminLogin.logOut);
router.use('/menu', menu)
module.exports = router;