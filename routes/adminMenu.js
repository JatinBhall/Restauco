const express = require('express');
const router = express.Router();
const menu = require('../controllers/adminMenu')

router.get('/insert/:userId', menu.insert);
router.post('/insertDB', menu.insertDB);
router.get('/update/:userId', menu.update);
router.all('/delete/:userId', menu.deleteItem);

module.exports = router;