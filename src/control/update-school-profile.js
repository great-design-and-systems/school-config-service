'use strict';

var SchoolProfile = require('../entity/school-profile');

function execute(condition, update, callback) {
	SchoolProfile.update(condition, update, callback);
}

module.exports = execute;