'use strict';
var EducationLevel = require('../entity/education-level');
var logger = require('./get-logger');

function execute(educationLevel, callback) {
	EducationLevel.create(educationLevel, function(err, created) {
        if (err) {
            logger.error('create-education-level', err);
            callback({
                message: 'Failed creating new education level.'
            });
        } else {
            callback(undefined, created);
        }
    });
}

module.exports = execute;