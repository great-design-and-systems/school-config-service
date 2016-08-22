'use strict';
var Theme = require('../entity/theme');
var logger = require('./get-logger');

function execute(themeId, callback) {
    Theme.findById(themeId, function(err, result) {
        if (err) {
            logger.error('get-theme-by-theme-id', err);
            callback({
                message: 'Failed to get themeId ' + themeId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;