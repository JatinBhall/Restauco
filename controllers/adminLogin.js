const menuModel = require('../models/menuModel');
const reservationModel = require('../models/reservationModel');

const logIn = (req, res, next) => {
    if (req.session.userId) {
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
    if (req.session.focus == 'customer') {
        data.focus = 'customer';
    }

    try {
        data.menu = { breakFast: await menuModel.readCategory('Breakfast') };
        data.menu.lunch = await menuModel.readCategory('Lunch');
        data.menu.dinner = await menuModel.readCategory('Dinner');
        data.bookingStatus = await reservationModel.bookingStatus();
        for (let i = 0; i < data.bookingStatus.length; i++) {
            let str = String(data.bookingStatus[i].expectedDate);
            data.bookingStatus[i].expectedDate = str.slice(0, 15);
        }
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