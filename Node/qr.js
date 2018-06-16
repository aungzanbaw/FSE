'use strict'

const qr = require("qr-image")
const fs = require("fs")

let data = process.argv[2] || null
let output = process.argv[3] || null

if (data != null && output != null) {
  qr.image(data,{
    type:'png',
    size:20
  }).pipe(fs.createWriteStream(output))
  console.log("Image generated");
}else{
  console.log("Error creating file");
}
