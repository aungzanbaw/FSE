'use srict'

let http = require('http'),
    url = require('url'),
    port = 3000,
    qs = require('querystring')

let routes = {
  'GET':{
    '/':(req,res) => {
      res.writeHead(200,{'Content-type':'text/html'})
      res.end("<h1>Home Page</h1>")
    },
    '/about':(req,res)=>{
      res.writeHead(200,{'Content-type':'text/html'})
      res.end("<h1>About Page</h1>")
    }
  },
  'POST':{
    '/api/login':(req,res) => {
      let body = ''
      req.on('data',function(data) {
        body += data
      })
      req.on('end',function () {
        let params = qs.parse(body)
        console.log("Username", params['username'])
        console.log("Password", params['password'])
        res.end()
      })
    },
  },
  'N/A':(req,res) => {
    res.writeHead(404)
    res.end("Not found")
  }
}

function requestHandler(req, res) {
  // console.log(req.url)
  // console.log(req.method)
  // console.log(req.headers)
  console.log(url.parse(req.url), true)
  let baseURL = url.parse(req.url,true)
  let resolveURL = routes[req.method][baseURL.pathname]
  if(resolveURL != undefined){
    resolveURL(req,res)
  }else{
    routes['N/A'](req,res)
  }
}

http.createServer(requestHandler).listen(port)
