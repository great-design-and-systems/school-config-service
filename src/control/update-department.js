'use strict';

var Department = require('../entity/department');
var logger = require('./get-logger');

function execute(id, update, callback) {
	Department.update({_id : id}, update, function(err, result) {
        if (err) {
            logger.error('update-department', err);
            callback({
                message: 'Failed to update departmentId ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;