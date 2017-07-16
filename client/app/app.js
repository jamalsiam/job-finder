// Route for all page when url go to page
angular.module('user',
  ['signin',
   'signup',
   'main',
   'u.services',
   'ngRoute'
	])
.config(function($routeProvider, $httpProvider){
  $routeProvider
	.when('/main', {
      templateUrl: 'app/account/main.html',
      controller:  'mainController'
    })
    .when('/signin', {
      templateUrl: 'app/account/signin.html',
      controller:  'signinController'
    })     
  .when('/signup', {
      templateUrl: 'app/account/signup.html',
      controller:  'signupController'
    })

    .otherwise({
      redirectTo:'/main'
    })
})