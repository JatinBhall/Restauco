const adminModel = require('../models/adminModel');

const adminLogin = function (req, res) {
    let session = req.session;
    if (session.userId) {
        let adminData = adminModel.read(session.userId);
        res.render('adminView', adminData);
    } else {
        res.redirect('/loginForm');
    }
}

module.exports = adminLogin;