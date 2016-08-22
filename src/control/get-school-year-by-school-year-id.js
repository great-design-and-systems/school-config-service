'use strict';
var SchoolYear= require('../entity/school-year');
var logger = require('./get-logger');

function execute(schoolYearId, callback) {
    SchoolYear.findById(schoolYearId, function(err, result) {
        if (err) {
            logger.error('get-school-year-by-school-year-id', err);
            callback({
                message: 'Failed to get schoolYearId ' + schoolYearId
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;