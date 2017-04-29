'use strict'

let http = require('http'),
    url = require('url'),
    port = 3000,
    routes = {
      'GET':{
        '/': (req, res) => {
          res.writeHead(200,{'Content-type':'text/html'})
          res.end('<h1>Hello World</h1>')
        },
        '/about': (req, res) => {
          res.writeHead(200,{'Content-type':'text/html'})
          res.end('<h1>About Page</h1>')
        },
        '/api/echo': (req, res) => {
          res.writeHead(200,{'Content-type':'application/json'})
          res.end(JSON.stringify(req.queryParams))
        }
      },
      'POST':{

      },
      'N/A': (req,res) => {
        res.writeHead(404)
        res.end('Not found')
      }
    }

function route(req, res) {
  let baseURI = url.parse(req.url, true)
  let resolve = routes[req.method][baseURI.pathname]
  resolve != undefined ? (req.queryParams = baseURI.query ,resolve(req,res)) : routes['N/A'](req,res)
}

http.createServer(route).listen(port, ()=> {
  console.log(`Server started at port:${port}`);
})
