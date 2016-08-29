#!/usr/bin/env node
var request = require('request');
var robot = require('robotjs');
// robot.setMouseDelay(5);

var host = {
  x: 0,
  y: 0
};

var options = {
  method: 'GET',
  url: 'http://127.0.0.1:3000' //TODO: convert this into a remote API endpoint
};

setInterval(function() {
  var mouse = robot.getMousePos();
  request(options, function(err, res, body) {
    var screen = robot.getScreenSize();
    data = JSON.parse(body);
    var moveX = mouse.x + data.x >= screen.width - 1 ? screen.width - 1 : mouse.x + data.x;
    var moveY = mouse.y + data.y >= screen.height - 1 ? screen.height - 1 : mouse.y + data.y;
    // console.log(moveX, moveY);
    robot.moveMouse(moveX, moveY);
  });
}, 50);

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