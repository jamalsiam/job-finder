angular.module('settings',[])

.controller('settingsController', function ($scope , $window , $location ,Settings) {
	var email=$window.localStorage.getItem("job.finder.email");
	if(!email)
		$window.location="/#/signin";
	
	Settings.getSettings({email:email})
	.then(function(i){
		$scope.firstName=i.firstName;
		$scope.lastName=i.lastName;


	})

	$scope.settings=function(firstName,lastName,lastPass,newPass){
		if(firstName && lastName){	
			Settings.setSettings({email:email,
				firstName:firstName,
				lastName:lastName})
			.then(function(i){
				$window.location.reload();
			})
	}//if
}
});

