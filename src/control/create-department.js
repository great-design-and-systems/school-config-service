'use strict';
var Department = require('../entity/department');
var logger = require('./get-logger');

function execute(department, callback) {
	Department.create(department, function(err, created) {
        if (err) {
            logger.error('create-department', err);
            callback({
                message: 'Failed creating new department.'
            });
        } else {
            callback(undefined, created);
        }
    });
}

module.exports = execute;