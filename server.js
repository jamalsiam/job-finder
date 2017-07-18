const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');

var handlers = require('./handlers.js')



//middleware
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://jeme:123@ds115918.mlab.com:15918/markstore');
var db = mongoose.connection;



//app.get('/api/books',handlers.handelBook.showbook);
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



app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;


