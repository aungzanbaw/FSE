'use strict'

let http = require('http'),
    port = 3000

function route(req, res) {
  // console.log(req.url)
  // console.log(req.method)
  console.log(req.headers)
  // console.log(req.headers.cookies);
  res.writeHead(200,{
    'Content-type': 'text/plain',
    'Set-cookie': 'mycookie=dyuAHJ7632TYUAGA'
  })
  res.end('<h1>Hello World</h1>')
}

http.createServer(route).listen(port, ()=> {
  console.log(`Server started at port:${port}`);
})
