'use strict';
var Theme = require('../entity/theme');

function execute(theme, callback) {
	Theme.create(theme, callback);
}

module.exports = execute;