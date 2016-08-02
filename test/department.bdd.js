'use strict';
var SchoolConfig = require('../src/boundary/school-config');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var CONNECT_TEST_TIMEOUT = process.env.CONNECT_TEST_TIMEOUT || 50000;
describe('Department BDD', function () {
    var db = new Database();

    beforeEach(function (done) {
        this.timeout(CONNECT_TEST_TIMEOUT);
        return db.connect(done);
    });

    describe('GIVEN: I have department data', function () {
    	var name = 'Department Name';
        var description = 'Department Description';
        var schoolId = '57a09a22e3f0b653036c0eb1';
        var username = 'analyn';
        var data = {};

        beforeEach(function () {
        	data.name = name;
            data.description = description;
            data.schoolId = schoolId;
            data.createdBy = username;
            data.updatedBy = username;
        });

        describe('WHEN: saving department', function () {
            var expectedResult;
            beforeEach(function (done) {
                SchoolConfig.createDepartment(data, function (err, result) {
                    expectedResult = result;
                    done();
                });
            });

            it('THEN: departmentId is generated', function () {
                expect(expectedResult._id).to.not.be.null;
            });

            describe('WHEN: updating department', function () {
                var updateResult;
                beforeEach(function (done) {
                    data.description = 'College Level'
                    SchoolConfig.updateDepartment(expectedResult._id, data, function (err, result) {
                        updateResult = result;
                        done();
                    });
                });

                it('THEN: department is updated', function () {
                    expect(!!updateResult).to.equal(true);
                });
            });

            describe('WHEN: getting department', function () {
                var getResult;
                var getErr;
                beforeEach(function (done) {
                    SchoolConfig.getDepartment(expectedResult._id, function (err, result) {
                        getErr = err;
                        getResult = result;
                        done();
                    });
                });

                it('THEN: department is retrieved', function () {
                    expect(getErr).to.be.null;
                    expect(!!getResult).to.equal(true);
                });
            });

            describe('WHEN: deleting department', function () {
                var deleteResult;
                var deleteErr;
                beforeEach(function (done) {
                    SchoolConfig.deleteDepartment(expectedResult._id, function (err, result) {
                        deleteErr = err;
                        deleteResult = result;
                        done();
                    });
                });

                it('THEN: department is removed', function () {
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