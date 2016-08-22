'use strict';
var Code = require('../entity/code');
var logger = require('./get-logger');

function execute(params, callback) {
    Code.find(params, function(err, result) {
        if (err) {
            logger.error('get-codes', err);
            callback({
                message: 'Failed to get code records: ' + params
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;