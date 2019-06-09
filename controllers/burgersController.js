// Node Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/modelBurger.js');


// set up index redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Create Index Page which places all burgers to DOM
router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var burgersObject = { burgers: data };

    //console.log(burgersObject);
    res.render('index', burgersObject);
  });
});


// Create a New Burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});


// Devour a Burger from the list
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});


// Export routes
module.exports = router;