const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12608063',
    database: 'sql12608063',
    password: 'g3FjXbVzNB',
});

module.exports = connection;