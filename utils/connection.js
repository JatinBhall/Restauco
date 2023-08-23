const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6641887',
    database: 'sql6641887',
    password: 'f8NEnuMp1m',
    port : 3306,
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: 'restauco',

});

module.exports = connection;