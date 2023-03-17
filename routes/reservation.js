const express = require('express');
const router = express.Router();
const reservationView = require('../controllers/reservation');

router.post('/', reservationView);

module.exports = router;