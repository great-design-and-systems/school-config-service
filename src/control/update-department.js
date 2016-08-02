'use strict';

var Department = require('../entity/department');

function execute(condition, update, callback) {
	Department.update(condition, update, callback);
}

module.exports = execute;