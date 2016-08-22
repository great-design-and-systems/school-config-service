'use strict';

var Code = require('../entity/code');
var logger = require('./get-logger');

function execute(id, update, callback) {
	Code.update({_id : id}, update, function(err, result) {
        if (err) {
            logger.error('update-code', err);
            callback({
                message: 'Failed to update codeId ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;