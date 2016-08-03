'use strict';

var Theme = require('../entity/theme');

function execute(id, update, callback) {
	Theme.update({_id : id}, update, callback);
}

module.exports = execute;