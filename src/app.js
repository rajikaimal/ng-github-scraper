var angular = require('angular');

require('angular-route');
require('./core/scraper.js');

var app = angular.module('ngGHSC', ['ngRoute', 'ngGHSC.scraper']);
