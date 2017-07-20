const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
var firebase =require('firebase');

var handlers = require('./handlers.js')



//middleware
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jeme:123@ds115918.mlab.com:15918/markstore');
var db = mongoose.connection;




app.post('/api/signup',handlers.handleUser.signUp);
app.post('/api/signin',handlers.handleUser.signIn);
app.post('/api/setSettings',handlers.handleUser.setSettings);
app.post('/api/getSettings',handlers.handleUser.getSettings);
app.post('/api/getProfile',handlers.handleUser.getProfile);
app.post('/api/Profile/setPhoneNumber',handlers.handleUser.setPhoneNumber);
app.post('/api/Profile/setAddress',handlers.handleUser.setAddress);
app.post('/api/Profile/setWorkAt',handlers.handleUser.setWorkAt);
app.post('/api/Profile/setImageProfile',handlers.handleUser.setImageProfile);
app.post('/api/Profile/addEducation',handlers.handleUser.addEducation);
app.post('/api/Profile/addSkills',handlers.handleUser.addSkills);
app.post('/api/Profile/addTechnicalSkills',handlers.handleUser.addTechnicalSkills);
app.post('/api/Profile/addCertificates',handlers.handleUser.addCertificates);
app.post('/api/Profile/addPersonalProjects',handlers.handleUser.addPersonalProjects);
app.post('/api/Profile/addExperiences',handlers.handleUser.addExperiences);
app.post('/api/Profile/addInterests',handlers.handleUser.addInterests);
app.post('/api/Profile/addWorkBefore',handlers.handleUser.addWorkBefore);
app.post('/api/uploadPost',handlers.handlePost.uploadPost);
app.get('/api/getPosts',handlers.handlePost.getPosts);
app.post('/api/putComment',handlers.handlePost.putComment);





app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;


