const adminModel = require('../models/adminModel');

const logIn = (req, res, next) => {
    let session = req.session;
    if (session.userId) {
        next();
    } else {
        res.redirect('/loginForm');
    }
}

const adminView = (req, res) => {
    res.render('adminView', { name: req.session.userId });
};

const logOut = (req, res) => {
    console.log("in side LG");
    req.session.destroy();
    res.redirect('/');
};


module.exports = {
    logIn,
    adminView,
    logOut
};