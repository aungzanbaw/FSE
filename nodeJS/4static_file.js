'use strict'

const http = require('http'),
      url = require('url'),
      fs = require('fs'),
      path = require('path'),
      MIME = {
        '.html': 'text/html',
        '.css': 'text/css'
      }

http.createServer(function (req, res) {
  let baseURL = url.parse(req.url)
  let filePath = __dirname + (baseURL.pathname === "/" ? '/index.html' : baseURL.pathname);

  fs.access(filePath, fs.FS_OK,function(error) {
    if (!error) {
      fs.readFile(filePath, function (err, content) {
        if (!err) {
          // console.log(content);
          let contentType = MIME[path.extname(filePath)]
          res.writeHead(200, {'Content-type': contentType})
          res.end(content, 'utf-8')
        }else{
          res.writeHead(500)
          res.end('Internal server error')
        }
      });
    }else{
      res.writeHead(404)
      res.end('Not found')
    }
  })

}).listen(3000)
