var connection = require("./connection.js");

connection.connect(function (err) {

    if (err) {
        console.error('error connecting to database: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);

});

var orm = {

    // select from burgers table
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // insert burger name and timestamp
    insertOne: function (burger_name, callback) {
        var d = new Date();
        var timestamp = '' + d.getFullYear() + '-'; 
        var month = '' + (d.getMonth() + 1); 

        // month
        if (month.length == 1) {
            month = '0' + month;
        }
        timestamp += month + '-';

        // day
        var day = '' + d.getDate(); 
        if (day.length == 1) {
            day = '0' + day;
        }
        timestamp += day + ' ';

        // hour
        var hour = '' + d.getHours(); 
        if (hour.length == 1) {
            hour = '0' + hour;
        }
        timestamp += hour + ':';
        
        // minute
        var minute = '' + d.getMinutes();
        if (minute.length == 1) {
            minute = '0' + minute;
        }
        timestamp += minute + ':';

        // second
        var second = '' + d.getSeconds(); 
        if (second.length == 1) {
            second = '0' + second;
        }
        timestamp += second;
        
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false,
            date: timestamp
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    // updateOne() updates burger ID
    updateOne: function (burgerID, callback) {

        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }], function (err, result) {
            if (err) throw err;
            callback(result);
        });

    }

};

// Export the ORM object in module.exports.
module.exports = orm;


