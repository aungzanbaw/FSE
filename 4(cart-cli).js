"use strict"
let items = []  // can't access by global

function addItem(name,price) {
  items.push({
    name: name,
    price: price
  })
}

exports.total = function() {
  return items.reduce(function(a,b) {
    return a + b.price
  },0)
}

exports.addItem = addItem

exports.Cart = function(){

}  // without this constructor function all data point to one reference

// Now test with CLI
/*
  1. first import with relative path
  2. then use addItem to add new item to the cart
  3. get total price using total()
  4. require this lib again with diff obj still get same result

*/
