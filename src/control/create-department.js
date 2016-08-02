'use strict';
var Department = require('../entity/department');

function execute(department, callback) {
	Department.create(department, callback);
}

module.exports = execute;