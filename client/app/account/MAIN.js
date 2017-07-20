angular.module('main',[])

.controller('mainController', function ($scope , $window , $location ,Post) {
	getPosts()
	var email=$window.localStorage.getItem("job.finder.email");
	$scope.posting=function(post){
		if(post){
			Post.uploadPost({email:email,
				post:post}).
			then(function(i){
				$scope.post="";
				getPosts()
			})
		}
	}


function getPosts(){
	Post.getPosts()
	.then(function(i){
	$scope.postInfo=i

	})



}
});








