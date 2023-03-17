const adminModel = require('../models/adminModel');

const adminLogin = function (req, res) {
    let session = req.session;
    if (session.userId) {
        console.log("passssss");
        console.log(session.userId);
        // let adminData = adminModel.read(session.userId);
        res.render('adminView');
    } 
    // else {
        console.log("failssss");
        res.redirect('/loginForm');
    // }
}

module.exports = adminLogin;