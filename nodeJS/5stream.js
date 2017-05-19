'use strict'

let http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.jpg': 'image/jpg',
      '.png': 'image/png',
      '.jpeg': 'image/jpeg',
    }

http.createServer(function (req, res) {
  let uri = url.parse(req.url).pathname;
  let fileName = path.join(process.cwd(), unescape(uri))
  let stats;
  try {
    stats = fs.lstatSync(fileName)
  } catch (e) {
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.end('Not found')
  }
  if (stats.isFile()) {
    let mimeType = mimeTypes[path.extname(fileName)]
    console.log(mimeType);
  }
}).listen(3000)
