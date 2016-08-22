'use strict';
var SchoolYear= require('../entity/school-year');
var logger = require('./get-logger');

function execute(params, callback) {
    SchoolYear.find(params, function(err, result) {
        if (err) {
            logger.error('get-school-years', err);
            callback({
                message: 'Failed to get school year:  ' + params
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;