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
                deleteSchoolProfile: 'http://' + req.headers.host + API + 'delete-school-profile/{schoolId}'
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
        SchoolConfig.deleteSchoolProfile(req.params.schoolId, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                var message;
                if (result.n > 0) {
                    message = 'ok';
                } else {
                    message = 'No record to delete';
                }
                res.status(200).send({message: message});
            }
        });
    });

};