const { request } = require('express');
const express = require('express');
const router = express.Router();
const loginForm = require('../controllers/loginForm');

// router.use()
router.get('/', loginForm);

module.exports = router;