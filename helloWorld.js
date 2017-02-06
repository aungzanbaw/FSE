'use strict'

let http = require('http'),
    port = 3000

http.createServer(function (req,res) {
  res.writeHead(200,{'content-type':'text/plain'})
  setTimeout(function() {
    res.end('World')
  },2000)
  res.write('Hello')
}).listen(port)
