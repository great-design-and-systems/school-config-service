'use strict';
var EducationLevel = require('../entity/education-level');

function execute(params, callback) {
    EducationLevel.find(params, callback);
}

module.exports = execute;