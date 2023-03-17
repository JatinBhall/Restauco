const adminModel = require('../models/adminModel');

const login = async function (req, res) {
    console.log("in controller / login 1");
    let userId = req.body.userId;
    let password = req.body.password;
    let areValid = await adminModel.areValidCredentials(userId, password);

    if (areValid) {
        let adminData
        try {
            adminData = await adminModel.read(userId);
        } catch (err) {
            console.log('err');
        }
        console.log("in controller / login valid credentails");
        res.render('adminView', adminData[0].name);
    }
    console.log("in controller / login  invaid");
    res.render('home');
};

module.exports = login;