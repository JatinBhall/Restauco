const connection = require('../utils/connection');

function insert(menuItem) {
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO `menu_item`(`title`, `price`, `description`, `imagePath`, `category`) VALUES" + `('${menuItem.title}','${menuItem.price}','${menuItem.description}','${menuItem.imagePath}','${menuItem.category}')`;
        connection.query(sql, (err, result, fields) => {
            if (err) {
                // console.log("insert fail");
                reject("false");
            }
            // console.log("insert pass");
            resolve(true);
        });
    })
};

module.exports = {
    insert,
}