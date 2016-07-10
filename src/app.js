var angular = require('angular');

require('angular-route');

var app = angular.module('ngGHSC', ['ngRoute']);

require('./core/scraper.js');

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'core/scraper.html',
		controller: 'scraperCtrl'
	});
}]);

app.controller('userCtrl', ['$scope', '$location', function($scope, $location) {
	alert('done');
}]);