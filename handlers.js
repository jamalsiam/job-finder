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
          	password: password,
            image_profile:'data:image/jpeg;base64,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 '
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
},
setPhoneNumber:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$set: {phone: req.body.phone}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
setAddress:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$set: {address: req.body.address}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
setWorkAt:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$set: {work_at: req.body.work_at}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
setImageProfile:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$set: {image_profile: req.body.image_profile}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
addEducation:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$push: {education: req.body.record}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
addSkills:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$push: {skills: req.body.record}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
addTechnicalSkills:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$push: {technical_skills: req.body.record}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
addCertificates:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$push: {certificates: req.body.record}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
addPersonalProjects:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$push: {personal_projects: req.body.record}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
addExperiences:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$push: {experiences: req.body.record}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
addInterests:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$push: {interests: req.body.record}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
},
addWorkBefore:function(req,res){

  User.update(
    {email: req.body.email}, 
    {$push: {work_before: req.body.record}})
  .then(function (user) {
    console.log(user.firstName)

    res.json("s");
  })
}
}

