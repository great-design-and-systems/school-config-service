'use strict';
var Department = require('../entity/department');
var logger = require('./get-logger');

function execute(departmentId, callback) {
	Department.remove({
        _id: departmentId
    }, function(err, result) {
        if (err) {
            logger.error('delete-department', err);
            callback({
                message: 'Failed deleting departmentId ' + departmentId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;