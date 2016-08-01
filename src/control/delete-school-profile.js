'use strict';
var SchoolProfile = require('../entity/school-profile');

function execute(schoolId, callback) {
	SchoolProfile.remove({
        _id: schoolId
    }, callback);
}

module.exports = execute;