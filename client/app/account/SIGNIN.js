angular.module('signin', [])

.controller('signinController', function ($scope , $window , $location  ,Signin) {
	var email=$window.localStorage.getItem("job.finder.email");
	 if(email)
          $window.location="/#/main";
	$scope.signIn=function(email,password){
		if(email && password){
			Signin.signIn({email:email,
						password:password})
			.then(function(i){
				console.log(i)
			if(i=="signIn"){

				$window.localStorage.setItem("job.finder.email", email );  
			$window.location="/#/brofile";
			$window.location.reload();  
			}// if user
			else
			{
				$scope.msg=i;
			}	

			})


		}// if is emipty
		else
		{
		$scope.msg="fill all feild";
		}


	}
 
});
