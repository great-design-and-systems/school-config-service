'use strict';
var SchoolProfile = require('../entity/school-profile');

function execute(schoolProfile, callback) {
	SchoolProfile.create(schoolProfile, callback);
}

module.exports = execute;