var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'be9uokie3lhefdpnj3ss-mysql.services.clever-cloud.com',
    user     : 'urgbcj8tzeyizrf6',
    password : '7PTzCmXh2uoN4jVOkdKe',
    port     : '3306',
    database : 'be9uokie3lhefdpnj3ss'
});

module.exports = connection;