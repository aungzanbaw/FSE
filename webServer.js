"use strict"

const http = require('http'),
      fs = require('fs'),
      url = require('url'),
      path = require('path')

let MIME = {
  '.html' : 'text/html',
  '.css' : 'text/css',
  '.js' : 'text/js',
  '.png' : 'image/png',
  '.jpeg' : 'image/jpeg',
  '.gif' : 'image/gif'
}

function handler(req,res) {
    let baseURL = url.parse(req.url)
    let filePath = __dirname + (baseURL.pathname === '/' ? '/index.html' : baseURL.pathname)
    fs.access(filePath, fs.F_OK , function(error) {
      if (!error) {
        fs.readFile(filePath, function (error, content) {
          if (!error) {
            let contentType = MIME[path.extname(filePath)]
            res.writeHead(200, {'Content-type':contentType})
            res.end(content, 'utf-8')
          }else{
            res.writeHead(500)
            res.end("Internal server error")
          }
        })
      }else{
        res.writeHead(404)
        res.end("Content not found")
      }
    })
}

http.createServer(handler).listen(3000)
