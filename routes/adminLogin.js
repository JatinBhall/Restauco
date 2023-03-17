const express = require('express');
const router = express.Router();
const adminLogin = require('../controllers/adminLogin');

router.get('/', adminLogin);

module.exports = router;