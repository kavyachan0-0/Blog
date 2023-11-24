const express = require('express');

const db = require('../data/database');

const router = express.Router(); //creating router by a function

router.get('/', function(req,res){ //get method takes the url the user enters
  res.redirect('/posts')
}); //first route 'root route' direct user to posts route

router.get('/posts', function(req,res){
   res.render('posts-list'); //using res object to call render method to direct user to post-list page
});

router.get('/new-post', async function(req,res)
{
    const [authors] = await db.query('SELECT * FROM authors'); //query get query and send it to database
    res.render('create-post', {authors: authors}); //first authors in key exposed in a template and second authors is array item
});//passing authors array under the authors key to create-post templates

module.exports = router; //export the router