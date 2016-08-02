'use strict';
var CreateSchoolProfile = require('../control/create-school-profile');
var UpdateSchoolProfile = require('../control/update-school-profile');
var GetSchoolProfile = require('../control/get-school-profile-by-school-id');
var DeleteSchoolProfile = require('../control/delete-school-profile');
var CreateSchoolYear = require('../control/create-school-year');
var UpdateSchoolYear= require('../control/update-school-year');
var GetSchoolYear = require('../control/get-school-year-by-school-year-id');
var DeleteSchoolYear = require('../control/delete-school-year');
var CreateSchoolSem = require('../control/create-school-sem');
var UpdateSchoolSem= require('../control/update-school-sem');
var GetSchoolSem = require('../control/get-school-sem-by-school-sem-id');
var DeleteSchoolSem = require('../control/delete-school-sem');
var CreateEducationLevel = require('../control/create-education-level');
var UpdateEducationLevel= require('../control/update-education-level');
var GetEducationLevel = require('../control/get-education-level-by-education-level-id');
var DeleteEducationLevel = require('../control/delete-education-level');
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
    },
	createSchoolSem: function (param, callback) {
		new CreateSchoolSem({
			description: param.description,
			dateStart: param.dateStart,
			dateEnd: param.dateEnd,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    },
    updateSchoolSem: function (schoolSemId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateSchoolSem(schoolSemId, updateParam, callback);
    },
    getSchoolSem: function (schoolSemId, callback) {
        new GetSchoolSem(schoolSemId, function (err, result) {
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
    deleteSchoolSem: function (schoolSemId, callback) {
        new DeleteSchoolSem(schoolSemId, callback);
    },
	createEducationLevel: function (param, callback) {
		new CreateEducationLevel({
			name: param.name,
			description: param.description,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    },
    updateEducationLevel: function (educationLevelId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateEducationLevel(educationLevelId, updateParam, callback);
    },
    getEducationLevel: function (educationLevelId, callback) {
        new GetEducationLevel(educationLevelId, function (err, result) {
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
    deleteEducationLevel: function (educationLevelId, callback) {
        new DeleteEducationLevel(educationLevelId, callback);
    }
};