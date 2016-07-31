'use strict';
var SchoolProfile = require('../entity/school-profile');

function execute(schoolId, callback) {
    SchoolProfile.findById(schoolId, callback);
}

module.exports = execute;