const path = require('path');
const menuModel = require('../models/menuModel');
const rootPath = (path.dirname(process.mainModule.filename));
const imageRelativePath = rootPath + '/public/images/menu/';

const insert = async (req, res) => {
    if (req.params.userId) {
        let result;
        try {
            result = await menuModel.readMenu(req.params.userId);
            result.focus = "update"
        } catch (error) {
            console.log(error);
        }
        res.render('menuInsertEdit', { locals: result });
    } else {
        res.render('menuInsertEdit', { locals: null });
    }
};

const insertDB = async (req, res) => {
    let { image } = req.files;
    let menuItem = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        imagePath: imageRelativePath + image.name,
        imageName: image.name,
    };
    let validation = {
        success: true,
    }

    try {
        if ((menuItem.title == null) || (menuItem.title == "")) {
            validation.success = false;
            validation.title = { errMessage: `Invalid Input,It's empty` };
        } else {
            validation.title = { errMessage: `` };
        }

        let amount = Number(menuItem.price);
        if ((menuItem.price == "") || (amount <= 0)) {
            validation.success = false;
            validation.price = { errMessage: `Invalid amount` };
        } else {
            validation.price = { errMessage: `` };
        }

        // Allowing file type
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(menuItem.imagePath)) {
            validation.success = false;
            validation.image = { errMessage: `Invalid file path` };
        } else {
            validation.image = { errMessage: `` };
        }

    } catch (err) {
        console.log(err);
        validation.success = false;
    }

    try {
        if (!validation.success) {
            throw "Invalid Inputs. Try Again ☺.";
        }
        try {
            image.mv(menuItem.imagePath);
            await menuModel.insert(menuItem);
        } catch (err) {
            console.log(err);
            throw "Something went wrong try Again ☺ ";
        }
        res.redirect("/adminLogin/adminView?focus" + 'menu');
    } catch (err) {
        console.log(err);
        validation.errMessage = err;
        validation.menuItem = {
            title: menuItem.title,
            price: menuItem.price,
            category: menuItem.category,
            description: menuItem.description
        }
        let locals = JSON.stringify(validation);
        res.render('menuInsertEdit', { locals: locals });
    }


};

const update = async (req, res) => {
    let locals;
    try {
        // locals = await menuModel. 
    } catch (err) {
        console.log(err);
    }
    res.redirect('')
};

const deleteItem = async (req, res) => {
    let result;
    try {
        result = await menuModel.deleteItem(req.params.userId);
    } catch (err) {
        console.log();
    }
    res.redirect('/adminLogin/adminView?focus' + 'menu');

};

module.exports = {
    insert,
    insertDB,
    update,
    deleteItem
};