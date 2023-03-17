const express = require('express');
const router = express.Router();
const adminLogin = require('../controller/adminLogin');

router.get('/', adminLogin);

module.exports = router;