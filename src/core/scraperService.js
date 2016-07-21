var app = angular.module('ngGHSC.scraper');

app.service('scraperService', function($location) {
	var userdata;

	return {
		saveUserData: function(data) {
			userdata = data;
			$location.path('/user');
		},
		getUserData: function() {
			if(userdata === 'undefined') {
				$location.path('/');
			}
			return userdata;
		}
	}
});