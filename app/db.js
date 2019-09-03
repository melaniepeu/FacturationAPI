var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port     : '3306',
    database : 'facturationdb'
});

module.exports = connection;