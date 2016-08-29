#!/usr/bin/env node
var request = require('request');
var robot = require('robotjs');
robot.setMouseDelay(5);
var host = {
  x: 0,
  y: 0
};

setInterval(function() {
  var mouse = robot.getMousePos();
  request.get('127.0.0.1:3000/') //TODO: convert this into a remote API endpoint
  .on('response', function(res) {
    console.log(res.body);
  });
});

//Move the mouse across the screen as a sine wave.
// var robot = require('robotjs');
// robot.setMouseDelay(2);

// var twoPI = Math.PI * 2.0;
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;

// robot.setMouseDelay(2);

// var twoPI = Math.PI * 2.0;
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;

// for (var x = 0; x < width; x++)
// {
//     y = height * Math.sin((twoPI * x) / width) + height;
//     robot.moveMouse(x, y);
// }