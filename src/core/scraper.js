var angular = require('angular');

var app = angular.module('ngGHSC.scraper', ['ngRoute']);

var scraperService = require('./scraperService');

app.controller('scraperCtrl', ['$scope', '$location', '$http', 'scraperService', function($scope, $location, $http, scraperService) {
	$scope.searchUser = function() {
		var username = $scope.username;
		$http.get('/data?username=' + username)
			.then(function(response) {
				var data = response.data.user;
				scraperService.saveUserData(data);
				console.log('done ...');
			}).catch(function(err) {
				console.log('err', err);
			});
	}
}]);