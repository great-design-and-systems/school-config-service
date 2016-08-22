'use strict';
var SchoolYear = require('../entity/school-year');
var logger = require('./get-logger');

function execute(schoolYear, callback) {
	SchoolYear.create(schoolYear, function(err, created) {
        if (err) {
            logger.error('create-school-year', err);
            callback({
                message: 'Failed creating new school year.'
            });
        } else {
            callback(undefined, created);
        }
    });
}

module.exports = execute;