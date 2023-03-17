const adminModel = require('../models/adminModel');

const login = async function (req, res) {
    console.log("in controller / login 1");
    let userId = req.body.userId;
    let password = req.body.password;
    let areValid;
    try {
        areValid = await adminModel.areValidCredentials(userId, password);
    } catch (err) {
        console.log("inside controllers/login.js  arevlidCredentials  " + err);
    }
    if (areValid) {
        let adminData
        try {
            adminData = await adminModel.read(userId);
        } catch (err) {
            console.log("inside controllers/login.js  read   " + err);
        }
        req.session.userId = userId;
        res.redirect('/adminLogin');
    } else {
        req.session.userId = false;
        res.render('home');
    }
};

module.exports = login;