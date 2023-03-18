const express = require('express');
const router = express.Router();
const adminLogin = require('../controllers/adminLogin');
const menu = require('./adminMenu');

router.get('/', adminLogin);
router.use('/menu', menu)
module.exports = router;