// // Set up MySQL connection.
// var mysql = require("mysql");

// // set up connection to port and database
// var connection = mysql.createConnection({
//   port: 8889,
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgerStyle_db"
// });

// // Make connection.
// function handleDisconnect(connection) {
//   connection.on('error', function(err) {
//     if (!err.fatal) {
//       return;
//     }

//     if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
//       throw err;
//     }

//     console.log('Re-connecting lost connection: ' + err.stack);

//     connection = mysql.createConnection(connection.config);
//     handleDisconnect(connection);
//     connection.connect();
//   });
// }

// handleDisconnect(connection);

// // Export connection for our ORM to use.
// module.exports = connection;


var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root', // Add your password
    database : 'burgerStyle_db' // Add your database
  });
}


// Export the Connection
module.exports = connection;