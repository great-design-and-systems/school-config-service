'use strict';

var SchoolYear= require('../entity/school-year');

function execute(condition, update, callback) {
	SchoolYear.update(condition, update, callback);
}

module.exports = execute;