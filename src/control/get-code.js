'use strict';
var Code = require('../entity/code');
var logger = require('./get-logger');

function execute(params, callback) {
    Code.findOne(params, function(err, result) {
        if (err) {
            logger.error('get-code', err);
            callback({
                message: 'Failed to get code ' + params
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;