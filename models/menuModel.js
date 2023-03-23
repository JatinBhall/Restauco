const { connect } = require('../utils/connection');
const connection = require('../utils/connection');

function insert(menuItem) {
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO `menu_item`(`title`, `price`, `description`, `imageName`, `category`) VALUES" + `('${menuItem.title}','${menuItem.price}','${menuItem.description}','${menuItem.imageName}','${menuItem.category}')`;
        connection.query(sql, (err, result, fields) => {
            if (err) {
                // console.log("insert fail");
                reject("false");
            }
            // console.log("insert pass");
            resolve(result);
        });
    })
};

function readCategory(category) {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT `itemId`, `title`, `price`, `description`, `imageName`, `category` FROM `menu_item` WHERE `category`="' + category + '" ORDER by  `itemId` DESC';
        connection.query(sql, (err, result, fields) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
}

function deleteItem(itemId) {
    return new Promise((resolve, reject) => {
        let sql = "DELETE FROM `menu_item` WHERE `itemId` = ?";
        connection.query(sql, itemId, (err, result, fields) => {
            if (err) {
                reject(`delete menu item error, inside ${__dirname + __filename}`)
            } else if (result.affectedRows == 1) {
                resolve(result);
            } else {
                reject(`delete menu item error, inside ${__dirname + __filename}`)
            }
        });
    })
}

function readMenu(userId) {
    return new Promise((resolve, reject) => {
        sql = 'SELECT * FROM `menu_item` WHERE `itemId`= ? ';
        connection.query(sql, userId,(err,result,fields)=>{
            if(err){
                reject(err);
            }else if(result.length == 1){
                resolve(result);
            }else{
                reject('menu item not found in database.');
            }
        });
    })

}

module.exports = {
    insert,
    readCategory,
    deleteItem,
    readMenu,
}