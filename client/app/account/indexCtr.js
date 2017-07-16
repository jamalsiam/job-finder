angular.module('index',[])

.controller('indexController', function ($scope , $window , $location ) {
  $scope.email= $window.localStorage.getItem("jobfinder_user");

// if( $scope.email){
//     Settings.getSettings({email:$scope.email})
//     .then(function (i) {
//       $scope.fname=i.firstName;
//       $scope.lname=i.lastName;
//       $scope.imageProfile =i.imageProfile;
//       })

 
// }
});
