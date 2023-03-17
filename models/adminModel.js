const connection = require('../utils/connection');

function read(userId) {
    return new Promise((resolve, reject) => {
        let sql = "select `name` from `admin` where `userId` = '" + userId + "'";
        connection.query(sql, (err, result, fields) => {
            if (result.length == 1) {
                resolve(result);
            } else {
                reject(false);
            }
        });
    });

}

function areValidCredentials(userId, password) {
    return new Promise((resolve, reject) => {
        let sql = 'select * from `admin` where  userId = ?';
        connection.query(sql, userId, (err, result, fields) => {
            if (result.length == 1 && result[0].password == password) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });


}

module.exports = {
    read,
    areValidCredentials,
}