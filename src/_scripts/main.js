// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');

// var teoria = require('teoria');

var teoria = require('../../node_modules/teoria/index.js');
var gsap = require('gsap');

var Link = require('../_modules/link/link');

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');

  // this works
  console.log(teoria.Note('g3'));
});
