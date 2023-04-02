const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'databases.000webhost.com',
    user: 'id19557630_jatinbhall',
    database: 'id19557630_restauco',
    password: '*-9OJnPARU6Wr^@s',

});

module.exports = connection;