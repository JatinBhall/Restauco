const path = require('path');
const rootPath = (path.dirname(process.mainModule.filename));
const imageRelativePath = rootPath + '/public/images/';

const insert = (req, res) => {
    console.log("menu insert");
    res.render('menuInsertEdit');
};

const insertDB = (req, res) => {
    let title = req.body.title;
    let price = req.body.price;
    let category = req.body.category;
    const { image } = req.files;
    let description = req.body.description;

    image.mv(imageRelativePath + image.name)
};

const update = (req, res) => { console.log('menu update'); };
const deleteItem = (req, res) => { console.log('menu delete'); };

module.exports = {
    insert,
    insertDB,
    update,
    deleteItem
};