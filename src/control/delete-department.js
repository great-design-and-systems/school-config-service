'use strict';
var Department = require('../entity/department');

function execute(departmentId, callback) {
	Department.remove({
        _id: departmentId
    }, callback);
}

module.exports = execute;