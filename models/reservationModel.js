const { resolve } = require('path');
const connection = require('../utils/connection');

function checkStatus(date, category) {
    return new Promise((resolve, reject) => {
        sql = "SELECT `tableNumber` FROM `reservation` WHERE `expectedSlot` = '" + category + "' AND `expectedDate` ='" + date + "'";
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
        let sql = "INSERT INTO `reservation`(`tableNumber`,  `expectedDate`, `expectedSlot`, `customerId`, `message`) VALUES " + `(${data.tableNumber},'${data.date}','${data.category}',${data.insertId},'${data.message}')`;
        connection.query(sql, (err, result, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
};

function bookingStatus() {
    return new Promise((resolve, reject) => {
        let sql = "SELECT `customer`.`name`,`customer`.`phone` ,`reservation`.`tableNumber`, `reservation`.`expectedDate`, `reservation`.`expectedSlot` , `reservation`.`message` ,`reservation`.`id` FROM `customer`  inner join  `reservation`  on `customer`.`customerId` = `reservation`.`customerId`";
        connection.query(sql, (err, result, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });

}

function deleteBooking(id) {
    return new Promise((resolve, reject) => {
        sql = "DELETE FROM `reservation` WHERE `id` = ? ";
        connection.query(sql, id, (err, result) => {
            if (err) {
                reject(err);
            } else if (result.affectedRows == 1) {
                resolve(result);
            } else {
                reject(`delete reservation item error, inside ${__dirname + __filename}`);
            }
        });
    });
}

module.exports = {
    checkStatus,
    insertCustomer,
    insertReservation,
    bookingStatus,
    deleteBooking,
};