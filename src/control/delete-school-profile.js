'use strict';
var SchoolProfile = require('../entity/school-profile');
var DeleteSchoolYearBySchoolId = require('./delete-school-year-by-school-id');
var logger = require('./get-logger');

function execute(schoolId, callback) {
	SchoolProfile.remove({
        _id: schoolId
    }, function(err, result) {
        if (err) {
            logger.error('delete-school-profile', err);
            callback({
                message: 'Failed deleting schoolId ' + schoolId
            });
        } else {
        	new DeleteSchoolYearBySchoolId(schoolId, callback);
        }
    });
}

module.exports = execute;