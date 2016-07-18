var app = angular.module('ngGHSC.scraper');

app.service('scraperService', function($location) {
	var userdata;

	return {
		saveUserData: function(data) {
			userdata = data;
			console.log('user');
			console.log(userdata);
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