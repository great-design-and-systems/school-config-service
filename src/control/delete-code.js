'use strict';
var Code = require('../entity/code');
var logger = require('./get-logger');

function execute(codeId, callback) {
	Code.remove({
        _id: codeId
    }, function(err, result) {
        if (err) {
            logger.error('delete-code', err);
            callback({
                message: 'Failed deleting codeId ' + codeId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;