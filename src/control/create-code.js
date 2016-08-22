'use strict';
var Code = require('../entity/code');
var logger = require('./get-logger');

function execute(code, callback) {
	Code.create(code, function(err, created) {
        if (err) {
            logger.error('create-code', err);
            callback({
                message: 'Failed creating new code.'
            });
        } else {
            callback(undefined, created);
        }
    });
}

module.exports = execute;