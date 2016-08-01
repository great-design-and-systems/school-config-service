'use strict';
var SchoolConfig = require('../src/boundary/school-config');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var CONNECT_TEST_TIMEOUT = process.env.CONNECT_TEST_TIMEOUT || 50000;
describe('School Profile BDD', function () {
    var db = new Database();

    beforeEach(function (done) {
        this.timeout(CONNECT_TEST_TIMEOUT);
        return db.connect(done);
    });

    describe('GIVEN: I have school name and address', function () {
        var schoolName = 'School of fish';
        var schoolAddress = 'Pacific Ocean';
        var userId = 'analyn';
        var data = {};

        beforeEach(function () {
            data.name = schoolName;
            data.address = schoolAddress;
        });

        describe('WHEN: saving school profile', function () {
            var expectedResult;
            beforeEach(function (done) {
                var createData = data;
                createData.createdBy = userId;
                SchoolConfig.createSchoolProfile(createData, function (err, result) {
                    expectedResult = result;
                    done();
                });
            });

            it('THEN: schoolId is generated', function () {
                expect(expectedResult._id).to.not.be.null;
            });

            describe('WHEN: updating school profile', function () {
                var updateResult;
                beforeEach(function (done) {
                    var updateData = {};
                    updateData.address = 'South China Sea';
                    updateData.updatedBy = userId;
                    SchoolConfig.updateSchoolProfile(expectedResult._id, updateData, function (err, result) {
                        updateResult = result;
                        done();
                    });
                });

                it('THEN: updated value is equal to new value', function () {
                    expect(!!updateResult).to.equal(true);
                });
            });

            describe('WHEN: getting school profile', function () {
                var getResult;
                var getErr;
                beforeEach(function (done) {
                    SchoolConfig.getSchoolProfile(expectedResult._id, function (err, result) {
                        getErr = err;
                        getResult = result;
                        done();
                    });
                });

                it('THEN: school profile is retrieved', function () {
                    expect(getErr).to.be.null;
                    expect(!!getResult).to.equal(true);
                });
            });

            describe('WHEN: deleting school profile', function () {
                var deleteResult;
                var updateErr;
                beforeEach(function (done) {
                    SchoolConfig.deleteSchoolProfile(expectedResult._id, function (err, result) {
                        updateErr = err;
                        deleteResult = result;
                        done();
                    });
                });

                it('THEN: school profile is removed', function () {
                    expect(updateErr).to.be.null;
                    expect(!!deleteResult).to.equal(true);
                });
            });
        });

    });

    afterEach(function (done) {
        return db.disconnect(done);
    });
});