'use strict';

app.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        console.log('emitting:', eventName);
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});



app.factory('soundmanager', function ($rootScope) {
  soundManager.setup({
    url: '../bower_components/soundmanager/swf/',
    flashVersion: 9, // optional: shiny features (default = 8)
    // optional: ignore Flash where possible, use 100% HTML5 mode
    // preferFlash: false,
    onready: function() {
      soundManager.createSound({
        id: 'snare',
        url: '../audio/snare.mp3',
        autoLoad: true,
        autoPlay: false,
        onload: function() {
          // console.log('The sound '+this.id+' loaded!');
        },
        volume: 100
      });
    }
  });
  return {
    play: function (soundId, callback) {
      soundManager.play(soundId);
    }
  };
});