var activeClients = 0;

module.exports = function (socket) {
  activeClients++;

  socket.emit('init', {
    msg: 'Welcome!',
    count: activeClients
  });

  // notify other clients that a new user has joined
  socket.broadcast.emit('user:join', {
    count: activeClients
  });

  // broadcast a user's roll coordinates
  socket.on('drum:roll', function (data) {
    // console.log('drum:roll', data.pageX, data.pageY);
    socket.broadcast.emit('drum:roll', {
      pageX: data.pageX,
      pageY: data.pageY
    });
  });

  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function () {
    activeClients--;
    socket.broadcast.emit('user:left', {
      count: activeClients
    });
  });
};
