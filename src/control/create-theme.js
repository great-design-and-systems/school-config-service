'use strict';
var Theme = require('../entity/theme');
var logger = require('./get-logger');

function execute(theme, callback) {
	Theme.create(theme, function(err, created) {
        if (err) {
            logger.error('create-theme', err);
            callback({
                message: 'Failed creating new theme.'
            });
        } else {
            callback(undefined, created);
        }
    });
}

module.exports = execute;