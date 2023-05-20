const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12619635',
    database: 'sql12619635',
    password: 'WYefAV2C5J',
    port : 3306,
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: 'restauco',

});

module.exports = connection;