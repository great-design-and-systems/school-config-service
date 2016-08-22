'use strict';
var Theme = require('../entity/theme');
var logger = require('./get-logger');

function execute(themeId, callback) {
	Theme.remove({
        _id: themeId
    }, function(err, result) {
        if (err) {
            logger.error('delete-theme', err);
            callback({
                message: 'Failed deleting themeId ' + themeId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;