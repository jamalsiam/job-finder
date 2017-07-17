var Q = require('q');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

// use schema to add it to mongo data base
var UserSchema = new mongoose.Schema({
 firstName:{
  type: String,
  required: true,
    // unique: true
  },
  lastName:{
    type: String,
    required: true,
    // unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
    // unique: true
  },
  phone:{
    type: String,
    //required: true,
    // unique: true
  },
  work_at:{
    type: String,
    //required: true,
    // unique: true
  },
  address:{
    type: String,
    //required: true,
    // unique: true
  },
  image:{
    type: String,
   //required: true,
    // unique: true
  },
  education: [
  {
    university:{
      type: String,
       // required: true,
        // unique: true
      },
      Major:{
        type: String,
        //required: true,
        // unique: true
      },
      description:{
        type: String,
        //required: true,
        // unique: true
      }
    }],
    skills:[
    {
      skill:{
        type: String,
       // required: true,
        // unique: true
      },
      description:{
        type: String,
        //required: true,
        // unique: true
      }
    }],
    technical_skills:[
    {
      technical_skill:{
        type: String,
       // required: true,
        // unique: true
      },
      description:{
        type: String,
        //required: true,
        // unique: true
      }
    }],
    certificates: [
    {
      certificate:{
        type: String,
       // required: true,
        // unique: true
      },
      description:{
        type: String,
        //required: true,
        // unique: true
      }
    }],
    personal_projects: [
    {
      project:{
        type: String,
       // required: true,
        // unique: true
      },
      description:{
        type: String,
        //required: true,
        // unique: true
      }
    }],
    experiences: [
    {
      experience:{
        type: String,
       // required: true,
        // unique: true
      },
      Duration:{
        type: String,
        //required: true,
        // unique: true
      },
      description:{
        type: String,
        //required: true,
        // unique: true
      }
    }],
    interests: [
    {
      interest:{
        type: String,
       // required: true,
        // unique: true
      }
    }],
    work_before: [
    {
      interest:{
        type: String,
       // required: true,
        // unique: true
      }
    }]
  });



UserSchema.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function (resolve, reject) {
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = mongoose.model('jobfinder_user ', UserSchema);
