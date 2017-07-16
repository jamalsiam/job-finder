var User = require('./models/userModel.js');


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
              	
              	res.json('signin');
              }     
          });
      }
  });
	}
}

