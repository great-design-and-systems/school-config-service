'use strict';
var Department = require('../entity/department');
var logger = require('./get-logger');

function execute(params, callback) {
    Department.find(params, function(err, result) {
        if (err) {
            logger.error('get-departments', err);
            callback({
                message: 'Failed to get departments: ' + params
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;