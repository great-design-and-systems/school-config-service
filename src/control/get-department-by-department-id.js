'use strict';
var Department = require('../entity/department');

function execute(departmentId, callback) {
    Department.findById(departmentId, callback);
}

module.exports = execute;