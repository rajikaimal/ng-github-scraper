var angular = require('angular');

var app = angular.module('ngGHSC.scraper', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'core/scraper.html',
		controller: 'scraperCtrl'
	});
}]);

app.controller('scraperCtrl', ['$scope', '$location', function($scope, $location) {
	
}]);