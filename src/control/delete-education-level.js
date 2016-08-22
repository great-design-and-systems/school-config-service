'use strict';
var EducationLevel = require('../entity/education-level');
var logger = require('./get-logger');

function execute(educationLevelId, callback) {
	EducationLevel.remove({
        _id: educationLevelId
    }, function(err, result) {
        if (err) {
            logger.error('delete-education-level', err);
            callback({
                message: 'Failed deleting educationLevelId ' + educationLevelId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;