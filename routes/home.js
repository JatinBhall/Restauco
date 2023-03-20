const express = require('express');
const router = express.Router();
const homeView = require('../controllers/home');
// const reservation = require('./reservation');


router.get('/', homeView);
router.get('/home', homeView);
// router.get('/reservation', reservation);

module.exports = router;
