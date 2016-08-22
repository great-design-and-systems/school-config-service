'use strict';

var SchoolSem = require('../entity/school-sem');
var logger = require('./get-logger');

function execute(id, update, callback) {
	SchoolSem.update({_id : id}, update, function(err, result) {
        if (err) {
            logger.error('update-school-sem', err);
            callback({
                message: 'Failed to update school sem ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;