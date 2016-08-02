'use strict';
var SchoolSem = require('../entity/school-sem');

function execute(schoolSem, callback) {
	SchoolSem.create(schoolSem, callback);
}

module.exports = execute;