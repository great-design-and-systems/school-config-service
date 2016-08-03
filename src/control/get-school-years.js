'use strict';
var SchoolYear= require('../entity/school-year');

function execute(params, callback) {
    SchoolYear.find(params, callback);
}

module.exports = execute;