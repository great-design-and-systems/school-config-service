'use strict';
var Code = require('../entity/code');

function execute(params, callback) {
    Code.findOne(params, callback);
}

module.exports = execute;