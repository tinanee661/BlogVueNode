//funskkionimin e node js si backend ne server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); //package per lidhjen me db dhe perdorim e modeleve ne mongo db

const config = require('./DB');
const posts = require('./routes/posts');
const testimonials = require('./routes/testimonials');
const contacts = require('./routes/contacts');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB);

const app = express();
app.use(express.static('images'));
app.use(bodyParser.json());
app.use(cors());
app.use('/testimonials', testimonials);
app.use('/posts', posts);
app.use('/contacts', contacts);
var port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log('NodeJS Server started on Port: ', port);
});