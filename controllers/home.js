const menuModel = require('../models/menuModel');

const homeView =async (req, res) => {
    let data = {};
    try {
        data.menu = { breakFast: await menuModel.readCategory('Breakfast') };
        data.menu.lunch = await menuModel.readCategory('Lunch');
        data.menu.dinner = await menuModel.readCategory('Dinner');
    } catch (error) {
        console.log(error);
    }
    // console.log(data);
    res.render('home', { locals: data });
};

module.exports = homeView;