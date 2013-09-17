'use strict';

app.controller('AppCtrl', function ($scope, socket, soundmanager) {

  socket.on('init', function (data) {
    $scope.msg = data.msg;
    $scope.usercount = data.count;
    // $scope.taps
  });

  socket.on('drum:roll', function (data) {
    soundmanager.play('snare');
    $scope.pageX = data.pageX;
    $scope.pageY = data.pageY;
  });

  socket.on('user:join', function (data) {
    $scope.usercount = data.count;
  });

  // add a message to the conversation when a user disconnects or leaves the room
  socket.on('user:left', function (data) {
    $scope.usercount = data.count;
  });

});

