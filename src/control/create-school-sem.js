'use strict';
var SchoolSem = require('../entity/school-sem');
var logger = require('./get-logger');

function execute(schoolSem, callback) {
	SchoolSem.create(schoolSem, function(err, created) {
        if (err) {
            logger.error('create-school-sem', err);
            callback({
                message: 'Failed creating new school sem.'
            });
        } else {
            callback(undefined, created);
        }
    });
}

module.exports = execute;