angular.module('main',[])

.controller('mainController', function ($scope , $window , $location ,Post,Comment) {
	getPosts()
	var email=$window.localStorage.getItem("job.finder.email");
	$scope.posting=function(post){
		if(!email){
			$window.location="/#/signin";
		}
		if(post && email){
			Post.uploadPost({email:email,
				post:post}).
			then(function(i){
				$scope.post="";
				getPosts()
			})
		}
	}

	$scope.putComment=function(comment,key){
		if(email){
			if(comment && email){
				Comment.putComment({email:email,
					comment:comment,
					key:key})
				.then(function(i){
					if(i){
						$scope.comnttext=""
					}
					
					getPosts();
					
				})
			}
		}
		else
		{
			$window.location="/#/signin";

		}

	}

	function getPosts(){
		Post.getPosts()
		.then(function(i){
			$scope.postInfo=i;
	//$scope.commentInfo=i.postInfo.comments;

})



	}
});








