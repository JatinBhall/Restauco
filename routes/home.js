const express = require('express');
const router = express.Router();
const homeView = require('../controller/home')

router.get('/', homeView);

module.exports = router;
