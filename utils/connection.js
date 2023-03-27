const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12608063',
    database: 'sql12608063',
    password: 'g3FjXbVzNB',
    port : 3306,

});

module.exports = connection;