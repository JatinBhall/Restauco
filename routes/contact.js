const express = require('express');
const router = express.Router();
const contactView = require('../controllers/contact');

router.get('/', contactView);

module.exports = router;