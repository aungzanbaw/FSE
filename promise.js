// new Promise(function(resolve, reject) {
//
// });

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

function fileAccess(filePath) {
  return new Promise(function(resolve, reject) {
    fs.access(filePath, fs.F_OK, function (error) {
      if (!error) {
        resolve(filePath)
      }else{
        reject(error)
      }
    })
  })
}

function fileReader(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, function (error, content) {
      if (!error) {
        resolve(content)
      }else{
        reject(error)
      }
    })
  })
}

function handler(req,res) {
    let baseURL = url.parse(req.url)
    let filePath = __dirname + (baseURL.pathname === '/' ? '/index.html' : baseURL.pathname)
    let contentType = MIME[path.extname(filePath)]

    fileAccess(filePath)
      .then(fileReader)
      .then(content => {
        res.writeHead(200, {'Content-type':contentType})
        res.end(content, 'utf-8')
      }).catch(error => {
        console.log(error)
      })
}

http.createServer(handler).listen(3000)
