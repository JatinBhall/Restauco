const express = require('express');
const router = express.Router();
const menu = require('../controllers/adminMenu')

router.get('/insert', menu.insert);
router.post('/insertDB', menu.insertDB);
router.get('/update', menu.update);
router.get('/delete', menu.deleteItem);

module.exports = router;