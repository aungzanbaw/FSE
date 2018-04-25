"use strict"
//to provide a way to access the data of some collector object without necessarily exposing these data or their structure

let Storage = function (items) {
  this.index = 0
  this.items = items
}

Storage.prototype = {
  first: function() {
    this.reset()
    return this.next()
  },
  next: function() {
    return this.items[this.index++]
  },
  hasNext: function() {
    return this.index <= this.items.length
  },
  reset: function() {
    this.index = 0
  }
}

let items = ["Kant", true, 13, "human"]
let storage = new Storage(items)
while (storage.hasNext()) {
  console.log(storage.next())
}
