angular.module('index',[])

.controller('indexController', function ($scope , $window , $location ,Search ) {
  $scope.email= $window.localStorage.getItem("job.finder.email");
	
  $scope.search=function(searchText){
  	$scope.srhText=searchText;
  	Search.getSearchResult({search:searchText})
  	.then(function(i){
	$scope.users=i;

  	})

  }

});