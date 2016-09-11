'use strict';
var Code = require('../entity/code');
var logger = require('./get-logger');

function execute(schoolId, callback) {
	Code.remove({
		schoolId: schoolId
    }, function(err, result) {
        if (err) {
            logger.error('delete-code-by-school-id', err);
            callback({
                message: 'Failed deleting code with schoolId ' + schoolId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;