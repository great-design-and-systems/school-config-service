'use strict';

var SchoolProfile = require('../entity/school-profile');
var logger = require('./get-logger');

function execute(id, update, callback) {
	SchoolProfile.update({_id : id}, update, function(err, result) {
        if (err) {
            logger.error('update-school-profile', err);
            callback({
                message: 'Failed to update school profile ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;