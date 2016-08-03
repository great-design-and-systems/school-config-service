'use strict';
var Code = require('../entity/code');

function execute(code, callback) {
	Code.create(code, callback);
}

module.exports = execute;