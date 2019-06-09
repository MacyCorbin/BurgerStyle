// Dependency
var orm = require('../config/orm.js');


// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

    // select all
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    // insert into burger_name
    insertOne: function (burger_name, callback) {
        orm.insertOne(burger_name, function (res) {
            callback(res);
        });
    },

    // update burger_id
    updateOne: function (burger_id, callback) {
        orm.updateOne(burger_id, function (res) {
            callback(res);
        });
    }

};


// Export at the end of the modelBurger.js file.
module.exports = burger;