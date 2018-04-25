'use strict'

let http = require('http'),
    url = require('url'),
    qs = require('querystring'),
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
        '/api/login': (req, res) => {
          let body = ''
          req.on('data', d => {
            body += d
          })
          req.on('end', () => {
            let params = qs.parse(body)
            console.log(`Username: ${params['username']}`);
            console.log(`Username: ${params['password']}`);
            res.end()
          })
        } // end of /api/login
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
