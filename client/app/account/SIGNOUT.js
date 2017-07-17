angular.module('signout',[])

.controller('signoutController', function ($scope , $window , $location ) {
$window.localStorage.removeItem("job.finder.email");
$window.location="/#/signin";
$window.location.reload()

	

});

