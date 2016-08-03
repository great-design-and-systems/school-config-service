'use strict';
var Department = require('../entity/department');

function execute(params, callback) {
    Department.find(params, callback);
}

module.exports = execute;