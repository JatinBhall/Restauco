const menuModel = require('../models/menuModel');

const menuView = async (req, res) => {
    let data = {};
    try {
        data.menu = { breakFast: await menuModel.readCategory('Breakfast') };
        data.menu.lunch = await menuModel.readCategory('Lunch');
        data.menu.dinner = await menuModel.readCategory('Dinner');
    } catch (error) {
        console.log(error);
    }
    res.render('menu', { locals: data });
}

module.exports = menuView;