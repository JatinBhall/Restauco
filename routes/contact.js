const express = require('express');
const router = express.Router();
const contactView = require('../controller/contact');

router.get('/', contactView);

module.exports = router;