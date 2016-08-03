'use strict';
var Theme = require('../entity/theme');

function execute(params, callback) {
    Theme.find(params, callback);
}

module.exports = execute;