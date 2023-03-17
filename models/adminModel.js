const connection = require('../utils/connection');

function read(userId) {
    return new Promise((resolve, reject) => {
        console.log(userId);
        let conn = connection.getConnection();
        let sql = 'select `name` from `admin` where `userId` = ?';
        conn.query(sql, userId, (err, result, fields) => {
            console.log("continue");
            if (result.length == 1) {
                conn.end();
                console.log("done");
                resolve(result);
            } else {
                conn.end();
                reject(false);
            }
        });
    });

}

function areValidCredentials(userId, password) {
    return new Promise((resolve, reject) => {
        let conn = connection.getConnection();
        let sql = 'select * from `admin` where  userId = ?';
        conn.query(sql, userId, (err, result, fields) => {
            if (result.length == 1 && result[0].password == password) {
                conn.end();
                resolve(true);
            } else {
                conn.end();
                reject(false);
            }
        });
    });


}

module.exports = {
    read,
    areValidCredentials,
}