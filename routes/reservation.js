const express = require('express');
const router = express.Router();
const reservationView = require('../controller/reservation');

router.post('/', reservationView);

module.exports = router;