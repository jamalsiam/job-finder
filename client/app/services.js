angular.module('u.services', [])

.factory('Signup', function ($http) {
  var signUp= function (signup) {
  console.log(signup);
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: signup
    }).then(function (res) {
      return res.data;
    });
  };

  return {
    signUp:signUp
  }
})