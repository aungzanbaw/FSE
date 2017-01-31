'use strict'

const net = require('net')

let sockets = []

net.Server(function(socket){
  socket.write('welcome')
  sockets.push(socket)

  socket.on('data',function (data) {
    for (var i = 0; i < sockets.length; i++) {
      if(sockets[i]  == socket) continue;
      sockets[i].write(data)
    }
  })

  socket.on('end',function() {
    let index = sockets.indexOf(socket)
    sockets.splice(index,1)
  })

}).listen(3000)
