angular.module('signup' , [])

.controller('signupController', function ($scope , $window , $location  ,Signup) {
	$scope.signUp=function(firstName,lastName,email,password){
		if(firstName && lastName && email && password){
			Signup.signUp({firstName:firstName,
							lastName:lastName,
							email:email,
							password:password})
			then(function(i){
				if(i=="checkemail"){
					$scope.msg="email used before"
				}
				else
				{
					///// go to new location and save in storage
				}
			})


		}//if (is not epity) 
		else
		{



		}//else

	}///siginUp
});


				









							