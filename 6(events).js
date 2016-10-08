"use strict"

let EventEmitter = require("events").EventEmitter()

let ee = new EventEmitter()

ee.on("someEvent", data => {
  console.log("someEvent",data)
})

ee.emit("someEvent", { option: true})
