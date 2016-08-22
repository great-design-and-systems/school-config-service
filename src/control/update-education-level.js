'use strict';

var EducationLevel = require('../entity/education-level');
var logger = require('./get-logger');

function execute(id, update, callback) {
	EducationLevel.update({_id : id}, update, function(err, result) {
        if (err) {
            logger.error('update-education-level', err);
            callback({
                message: 'Failed to update educationLevelId ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;