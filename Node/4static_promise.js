'use strict'

const http = require('http'),
      url = require('url'),
      fs = require('fs'),
      path = require('path'),
      MIME = {
        '.html': 'text/html',
        '.css': 'text/css'
      }

function fileAccess(filePath) {
  return new Promise(function (resolve, reject) {
    fs.access(filePath, fs.FS_OK, function(error) {
      if (!error) {
        resolve(filePath)
      }else{
        reject(error)
      }
    })
  })
}

function fileRead(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, function(error, content) {
      if (!error) {
        resolve(content)
      }else{
        reject(error)
      }
    })
  })
}

http.createServer(function (req, res) {
  let baseURL = url.parse(req.url)
  let filePath = __dirname + (baseURL.pathname === "/" ? '/index.html' : baseURL.pathname);
  let contentType = MIME[path.extname(filePath)]

  fileAccess(filePath)
    .then(fileRead)
    .then(function(content) {
      res.writeHead(200, {"Content-type":contentType})
      res.end(content, 'utf-8')
    })
    .catch(function(error) {
      console.log(error)
    })

}).listen(3000)
