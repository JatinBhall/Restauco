const express = require('express');
const router = express.Router();
const aboutView = require('../controllers/about');

router.get('/', aboutView);

module.exports = router;