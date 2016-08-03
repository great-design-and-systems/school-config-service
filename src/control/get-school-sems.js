'use strict';
var SchoolSem = require('../entity/school-sem');

function execute(params, callback) {
    SchoolSem.find(params, callback);
}

module.exports = execute;