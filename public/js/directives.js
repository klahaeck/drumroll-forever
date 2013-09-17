'use strict';

app.directive('hammer', function (socket, soundmanager) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var hammertime = Hammer(element, {
        tap_always: true,
        tap_max_distance: 10,
        tap_max_touchtime: 250
      }).on('touch', function(event) {
        soundmanager.play('snare');
        socket.emit('drum:roll', {
          pageX: event.gesture.center.pageX,
          pageY: event.gesture.center.pageY
        });
      });
    }
  };
});


app.directive('keyboard', function (socket, soundmanager) {
  return {
    restrict: 'A',
    scope: true,
    link: function postLink(scope, element, attrs){
      $(document).on('keypress', function(e){
        // scope.$apply(scope.keyPressed(e));
        soundmanager.play('snare');
        socket.emit('drum:roll', {});
      });
    }
  };
});
