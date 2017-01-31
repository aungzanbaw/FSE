'use strict'

String.prototype.say = String.prototype.say || function (data) {
  let total = ""
  for (var i = 0; i < data; i++) {
    total += this
  }
  return total
}

"hello".say(2)

let hw = new String("hello world")
hw.say(3)
