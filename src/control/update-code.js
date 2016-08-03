'use strict';

var Code = require('../entity/code');

function execute(id, update, callback) {
	Code.update({_id : id}, update, callback);
}

module.exports = execute;