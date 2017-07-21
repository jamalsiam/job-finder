angular.module('users',[])

.controller('userController', function ($scope , $window , $location ,$routeParams , Profile) {
	var user=$routeParams.id;
	var myemail=$window.localStorage.getItem("job.finder.email");
	if(!user)
		$window.location="/#/mian";
	
	if(myemail==user)
		$window.location="/#/profile";
	
Profile.getProfile({email:user})
	.then(function(i){
		$scope.info=i;
		
	})


});

