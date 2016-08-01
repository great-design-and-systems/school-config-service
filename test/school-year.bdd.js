'use strict';
var SchoolConfig = require('../src/boundary/school-config');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var CONNECT_TEST_TIMEOUT = process.env.CONNECT_TEST_TIMEOUT || 50000;
describe('School Year BDD', function () {
    var db = new Database();

    beforeEach(function (done) {
        this.timeout(CONNECT_TEST_TIMEOUT);
        return db.connect(done);
    });

    describe('GIVEN: I have school year data', function () {
        var description = 'SY 2016';
        var dateStart = '2016-06-08';
        var dateEnd = '2017-03-31';
        var username = 'analyn';
        var data = {};

        beforeEach(function () {
            data.description = description;
            data.dateStart = dateStart;
            data.dateEnd = dateEnd;
            data.createdBy = username;
            data.updatedBy = username;
        });

        describe('WHEN: saving school year', function () {
            var expectedResult;
            beforeEach(function (done) {
                SchoolConfig.createSchoolYear(data, function (err, result) {
                    expectedResult = result;
                    done();
                });
            });

            it('THEN: schoolYearId is generated', function () {
                expect(expectedResult._id).to.not.be.null;
            });

            describe('WHEN: updating school year', function () {
                var updateResult;
                beforeEach(function (done) {
                    data.description = 'School Year 2016'
                    SchoolConfig.updateSchoolYear(expectedResult._id, data, function (err, result) {
                        updateResult = result;
                        done();
                    });
                });

                it('THEN: school year is updated', function () {
                    expect(!!updateResult).to.equal(true);
                });
            });

            describe('WHEN: getting school year', function () {
                var getResult;
                var getErr;
                beforeEach(function (done) {
                    SchoolConfig.getSchoolYear(expectedResult._id, function (err, result) {
                        getErr = err;
                        getResult = result;
                        done();
                    });
                });

                it('THEN: school year is retrieved', function () {
                    expect(getErr).to.be.null;
                    expect(!!getResult).to.equal(true);
                });
            });

            describe('WHEN: deleting school year', function () {
                var deleteResult;
                var deleteErr;
                beforeEach(function (done) {
                    SchoolConfig.deleteSchoolYear(expectedResult._id, function (err, result) {
                        deleteErr = err;
                        deleteResult = result;
                        done();
                    });
                });

                it('THEN: school year is removed', function () {
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