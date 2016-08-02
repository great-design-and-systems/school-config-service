'use strict';
var EducationLevel = require('../entity/education-level');

function execute(educationLevel, callback) {
	EducationLevel.create(educationLevel, callback);
}

module.exports = execute;