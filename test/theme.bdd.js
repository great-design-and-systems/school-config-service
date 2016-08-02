'use strict';
var SchoolConfig = require('../src/boundary/school-config');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var CONNECT_TEST_TIMEOUT = process.env.CONNECT_TEST_TIMEOUT || 50000;
describe('Theme BDD', function () {
    var db = new Database();

    beforeEach(function (done) {
        this.timeout(CONNECT_TEST_TIMEOUT);
        return db.connect(done);
    });

    describe('GIVEN: I have theme data', function () {
    	var templateName = 'Template Name';
        var description = 'Theme Description';
        var logo = 'sample logo';
        var schoolId = '57a09a22e3f0b653036c0eb1';
        var username = 'analyn';
        var data = {};

        beforeEach(function () {
        	data.templateName = templateName;
            data.description = description;
            data.logo = logo;
            data.schoolId = schoolId;
            data.createdBy = username;
            data.updatedBy = username;
        });

        describe('WHEN: saving theme', function () {
            var expectedResult;
            beforeEach(function (done) {
                SchoolConfig.createTheme(data, function (err, result) {
                    expectedResult = result;
                    done();
                });
            });

            it('THEN: themeId is generated', function () {
                expect(expectedResult._id).to.not.be.null;
            });

            describe('WHEN: updating theme', function () {
                var updateResult;
                beforeEach(function (done) {
                    data.description = 'School Theme'
                    SchoolConfig.updateTheme(expectedResult._id, data, function (err, result) {
                        updateResult = result;
                        done();
                    });
                });

                it('THEN: theme is updated', function () {
                    expect(!!updateResult).to.equal(true);
                });
            });

            describe('WHEN: getting theme', function () {
                var getResult;
                var getErr;
                beforeEach(function (done) {
                    SchoolConfig.getTheme(expectedResult._id, function (err, result) {
                        getErr = err;
                        getResult = result;
                        done();
                    });
                });

                it('THEN: theme is retrieved', function () {
                    expect(getErr).to.be.null;
                    expect(!!getResult).to.equal(true);
                });
            });

            describe('WHEN: deleting theme', function () {
                var deleteResult;
                var deleteErr;
                beforeEach(function (done) {
                    SchoolConfig.deleteTheme(expectedResult._id, function (err, result) {
                        deleteErr = err;
                        deleteResult = result;
                        done();
                    });
                });

                it('THEN: theme is removed', function () {
                    expect(deleteErr).to.be.null;
                    expect(!!deleteResult).to.equal(true);
                });
            });
        });

    });

    afterEach(function (done) {
        return db.disconnect(done);
    });
});