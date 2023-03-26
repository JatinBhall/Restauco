const fs = require("fs");
const path = require('path');
const menuModel = require('../models/menuModel');
const rootPath = (path.dirname(process.mainModule.filename));
const imageRelativePath = rootPath + '/public/images/menu/';

const insertEdit = async (req, res) => {
    let result = {};
    if (req.params.focus == "update") {
        try {
            result.itemData = await menuModel.readMenu(req.params.userId);
            result.focus = "update";
            result.display = 'data';
            result.userId = req.params.userId;
        } catch (error) {
            console.log(error);
        }
        res.render('menuInsertEdit', { locals: result });
    } else {
        result.focus = 'insert';
        res.render('menuInsertEdit', { locals: result });
    }
};

const insertDB = async (req, res) => {
    try {
        var { image } = req.files;
    } catch (err) {
        console.log(err);
    }
    let menuItem = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        imagePath: imageRelativePath + image.name,
        imageName: image.name,
    };
    let validation = {
        focus: 'insert',
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
        req.session.focus = 'menu';
        res.redirect("/adminLogin/adminView");
    } catch (err) {
        console.log(err);
        validation.errMessage = err;
        validation.menuItem = {
            title: menuItem.title,
            price: menuItem.price,
            category: menuItem.category,
            description: menuItem.description
        }
        console.log(validation);
        res.render('menuInsertEdit', { locals: validation });
    }


};

const updateDB = async (req, res) => {
    try {
        var { image } = req.files;
    } catch (err) {
        console.log(err);
    }
    let menuItem = {
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        imagePath: imageRelativePath + image.name,
        imageName: image.name,
    };
    let validation = {
        focus: 'update',
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
            let result = await menuModel.readMenu(req.params.userId);
            fs.unlink(imageRelativePath + result[0].imageName, (err) => {
                if (err) {
                    console.log("Could not delete the file. " + err);
                } else {
                    console.log("File is deleted");
                }
            });
            await menuModel.deleteItem(req.params.userId);
        } catch (err) {
            console.log();
        }
        try {
            image.mv(menuItem.imagePath);
            await menuModel.insert(menuItem);
        } catch (err) {
            console.log(err);
            throw "Something went wrong try Again ☺ ";
        }
        req.session.focus = 'menu';
        res.redirect("/adminLogin/adminView");
    } catch (err) {
        console.log(err);
        validation.errMessage = err;
        validation.userId = 0;
        validation.menuItem = {
            title: menuItem.title,
            price: menuItem.price,
            category: menuItem.category,
            description: menuItem.description
        }
        res.render('menuInsertEdit', { locals: validation });
    }
};

const deleteItem = async (req, res) => {
    try {
        let result = await menuModel.readMenu(req.params.userId);
        fs.unlink(imageRelativePath + result[0].imageName, (err) => {
            if (err) {
                console.log("Could not delete the file. " + err);
            } else {
                console.log("File is deleted");
            }
        });
        await menuModel.deleteItem(req.params.userId);
    } catch (err) {
        console.log();
    }
    res.redirect('/adminLogin/adminView');

};

module.exports = {
    insertEdit,
    insertDB,
    updateDB,
    deleteItem
};