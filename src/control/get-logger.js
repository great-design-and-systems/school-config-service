'use strict';
var log4js = require('log4js');
var APP_NAME = process.env.APP_NAME || 'school_config_service';

module.exports = log4js.getLogger(APP_NAME);