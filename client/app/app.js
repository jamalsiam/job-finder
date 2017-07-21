// Route for all page when url go to page
angular.module('user',
  ['signin',
   'signup',
   'signout',
   'settings',
   'profile',
   'main',
   'users',
   'index',
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
  .when('/user', {
      templateUrl: 'app/account/user.html',
      controller:  'userController'
    })
  .when('/signout', {
      templateUrl: 'app/account/signout.html',
      controller:  'signoutController'
    }) 
  .when('/settings', {
      templateUrl: 'app/account/settings.html',
      controller:  'settingsController'
    }) 
  .when('/search', {
      templateUrl: 'app/account/search.html',
      controller:  'indexController'
    }) 
  .when('/profile', {
      templateUrl: 'app/account/profile.html',
      controller:  'profileController'
    }) 
 
    .otherwise({
      redirectTo:'/main'
    })
})

