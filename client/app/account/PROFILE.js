angular.module('profile',[])

.controller('profileController', function ($scope , $window , $location ,Profile) {
	var email=$window.localStorage.getItem("job.finder.email");
	Profile.getProfile({email:email})
	.then(function(i){
		$scope.info=i;
		console.log(i)
	})
	$scope.phoneNumber=function() {
	    var person = prompt("Please enter your number:", $scope.info.phone);
	    if (person == null || person == "") {
	    } 
	    else 
	    {
	    	Profile.setPhoneNumber({email:email,phone:person})
	    	.then(function(i){
			$scope.info.phone=person;
			})
	    }
	}

	$scope.address=function() {
	    var person = prompt("Please enter your address:", $scope.info.address);
	    if (person == null || person == "") {
	    } 
	    else 
	    {
	    	Profile.setAddress({email:email,address:person})
	    	.then(function(i){
			$scope.info.address=person;
			})
	    }
	}

	$scope.work_at=function() {
	    var person = prompt("Please enter name of your company that you work in:", $scope.info.work_at);
	    if (person == null || person == "") {
	    } 
	    else 
	    {
	    	Profile.setWorkAt({email:email,work_at:person})
	    	.then(function(i){
			$scope.info.work_at=person;
			})
	    }
	}



    $scope.imageUpload = function(event){
         var files = event.target.files; //FileList object
         
         for (var i = 0; i < files.length; i++) {
             var file = files[i];
                 var reader = new FileReader();
                 reader.onload = $scope.imageIsLoaded; 
                 reader.readAsDataURL(file);
         }
    }

    $scope.imageIsLoaded = function(e){
        $scope.$apply(function() {
          
            $scope.info.image_profile=e.target.result;
        	Profile.setImageProfile({email:email,image_profile:$scope.info.image_profile})
	    	.then(function(i){});
        });
        
    }


});

