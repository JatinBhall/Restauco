const menuModel = require('../models/menuModel');

const logIn = (req, res, next) => {
    let session = req.session;
    if (session.userId) {
        next();
    } else {
        res.redirect('/loginForm');
    }
}

const adminView = async (req, res) => {
    let data = {
        userId: req.session.userId,
    };
    data.focus = 'menu';
    if (req.query.focus) {
        data.focus = req.query.focus;
    }

    try {
        data.menu = { breakFast: await menuModel.readCategory('Breakfast') };
        data.menu.lunch = await menuModel.readCategory('Lunch');
        data.menu.dinner = await menuModel.readCategory('Dinner');
    } catch (error) {
        console.log(error);
    }

    res.render('adminView', { locals: data });
};

const logOut = (req, res) => {
    console.log("in side LogOut");
    req.session.destroy();
    res.redirect('/');
};


module.exports = {
    logIn,
    adminView,
    logOut
};