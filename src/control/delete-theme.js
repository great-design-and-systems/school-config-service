'use strict';
var Theme = require('../entity/theme');

function execute(themeId, callback) {
	Theme.remove({
        _id: themeId
    }, callback);
}

module.exports = execute;