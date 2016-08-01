'use strict';
var SchoolYear = require('../entity/school-year');

function execute(schoolYearId, callback) {
	SchoolYear.remove({
        _id: schoolYearId
    }, callback);
}

module.exports = execute;