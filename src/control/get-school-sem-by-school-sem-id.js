'use strict';
var SchoolSem = require('../entity/school-sem');

function execute(schoolSemId, callback) {
    SchoolSem.findById(schoolSemId, callback);
}

module.exports = execute;