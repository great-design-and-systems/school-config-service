'use strict';

var SchoolProfile = require('../entity/school-profile');

function execute(id, update, callback) {
	SchoolProfile.update({_id : id}, update, callback);
}

module.exports = execute;