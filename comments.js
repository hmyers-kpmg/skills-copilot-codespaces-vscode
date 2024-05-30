// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Use the public directory
app.use(express.static('public'));
// Use the views directory
app.set('views', './views');
// Use the EJS template engine
app.set('view engine', 'ejs');
// Use the body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))