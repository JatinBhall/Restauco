const menuModel = require('../models/menuModel');
const adminModel = require('../models/adminModel');
const reservationModel = require('../models/reservationModel');

const logIn = async (req, res, next) => {
    let userId = req.session.user;
    if (userId) {
        // try {
            // let result = await adminModel.read(userId);
            // if (result[0].userId == userId) {
                next('route');
            // } else {
                // res.redirect('/loginForm');
            // }
        // } catch (error) {
        //     console.log('at session check');
        //     console.log(error);
        // }
        // res.redirect('/loginForm');
    } else {
        res.redirect('/loginForm');
    }
}

const adminView = async (req, res) => {
    let data = {
        userId: req.session.user,
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
    req.session.userId = null;
    req.session.save(function (err) {
        if (err) next(err)
        req.session.regenerate(function (err) {
            if (err) next(err)
            res.redirect('/')
        })
    })
};


module.exports = {
    logIn,
    adminView,
    logOut
};