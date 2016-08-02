'use strict';

var SchoolSem = require('../entity/school-sem');

function execute(condition, update, callback) {
	SchoolSem.update(condition, update, callback);
}

module.exports = execute;