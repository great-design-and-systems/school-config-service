'use strict';
var SchoolSem = require('../entity/school-sem');
var logger = require('./get-logger');

function execute(schoolSemId, callback) {
    SchoolSem.findById(schoolSemId, function(err, result) {
        if (err) {
            logger.error('get-school-sem-by-school-sem-id', err);
            callback({
                message: 'Failed to get schoolSemId ' + schoolSemId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;