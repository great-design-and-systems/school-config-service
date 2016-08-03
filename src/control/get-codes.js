'use strict';
var Code = require('../entity/code');

function execute(params, callback) {
    Code.find(params, callback);
}

module.exports = execute;