'use strict';
var Code = require('../entity/code');

function execute(codeId, callback) {
	Code.remove({
        _id: codeId
    }, callback);
}

module.exports = execute;