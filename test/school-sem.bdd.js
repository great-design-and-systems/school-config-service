'use strict';
var SchoolConfig = require('../src/boundary/school-config');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var CONNECT_TEST_TIMEOUT = process.env.CONNECT_TEST_TIMEOUT || 50000;
describe('School Sem BDD', function () {
    var db = new Database();

    beforeEach(function (done) {
        this.timeout(CONNECT_TEST_TIMEOUT);
        return db.connect(done);
    });

    describe('GIVEN: I have school sem data', function () {
        var description = 'School Sem Description';
        var dateStart = '2016-08-01';
        var dateEnd = '2016-12-31';
        var schoolYearId = '57a09a22e3f0b653036c0eb1';
        var username = 'analyn';
        var data = {};

        beforeEach(function () {
            data.description = description;
            data.dateStart = dateStart;
            data.dateEnd = dateEnd;
            data.schoolYearId = schoolYearId;
            data.createdBy = username;
            data.updatedBy = username;
        });

        describe('WHEN: saving school sem', function () {
            var expectedResult;
            beforeEach(function (done) {
                SchoolConfig.createSchoolSem(data, function (err, result) {
                    expectedResult = result;
                    done();
                });
            });

            it('THEN: schoolSemId is generated', function () {
                expect(expectedResult._id).to.not.be.null;
            });

            describe('WHEN: updating school sem', function () {
                var updateResult;
                beforeEach(function (done) {
                    data.description = 'First Semester for SY 2016'
                    SchoolConfig.updateSchoolSem(expectedResult._id, data, function (err, result) {
                        updateResult = result;
                        done();
                    });
                });

                it('THEN: school sem is updated', function () {
                    expect(!!updateResult).to.equal(true);
                });
            });

            describe('WHEN: getting school sem', function () {
                var getResult;
                var getErr;
                beforeEach(function (done) {
                    SchoolConfig.getSchoolSem(expectedResult._id, function (err, result) {
                        getErr = err;
                        getResult = result;
                        done();
                    });
                });

                it('THEN: school sem is retrieved', function () {
                    expect(getErr).to.be.null;
                    expect(!!getResult).to.equal(true);
                });
            });

            describe('WHEN: deleting school sem', function () {
                var deleteResult;
                var deleteErr;
                beforeEach(function (done) {
                    SchoolConfig.deleteSchoolSem(expectedResult._id, function (err, result) {
                        deleteErr = err;
                        deleteResult = result;
                        done();
                    });
                });

                it('THEN: school sem is removed', function () {
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