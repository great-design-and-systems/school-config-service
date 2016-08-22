'use strict';
var SchoolSem = require('../entity/school-sem');
var logger = require('./get-logger');

function execute(params, callback) {
    SchoolSem.find(params, function(err, result) {
        if (err) {
            logger.error('get-school-sems', err);
            callback({
                message: 'Failed to get school sems: ' + params
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;