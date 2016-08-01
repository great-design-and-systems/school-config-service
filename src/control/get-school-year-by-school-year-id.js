'use strict';
var SchoolYear= require('../entity/school-year');

function execute(schoolYearId, callback) {
    SchoolYear.findById(schoolYearId, callback);
}

module.exports = execute;