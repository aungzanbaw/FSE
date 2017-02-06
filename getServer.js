'use strict'

let http = require('http'),
    port = 3000

setInterval(function() {
  console.log('world')
},2000)
console.log('hello')

setInterval(function() {
  console.log('fetching google.com')
  http.get({ host :'google.com' }, function (res) {
    console.log(res.headers)
  })
},5000)

http.createServer(function (req,res) {
  console.log('DATA FETCHING')
  res.writeHead(200,{'content-type':'text/plain'})
  setTimeout(function() {
    res.end('World')
  },3000)
  res.write('Hello')
}).listen(port)
