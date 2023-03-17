const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Restauco'
});

module.exports = {
    getConnection() {
        connection.connect();
        return connection;
    }
};