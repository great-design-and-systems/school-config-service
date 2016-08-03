'use strict';

var Department = require('../entity/department');

function execute(id, update, callback) {
	Department.update({_id : id}, update, callback);
}

module.exports = execute;