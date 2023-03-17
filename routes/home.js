const express = require('express');
const router = express.Router();
const homeView = require('../controllers/home')

router.get('/', homeView);

module.exports = router;
