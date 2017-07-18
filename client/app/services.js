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

.factory('Signin', function ($http) {
  var signIn= function (signin) {
   
    return $http({
      method: 'POST',
      url: '/api/signin',
      data: signin
    }).then(function (res) {
      return res.data;

    });
  };

  return {
    signIn:signIn
  }
})
.factory('Settings', function ($http) {
  var setSettings= function (info) {
   
    return $http({
      method: 'POST',
      url: '/api/setSettings',
      data: info
    }).then(function (res) {
      return res.data;

    });
  };

  var getSettings= function (info) {
   
    return $http({
      method: 'POST',
      url: '/api/getSettings',
      data: info
    }).then(function (res) {
      return res.data;

    });
  };

  return {
    setSettings:setSettings,
    getSettings:getSettings
  }
})

.factory('Profile', function ($http) {
  var getProfile= function (info) {
   
    return $http({
      method: 'POST',
      url: '/api/getProfile',
      data: info
    }).then(function (res) {
      return res.data;

    });
  };

  var setPhoneNumber=function (info) {
   
    return $http({
      method: 'POST',
      url: '/api/Profile/setPhoneNumber',
      data: info
    }).then(function (res) {
      return res.data;
    });
  };

  var setAddress=function (info) {
   
    return $http({
      method: 'POST',
      url: '/api/Profile/setAddress',
      data: info
    }).then(function (res) {
      return res.data;
    });
  };

  var setWorkAt=function (info) {
   
    return $http({
      method: 'POST',
      url: '/api/Profile/setWorkAt',
      data: info
    }).then(function (res) {
      return res.data;
    });
  };

  var setImageProfile=function (info) {
   
    return $http({
      method: 'POST',
      url: '/api/Profile/setImageProfile',
      data: info
    }).then(function (res) {
      return res.data;
    });
  };
  var addEducation=function (info) {
   
    return $http({
      method: 'POST',
      url: '/api/Profile/addEducation',
      data: info
    }).then(function (res) {
      return res.data;
    });
  };
  return {
    getProfile:getProfile,
    setPhoneNumber:setPhoneNumber,
    setAddress:setAddress,
    setWorkAt:setWorkAt,
    setImageProfile:setImageProfile,
    addEducation:addEducation
  }
})



