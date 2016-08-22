'use strict';
var SchoolProfile = require('../entity/school-profile');
var logger = require('./get-logger');

function execute(schoolProfile, callback) {
	SchoolProfile.create(schoolProfile, function(err, created) {
        if (err) {
            logger.error('create-school-profile', err);
            callback({
                message: 'Failed creating new school profile.'
            });
        } else {
            callback(undefined, created);
        }
    });
}

module.exports = execute;