var angular = require('angular');

var app = angular.module('ngGHSC.repo', ['ngRoute']);

var scraperService = require('../core/scraperService');

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/:username/repos', {
		templateUrl: 'repo/repo.html',
		controller: 'repoCtrl'
	});
}]);

app.controller('repoCtrl', ['$scope', '$location', '$http', 'scraperService', function($scope, $location, $http, scraperService) {
	alert('ello');
}]);