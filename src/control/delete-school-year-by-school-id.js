'use strict';
var SchoolYear = require('../entity/school-year');
var logger = require('./get-logger');

function execute(schoolId, callback) {
	SchoolYear.remove({
		schoolId: schoolId
    }, function(err, result) {
        if (err) {
            logger.error('delete-school-year-by-school-id', err);
            callback({
                message: 'Failed deleting schoolYear with schoolId ' + schoolId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;