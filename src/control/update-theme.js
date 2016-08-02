'use strict';

var Theme = require('../entity/theme');

function execute(condition, update, callback) {
	Theme.update(condition, update, callback);
}

module.exports = execute;