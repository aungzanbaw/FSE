'use strict'

let http = require('http'),
    url = require('url'),
    port = 3000

function route(req, res) {
  let baseURL = url.parse(req.url, true)
  console.log(baseURL);
  res.writeHead(200,{'Content-type':'text/html'})
  res.end('<h1>Hello World</h1>')
}

http.createServer(route).listen(port, ()=> {
  console.log(`Server started at port:${port}`);
})
