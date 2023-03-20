const connection = require('../utils/connection');

function checkStatus(date, category) {
    return new Promise((resolve, reject) => {
        sql = "SELECT `tableNumber` FROM `reservation` WHERE `expectedSlot` = '" + category + "' AND `expctedDate` ='" + date + "'";
        connection.query(sql, (err, result, fields) => {
            if (err) {
                reject(false)
            } else {
                resolve(result);
            }
        });
    })
}

function insertCustomer(data) {
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO `customer`(`name`, `email`, `phone`, `numberOfGuest`) VALUES " + `('${data.name}','${data.email}','${data.phone}',${data.numberOfGuest});`;
        connection.query(sql, (err, result, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.insertId);
            }
        });
    })
};
function insertReservation(data) {
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO `reservation`(`tableNumber`,  `expctedDate`, `expectedSlot`, `customerId`, `message`) VALUES " + `(${data.tableNumber},'${data.date}','${data.category}',${data.insertId},'${data.message}')`;
        connection.query(sql, (err, result, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
};

module.exports = {
    checkStatus,
    insertCustomer,
    insertReservation
};