var angular = require('angular');

require('angular-route');
require('./core/scraper.js');
require('./user/user.js');

var app = angular.module('ngGHSC', ['ngRoute', 'ngGHSC.scraper', 'ngGHSC.user']);