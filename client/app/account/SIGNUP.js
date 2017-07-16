angular.module('signup' , [])

.controller('signupController', function ($scope , $window , $location  ,Signup) {
	$scope.signUp=function(firstName,lastName,email,password){
		if(firstName && lastName && email && password){
			Signup.signUp({firstName:firstName,
							lastName:lastName,
							email:email,
							password:password})
			.then(function(i){
				console.log(i)
				if(i=="User already exist!"){
					$scope.msg="User already exist!"
				}
				else
				{
			$window.localStorage.setItem('job.finder.email', email );  
			$window.location="/#/brofile";
			$window.location.reload();   	

				}
			})


		}//if (is not epity) 
		else
		{



		}//else

	}///siginUp
});


				









							