'use strict';
var Theme = require('../entity/theme');

function execute(themeId, callback) {
    Theme.findById(themeId, callback);
}

module.exports = execute;