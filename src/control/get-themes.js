'use strict';
var Theme = require('../entity/theme');
var logger = require('./get-logger');

function execute(params, callback) {
    Theme.find(params, function(err, result) {
        if (err) {
            logger.error('get-themes', err);
            callback({
                message: 'Failed to get themes: ' + params
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;