'use strict';
var SchoolConfig = require('../src/boundary/school-config');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var CONNECT_TEST_TIMEOUT = process.env.CONNECT_TEST_TIMEOUT || 50000;
describe('Code BDD', function () {
    var db = new Database();

    beforeEach(function (done) {
        this.timeout(CONNECT_TEST_TIMEOUT);
        return db.connect(done);
    });

    describe('GIVEN: I have code data', function () {
    	var codeType = 'Purpose';
    	var codeName = 'school_purpose';
        var codeValue = 'Research';
        var schoolId = '57a09a22e3f0b653036c0eb1';
        var username = 'analyn';
        var data = {};

        beforeEach(function () {
        	data.codeType = codeType;
        	data.codeName = codeName;
            data.codeValue = codeValue;
            data.schoolId = schoolId;
            data.createdBy = username;
            data.updatedBy = username;
        });

        describe('WHEN: saving code', function () {
            var expectedResult;
            beforeEach(function (done) {
                SchoolConfig.createCode(data, function (err, result) {
                    expectedResult = result;
                    done();
                });
            });

            it('THEN: codeId is generated', function () {
                expect(expectedResult._id).to.not.be.null;
            });

            describe('WHEN: updating code', function () {
                var updateResult;
                beforeEach(function (done) {
                    data.description = 'College Level'
                    SchoolConfig.updateCode(expectedResult._id, data, function (err, result) {
                        updateResult = result;
                        done();
                    });
                });

                it('THEN: code is updated', function () {
                    expect(!!updateResult).to.equal(true);
                });
            });

            describe('WHEN: getting code list', function () {
                var getResult;
                var getErr;
                beforeEach(function (done) {
                    SchoolConfig.getCodes({codeType: data.codeType, schoolId: data.schoolId}, function (err, result) {
                        getErr = err;
                        getResult = result;
                        done();
                    });
                });

                it('THEN: code is retrieved', function () {
                    expect(getErr).to.be.null;
                    expect(!!getResult).to.equal(true);
                });
            });

            describe('WHEN: deleting code', function () {
                var deleteResult;
                var deleteErr;
                beforeEach(function (done) {
                    SchoolConfig.deleteCode(expectedResult._id, function (err, result) {
                        deleteErr = err;
                        deleteResult = result;
                        done();
                    });
                });

                it('THEN: code is removed', function () {
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