const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12610018',
    database: 'sql12610018',
    password: 'xuCRPbtctA',
    port : 3306,

});

module.exports = connection;