'use strict';

var EducationLevel = require('../entity/education-level');

function execute(condition, update, callback) {
	EducationLevel.update(condition, update, callback);
}

module.exports = execute;