const path = require('path');

const express = require('express');

const blogRoutes = require('./routes/blog');

const app = express();

// Activate EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));//telling express where to find views

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies / data is extracted from them
app.use(express.static('public')); // Serve static files (e.g. CSS files)

app.use(blogRoutes);

//app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  //console.log(error);
  //res.status(500).render('500');
//});

app.listen(3000);//server
