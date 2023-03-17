const express = require('express');
const router = express.Router();
const menuView = require('../controller/menu');

router.get('/', menuView);

module.exports = router;