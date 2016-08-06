'use strict';
var CreateSchoolProfile = require('../control/create-school-profile');
var UpdateSchoolProfile = require('../control/update-school-profile');
var GetSchoolProfile = require('../control/get-school-profile-by-school-id');
var DeleteSchoolProfile = require('../control/delete-school-profile');
var CreateSchoolYear = require('../control/create-school-year');
var UpdateSchoolYear= require('../control/update-school-year');
var GetSchoolYear = require('../control/get-school-year-by-school-year-id');
var GetSchoolYears = require('../control/get-school-years');
var DeleteSchoolYear = require('../control/delete-school-year');
var CreateSchoolSem = require('../control/create-school-sem');
var UpdateSchoolSem= require('../control/update-school-sem');
var GetSchoolSem = require('../control/get-school-sem-by-school-sem-id');
var GetSchoolSems = require('../control/get-school-sems');
var DeleteSchoolSem = require('../control/delete-school-sem');
var CreateEducationLevel = require('../control/create-education-level');
var UpdateEducationLevel= require('../control/update-education-level');
var GetEducationLevel = require('../control/get-education-level-by-education-level-id');
var GetEducationLevels = require('../control/get-education-levels');
var DeleteEducationLevel = require('../control/delete-education-level');
var CreateDepartment = require('../control/create-department');
var UpdateDepartment= require('../control/update-department');
var GetDepartment = require('../control/get-department-by-department-id');
var GetDepartments = require('../control/get-departments');
var DeleteDepartment = require('../control/delete-department');
var CreateTheme = require('../control/create-theme');
var UpdateTheme= require('../control/update-theme');
var GetTheme = require('../control/get-theme-by-theme-id');
var GetThemes = require('../control/get-themes');
var DeleteTheme = require('../control/delete-theme');
var CreateCode = require('../control/create-code');
var UpdateCode= require('../control/update-code');
var GetCodes = require('../control/get-codes');
var DeleteCode = require('../control/delete-code');
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
    getSchoolYears: function (params, callback) {
        new GetSchoolYears(params, function (err, result) {
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
			schoolYearId: param.schoolYearId,
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
    getSchoolSems: function (params, callback) {
        new GetSchoolSems(params, function (err, result) {
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
    getEducationLevels: function (params, callback) {
        new GetEducationLevels(params, function (err, result) {
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
    },
    createDepartment: function (param, callback) {
		new CreateDepartment({
			name: param.name,
			description: param.description,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    },
    updateDepartment: function (departmentId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateDepartment(departmentId, updateParam, callback);
    },
    getDepartment: function (departmentId, callback) {
        new GetDepartment(departmentId, function (err, result) {
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
    getDepartments: function (params, callback) {
        new GetDepartments(params, function (err, result) {
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
    deleteDepartment: function (departmentId, callback) {
        new DeleteDepartment(departmentId, callback);
    },
    createTheme: function (param, callback) {
		new CreateTheme({
			templateName: param.templateName,
			description: param.description,
			logo: param.logo,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    },
    updateTheme: function (themeId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateTheme(themeId, updateParam, callback);
    },
    getTheme: function (themeId, callback) {
        new GetTheme(themeId, function (err, result) {
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
    getThemes: function (params, callback) {
        new GetThemes(params, function (err, result) {
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
    deleteTheme: function (themeId, callback) {
        new DeleteTheme(themeId, callback);
    },
    createCode: function (param, callback) {
		new CreateCode({
			codeType: param.codeType,
			codeName: param.codeName,
			codeValue: param.codeValue,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    },
    updateCode: function (codeId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateCode(codeId, updateParam, callback);
    },
    getCodes: function (params, callback) {
        new GetCodes(params, function (err, result) {
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
    deleteCode: function (codeId, callback) {
        new DeleteCode(codeId, callback);
    }
};