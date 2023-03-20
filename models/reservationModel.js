const connection = require('../utils/connection');

function checkStatus(date, category) {
    return new Promise((resolve, reject) => {
        sql = "SELECT `tableNumber` FROM `reservation` WHERE `category` = '" + category + "' AND `date = `'" + date + "'";
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
        let sql = "INSERT INTO `customer`(`name`, `email`, `phone`, `numberOfGuest`) VALUES " + `('${data.name}','${data.email}','${data.phone}',${data.nunberOfGuest})`;
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
        let sql = "INSERT INTO `reservation`(`tableNumber`,  `expctedDate`, `expectedSlot`, `customerId`) VALUES " + `(${data.tableNumber},'${data.date}','${data.category}',${data.insertId})`;
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