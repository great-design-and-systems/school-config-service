'use strict';

var SchoolSem = require('../entity/school-sem');

function execute(id, update, callback) {
	SchoolSem.update({_id : id}, update, callback);
}

module.exports = execute;