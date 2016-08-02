'use strict';
var SchoolSem = require('../entity/school-sem');

function execute(schoolSemId, callback) {
	SchoolSem.remove({
        _id: schoolSemId
    }, callback);
}

module.exports = execute;