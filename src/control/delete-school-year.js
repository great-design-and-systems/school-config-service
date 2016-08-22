'use strict';
var SchoolYear = require('../entity/school-year');
var logger = require('./get-logger');

function execute(schoolYearId, callback) {
	SchoolYear.remove({
        _id: schoolYearId
    }, function(err, result) {
        if (err) {
            logger.error('delete-school-year', err);
            callback({
                message: 'Failed deleting schoolYearId ' + schoolYearId
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;