'use strict';
var SchoolConfig = require('./school-config');
var API = process.env.API_NAME || '/api/school-config/';

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.status(200).send({
            domain: process.env.DOMAIN_NAME || 'School Config',
            links: {
                createSchoolProfile: 'http://' + req.headers.host + API + 'create-school-profile',
                getSchoolProfile: 'http://' + req.headers.host + API + 'get-school-profile/{schoolId}',
                updateSchoolProfile: 'http://' + req.headers.host + API + 'update-school-profile/{schoolId}',
                deleteSchoolProfile: 'http://' + req.headers.host + API + 'delete-school-profile/{schoolId}',
                createSchoolYear: 'http://' + req.headers.host + API + 'create-school-year',
                getSchoolYear: 'http://' + req.headers.host + API + 'get-school-year/{schoolYearId}',
                getSchoolYearBySchoolId: 'http://' + req.headers.host + API + 'get-school-year-by-school/{schoolId}',
                updateSchoolYear: 'http://' + req.headers.host + API + 'update-school-year/{schoolYearId}',
                deleteSchoolYear: 'http://' + req.headers.host + API + 'delete-school-year/{schoolYearId}',
                createSchoolSem: 'http://' + req.headers.host + API + 'create-school-sem',
                getSchoolSem: 'http://' + req.headers.host + API + 'get-school-sem/{schoolSemId}',
                getSchoolSemBySchoolYearId: 'http://' + req.headers.host + API + 'get-school-sem-by-school-year/{schoolYearId}',
                updateSchoolSem: 'http://' + req.headers.host + API + 'update-school-sem/{schoolSemId}',
                deleteSchoolSem: 'http://' + req.headers.host + API + 'delete-school-sem/{schoolSemId}',
                createEducationLevel: 'http://' + req.headers.host + API + 'create-education-level',
                getEducationLevel: 'http://' + req.headers.host + API + 'get-education-level/{educationLevelId}',
                getEducationLevelBySchoolId: 'http://' + req.headers.host + API + 'get-education-level-by-school/{schoolId}',
                updateEducationLevel: 'http://' + req.headers.host + API + 'update-education-level/{educationLevelId}',
                deleteEducationLevel: 'http://' + req.headers.host + API + 'delete-education-level/{educationLevelId}',
                createDepartment: 'http://' + req.headers.host + API + 'create-department',
                getDepartment: 'http://' + req.headers.host + API + 'get-department/{departmentId}',
                getDepartmentBySchoolId: 'http://' + req.headers.host + API + 'get-department-by-school/{schoolId}',
                updateDepartment: 'http://' + req.headers.host + API + 'update-department/{departmentId}',
                deleteDepartment: 'http://' + req.headers.host + API + 'delete-department/{departmentId}',
                createTheme: 'http://' + req.headers.host + API + 'create-theme',
                getTheme: 'http://' + req.headers.host + API + 'get-theme/{themeId}',
                getThemeBySchoolId: 'http://' + req.headers.host + API + 'get-theme-by-school/{schoolId}',
                updateTheme: 'http://' + req.headers.host + API + 'update-theme/{themeId}',
                deleteTheme: 'http://' + req.headers.host + API + 'delete-theme/{themeId}',
                createCode: 'http://' + req.headers.host + API + 'create-code',
                getCodes: 'http://' + req.headers.host + API + 'get-codes/{codeType}/{schoolId}',
                updateCode: 'http://' + req.headers.host + API + 'update-code/{codeId}',
                deleteCode: 'http://' + req.headers.host + API + 'delete-code/{codeId}'
            }
        });
    });

    app.post(API + 'create-school-profile', function (req, res) {
        SchoolConfig.createSchoolProfile(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-school-profile/:schoolId', function (req, res) {
        SchoolConfig.updateSchoolProfile(req.params.schoolId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-school-profile/:schoolId', function (req, res) {
        SchoolConfig.getSchoolProfile(req.params.schoolId, function (err, result) {
            if (err) {
                res.status(500).send({message: "School Profile not found."});
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.delete(API + 'delete-school-profile/:schoolId', function (req, res) {
        SchoolConfig.deleteSchoolProfile(req.params.schoolId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove school profile id ' + req.params.schoolId + '.'
                });
            } else {
                res.status(200).send({message: 'ok'});
            }
        });
    });
    app.post(API + 'create-school-year', function (req, res) {
        SchoolConfig.createSchoolYear(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-school-year/:schoolYearId', function (req, res) {
        SchoolConfig.updateSchoolYear(req.params.schoolYearId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-school-year/:schoolYearId', function (req, res) {
        SchoolConfig.getSchoolYear(req.params.schoolYearId, function (err, result) {
            if (err) {
                res.status(500).send({message: "School Year not found."});
            } else {
                res.status(200).send(result);
            }
        });
    });
    
    app.get(API + 'get-school-year-by-school/:schoolId', function (req, res) {
        SchoolConfig.getSchoolYears(req.params, function (err, result) {
            if (err) {
                res.status(500).send({message: "School Year not found."});
            } else {
            	if (result && result.length > 0) {
            		res.status(200).send(result);
            	} else {
            		res.status(200).send({message: "No records found."});
            	}
            }
        });
    });

    app.delete(API + 'delete-school-year/:schoolYearId', function (req, res) {
        SchoolConfig.deleteSchoolYear(req.params.schoolYearId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove school year id ' + req.params.schoolYearId + '.'
                });
            } else {
                res.status(200).send({message: 'ok'});
            }
        });
    });
    app.post(API + 'create-school-sem', function (req, res) {
        SchoolConfig.createSchoolSem(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-school-sem/:schoolSemId', function (req, res) {
        SchoolConfig.updateSchoolSem(req.params.schoolSemId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-school-sem/:schoolSemId', function (req, res) {
        SchoolConfig.getSchoolSem(req.params.schoolSemId, function (err, result) {
            if (err) {
                res.status(500).send({message: "Semester not found."});
            } else {
                res.status(200).send(result);
            }
        });
    });
    
    app.get(API + 'get-school-sem-by-school-year/:schoolYearId', function (req, res) {
        SchoolConfig.getSchoolSems(req.params, function (err, result) {
            if (err) {
                res.status(500).send({message: "School Sem not found."});
            } else {
            	if (result && result.length > 0) {
            		res.status(200).send(result);
            	} else {
            		res.status(200).send({message: "No records found."});
            	}
            }
        });
    });

    app.delete(API + 'delete-school-sem/:schoolSemId', function (req, res) {
        SchoolConfig.deleteSchoolSem(req.params.schoolSemId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove school sem id ' + req.params.schoolSemId + '.'
                });
            } else {
                res.status(200).send({message: 'ok'});
            }
        });
    });
    app.post(API + 'create-education-level', function (req, res) {
        SchoolConfig.createEducationLevel(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-education-level/:educationLevelId', function (req, res) {
        SchoolConfig.updateEducationLevel(req.params.educationLevelId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-education-level/:educationLevelId', function (req, res) {
        SchoolConfig.getEducationLevel(req.params.educationLevelId, function (err, result) {
            if (err) {
                res.status(500).send({message: "Education Level not found."});
            } else {
                res.status(200).send(result);
            }
        });
    });
    
    app.get(API + 'get-education-level-by-school/:schoolId', function (req, res) {
        SchoolConfig.getEducationLevels(req.params, function (err, result) {
            if (err) {
                res.status(500).send({message: "Education Level not found."});
            } else {
            	if (result && result.length > 0) {
            		res.status(200).send(result);
            	} else {
            		res.status(200).send({message: "No records found."});
            	}
            }
        });
    });

    app.delete(API + 'delete-education-level/:educationLevelId', function (req, res) {
        SchoolConfig.deleteEducationLevel(req.params.educationLevelId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove education level id ' + req.params.educationLevelId + '.'
                });
            } else {
                res.status(200).send({message: 'ok'});
            }
        });
    });
    app.post(API + 'create-department', function (req, res) {
        SchoolConfig.createDepartment(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-department/:departmentId', function (req, res) {
        SchoolConfig.updateDepartment(req.params.departmentId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-department/:departmentId', function (req, res) {
        SchoolConfig.getDepartment(req.params.departmentId, function (err, result) {
            if (err) {
                res.status(500).send({message: "Department not found."});
            } else {
                res.status(200).send(result);
            }
        });
    });
    
    app.get(API + 'get-department-by-school/:schoolId', function (req, res) {
        SchoolConfig.getDepartments(req.params, function (err, result) {
            if (err) {
                res.status(500).send({message: "Department not found."});
            } else {
            	if (result && result.length > 0) {
            		res.status(200).send(result);
            	} else {
            		res.status(200).send({message: "No records found."});
            	}
            }
        });
    });

    app.delete(API + 'delete-department/:departmentId', function (req, res) {
        SchoolConfig.deleteDepartment(req.params.departmentId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove department id ' + req.params.departmentId + '.'
                });
            } else {
                res.status(200).send({message: 'ok'});
            }
        });
    });
    
    app.post(API + 'create-theme', function (req, res) {
        SchoolConfig.createTheme(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-theme/:themeId', function (req, res) {
        SchoolConfig.updateTheme(req.params.themeId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-theme/:themeId', function (req, res) {
        SchoolConfig.getTheme(req.params.themeId, function (err, result) {
            if (err) {
                res.status(500).send({message: "Theme not found."});
            } else {
                res.status(200).send(result);
            }
        });
    });
    
    app.get(API + 'get-theme-by-school/:schoolId', function (req, res) {
        SchoolConfig.getThemes(req.params, function (err, result) {
            if (err) {
                res.status(500).send({message: "Theme not found."});
            } else {
            	if (result && result.length > 0) {
            		res.status(200).send(result);
            	} else {
            		res.status(200).send({message: "No records found."});
            	}
            }
        });
    });

    app.delete(API + 'delete-theme/:themeId', function (req, res) {
        SchoolConfig.deleteTheme(req.params.themeId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove theme id ' + req.params.themeId + '.'
                });
            } else {
                res.status(200).send({message: 'ok'});
            }
        });
    });
    
    app.post(API + 'create-code', function (req, res) {
        SchoolConfig.createCode(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-code/:codeId', function (req, res) {
        SchoolConfig.updateCode(req.params.codeId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-codes/:codeType/:schoolId', function (req, res) {
        SchoolConfig.getCodes(req.params, function (err, result) {
            if (err) {
                res.status(500).send({message: "Code not found."});
            } else {
            	if (result && result.length > 0) {
            		res.status(200).send(result);
            	} else {
            		res.status(200).send({message: "No records found."});
            	}
            }
        });
    });

    app.delete(API + 'delete-code/:codeId', function (req, res) {
        SchoolConfig.deleteCode(req.params.codeId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove code id ' + req.params.codeId + '.'
                });
            } else {
                res.status(200).send({message: 'ok'});
            }
        });
    });
};