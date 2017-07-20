angular.module('main',[])

.controller('mainController', function ($scope , $window , $location ,Post,Comment) {
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

$scope.putComment=function(comment,key){
Comment.putComment({email:email,
					comment:comment,
					key:key})
		.then(function(i){
				console.log(i);
			getPosts();
			$scope.comnttext="";
		})
		$scope.comnttext="";
}

function getPosts(){
	Post.getPosts()
	.then(function(i){
	$scope.postInfo=i;
	//$scope.commentInfo=i.postInfo.comments;

	})



}
});








