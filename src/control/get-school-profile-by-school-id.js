'use strict';
var SchoolProfile = require('../entity/school-profile');
var logger = require('./get-logger');

function execute(schoolId, callback) {
    SchoolProfile.findById(schoolId, function(err, result) {
        if (err) {
            logger.error('get-school-profile-by-school-id', err);
            callback({
                message: 'Failed to get schoolId ' + schoolId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;