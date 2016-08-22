'use strict';

var Theme = require('../entity/theme');
var logger = require('./get-logger');

function execute(id, update, callback) {
	Theme.update({_id : id}, update, function(err, result) {
        if (err) {
            logger.error('update-theme', err);
            callback({
                message: 'Failed to update theme ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;