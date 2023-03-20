const path = require('path');
const menuModel = require('../models/menuModel');
const rootPath = (path.dirname(process.mainModule.filename));
const imageRelativePath = rootPath + '/public/images/menu';

const insert = (req, res) => {
    console.log("menu insert");
    res.render('menuInsertEdit');
};

const insertDB = async (req, res) => {
    let { image } = req.files;
    let menuItem = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        imagePath: imageRelativePath + image.name,
    };
    image.mv(menuItem.imagePath);
    let success;
    try {
        success = await menuModel.insert(menuItem);
    } catch (err) {
        console.log(err);
    }
    if (success) {
        res.render('adminView', { name: req.session.userId, focus: "menu" });
    } else {
        res.render('home');
    }
};

const update = (req, res) => { console.log('menu update'); };
const deleteItem = (req, res) => { console.log('menu delete'); };

module.exports = {
    insert,
    insertDB,
    update,
    deleteItem
};