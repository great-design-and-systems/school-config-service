'use strict';
var EducationLevel = require('../entity/education-level');
var logger = require('./get-logger');

function execute(educationLevelId, callback) {
    EducationLevel.findById(educationLevelId, function(err, result) {
        if (err) {
            logger.error('get-education-level-by-education-level-id', err);
            callback({
                message: 'Failed to get educationLevelId ' + educationLevelId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;