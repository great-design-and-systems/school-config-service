'use strict';

var SchoolYear= require('../entity/school-year');

function execute(id, update, callback) {
	SchoolYear.update({_id : id}, update, callback);
}

module.exports = execute;