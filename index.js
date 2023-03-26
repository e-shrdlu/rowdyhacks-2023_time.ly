const express = require('express');
var path = require('path');
var http = require('http');
var mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/usersdb');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;


// Set EJS as the view engine
app.set('view engine', 'ejs');

const port = 9002;

app.get('/', (req, res) => {
    res.render('index');
  });

app.get('/create-task', (req, res) => {
    res.render('../views/partials/create-task');
  });

app.get('/create-meeting', (req, res) => {
    res.render('../views/partials/create-meeting');
}); 

app.get('/preferences', (req, res) => {
    res.render('../views/partials/preferences');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
