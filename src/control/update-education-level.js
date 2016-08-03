'use strict';

var EducationLevel = require('../entity/education-level');

function execute(id, update, callback) {
	EducationLevel.update({_id : id}, update, callback);
}

module.exports = execute;