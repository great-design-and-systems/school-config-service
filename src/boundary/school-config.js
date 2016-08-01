'use strict';
var CreateSchoolProfile = require('../control/create-school-profile');
var UpdateSchoolProfile = require('../control/update-school-profile');
var GetSchoolProfile = require('../control/get-school-profile-by-school-id');
var DeleteSchoolProfile = require('../control/delete-school-profile');
module.exports = {
	createSchoolProfile: function (param, callback) {
		new CreateSchoolProfile({
			name: param.name,
			address: param.address,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    },
    updateSchoolProfile: function (schoolId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateSchoolProfile(schoolId, updateParam, callback);
    },
    getSchoolProfile: function (schoolId, callback) {
        new GetSchoolProfile(schoolId, function (err, result) {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(true, null);
        		}
        	}
        });
    },
    deleteSchoolProfile: function (schoolId, callback) {
        new DeleteSchoolProfile(schoolId, callback);
    }
};