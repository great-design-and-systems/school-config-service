'use strict';
var SchoolYear = require('../entity/school-year');

function execute(schoolYear, callback) {
	SchoolYear.create(schoolYear, callback);
}

module.exports = execute;