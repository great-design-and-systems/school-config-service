'use strict';
var EducationLevel = require('../entity/education-level');
var logger = require('./get-logger');

function execute(params, callback) {
    EducationLevel.find(params, function(err, result) {
        if (err) {
            logger.error('get-education-levels', err);
            callback({
                message: 'Failed to get education levels: ' + params
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;