const express = require('express');
const router = express.Router();
const menu = require('../controllers/adminMenu')

router.get('/insert/:focus/:userId', menu.insertEdit);
router.post('/insertDB/:userId', menu.insertDB);
router.post('/updateDB/:userId', menu.updateDB);
router.all('/delete/:userId', menu.deleteItem);

module.exports = router;