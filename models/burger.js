var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (burgersCol, burgersVal, cb) {
        orm.insertOne("burgers", burgersCol, burgersVal, function (res) {
            // console.log(burgersVal);
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {

            console.log(objColVals);

            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;