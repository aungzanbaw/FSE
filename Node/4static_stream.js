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

function fileStream(filePath) {
  return new Promise(function(resolve, reject) {
    let fileStream = fs.createReadStream(filePath)

    fileStream.on('open',function () {
        resolve(fileStream)
    })

    fileStream.on('error',function (error) {
      reject(error)
    })

  })
}

http.createServer(function (req, res) {
  let baseURL = url.parse(req.url)
  let filePath = __dirname + (baseURL.pathname === "/" ? '/index.html' : baseURL.pathname);
  let contentType = MIME[path.extname(filePath)]

  fileAccess(filePath)
    .then(fileStream)
    .then(function(content) {
      res.writeHead(200, {"Content-type":contentType})
      content.pipe(res)
    })
    .catch(function(error) {
      console.log(error)
    })

}).listen(3000)
