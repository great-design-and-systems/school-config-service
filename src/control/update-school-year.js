'use strict';

var SchoolYear= require('../entity/school-year');
var logger = require('./get-logger');

function execute(id, update, callback) {
	SchoolYear.update({_id : id}, update, function(err, result) {
        if (err) {
            logger.error('update-school-year', err);
            callback({
                message: 'Failed to update school year ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
}

module.exports = execute;