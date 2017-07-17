angular.module('profile',[])

.controller('profileController', function ($scope , $window , $location ,Profile) {
var email=$window.localStorage.getItem("job.finder.email");
	Profile.getProfile({email:email})
	.then(function(i){
		console.log(i)
	})
});

