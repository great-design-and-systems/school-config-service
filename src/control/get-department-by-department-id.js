'use strict';
var Department = require('../entity/department');
var logger = require('./get-logger');

function execute(departmentId, callback) {
    Department.findById(departmentId, function(err, result) {
        if (err) {
            logger.error('get-department-by-department-id', err);
            callback({
                message: 'Failed to get departmentId ' + departmentId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;