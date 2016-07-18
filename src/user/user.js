var angular = require('angular');

require('../repo/repo');

var app = angular.module('ngGHSC.user', ['ngRoute', 'ngGHSC.repo']);

var scraperService = require('../core/scraperService');

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/user', {
		templateUrl: 'user/user.html',
		controller: 'userCtrl'
	});
}]);

app.controller('userCtrl', ['$scope', '$location', '$http', 'scraperService', function($scope, $location, $http, scraperService) {
	var userData = scraperService.getUserData();
	console.log(userData);
	$scope.imagesrc = userData.avatar_url;
	$scope.username = userData.login;
}]);