const express = require('express');
const router = express.Router();
const menuView = require('../controllers/menu');

router.get('/', menuView);

module.exports = router;