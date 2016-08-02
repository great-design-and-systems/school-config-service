'use strict';
var EducationLevel = require('../entity/education-level');

function execute(educationLevelId, callback) {
	EducationLevel.remove({
        _id: educationLevelId
    }, callback);
}

module.exports = execute;