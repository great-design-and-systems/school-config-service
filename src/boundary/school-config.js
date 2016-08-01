'use strict';
var CreateSchoolProfile = require('../control/create-school-profile');
var UpdateSchoolProfile = require('../control/update-school-profile');
var GetSchoolProfile = require('../control/get-school-profile-by-school-id');
var DeleteSchoolProfile = require('../control/delete-school-profile');
var CreateSchoolYear = require('../control/create-school-year');
var UpdateSchoolYear= require('../control/update-school-year');
var GetSchoolYear = require('../control/get-school-year-by-school-year-id');
var DeleteSchoolYear = require('../control/delete-school-year');
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
    },
	createSchoolYear: function (param, callback) {
		new CreateSchoolYear({
			description: param.description,
			dateStart: param.dateStart,
			dateEnd: param.dateEnd,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    },
    updateSchoolYear: function (schoolYearId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateSchoolYear(schoolYearId, updateParam, callback);
    },
    getSchoolYear: function (schoolYearId, callback) {
        new GetSchoolYear(schoolYearId, function (err, result) {
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
    deleteSchoolYear: function (schoolYearId, callback) {
        new DeleteSchoolYear(schoolYearId, callback);
    }
};