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
                updateSchoolYear: 'http://' + req.headers.host + API + 'update-school-year/{schoolYearId}',
                deleteSchoolYear: 'http://' + req.headers.host + API + 'delete-school-year/{schoolYearId}',
                createSchoolSem: 'http://' + req.headers.host + API + 'create-school-sem',
                getSchoolSem: 'http://' + req.headers.host + API + 'get-school-sem/{schoolSemId}',
                updateSchoolSem: 'http://' + req.headers.host + API + 'update-school-sem/{schoolSemId}',
                deleteSchoolSem: 'http://' + req.headers.host + API + 'delete-school-sem/{schoolSemId}'
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
                res.status(500).send(err);
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

    app.delete(API + 'delete-school-year/:schoolYearId', function (req, res) {
        SchoolConfig.deleteSchoolYear(req.params.schoolYearId, function (err) {
            if (err) {
                res.status(500).send(err);
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

    app.delete(API + 'delete-school-sem/:schoolSemId', function (req, res) {
        SchoolConfig.deleteSchoolSem(req.params.schoolSemId, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({message: 'ok'});
            }
        });
    });
};