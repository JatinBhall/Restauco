const mysql = require('mysql');
const sessionConnection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12608595',
    database: 'sql12608595',
    password: '51XT2rGqLR',
});

module.exports = sessionConnection;