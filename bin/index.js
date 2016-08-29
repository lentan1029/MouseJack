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
  url: 'http://138.68.49.22:3000/host' 
};

setInterval(function() {
  request(options, function(err, res, body) {
    var mouse = robot.getMousePos();
    var screen = robot.getScreenSize();
    data = JSON.parse(body);
    // console.log(data);
    var moveX = mouse.x + data.x >= screen.width - 1 ? screen.width - 1 : mouse.x + data.x;
    var moveY = mouse.y + data.y >= screen.height - 1 ? screen.height - 1 : mouse.y + data.y;
    console.log(moveX, moveY);
    robot.moveMouse(moveX, moveY);
  });
}, 50);