'use strict';
var SchoolSem = require('../entity/school-sem');
var logger = require('./get-logger');

function execute(schoolSemId, callback) {
	SchoolSem.remove({
        _id: schoolSemId
    }, function(err, result) {
        if (err) {
            logger.error('delete-school-sem', err);
            callback({
                message: 'Failed deleting schoolSemId ' + schoolSemId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;