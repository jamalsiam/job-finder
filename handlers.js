var User = require('./models/userModel.js');
var jwt = require('jwt-simple');


module.exports.handleUser = {
	signUp: function(req, res) {
		var firstName = req.body.firstName;
		var lastName = req.body.lastName;
		var email = req.body.email;
		var password = req.body.password;
		

		User.findOne({email: email})
		.exec(function (err, user) {
			if (user) {
				res.json('User already exist!');
			} else {
          // make a new user if not one
          return User.create({
          	firstName: firstName,
          	lastName: lastName,
          	email: email,
          	password: password
          }, function (err, newUser) {
              // create token to send back for auth
              if(err){
              	res.json(err);
              } else {
              	
              	res.json('signUp');
              }     
            });
        }
      });
	},
  signIn: function(req,res) {

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email: email})
    .then(function (users) {

      if (!users) {
       console.log( "user not found")
       res.status(404).json("user not found")
     } else {
       users.comparePasswords(password)
       .then(function (isMatch) {
        if (isMatch) {
         console.log( "user ")

         res.json("signIn")
       } else {
        console.log( "password ")
        res.json("password not matched")
      }
    });
     }
   });
  },
  getSettings: function(req,res) {

    var email = req.body.email;
    User.findOne({email: email})
    .then(function (user) {
        //console.log(user.firstName)

        res.json({firstName:user.firstName,lastName:user.lastName});
      })
  },
  setSettings:function(req,res){

    User.update(
      {email: req.body.email}, 
      {$set: {firstName: req.body.firstName,
        lastName: req.body.lastName}})
    .then(function (user) {
      console.log(user.firstName)

      res.json("s");
    })
  },
  getProfile:function(req,res) {

    var email = req.body.email;
    User.findOne({email: email})
    .then(function (user) {
        res.json(user);
      })
  }  
}

