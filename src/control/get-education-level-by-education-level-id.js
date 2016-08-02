'use strict';
var EducationLevel = require('../entity/education-level');

function execute(educationLevelId, callback) {
    EducationLevel.findById(educationLevelId, callback);
}

module.exports = execute;