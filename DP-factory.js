"use strict"

// to create objects and perform similar operations while doing it
function Factory() {
  this.createProduct = function(type) {
    let product;
    if (type === "Phone") {
      product = new Phone();
    } else if (type === "Smartphone") {
     product = new Smartphone();
   } else if (type === "Tablet") {
     product = new Tablet();
   } else if (type === "Notebook") {
     product = new Notebook();
   } else if (type === "Desktop") {
     product = new Desktop();
    }
    product.type = type
    product.info = function () {
      return this.type + " will be build in " + this.hours + " hours."
    }
      return product
  }
}

let Phone = function() { this.hours = 4 }
let Smartphone = function() { this.hours = 8 }
let Tablet = function() { this.hours = 21 }
let Notebook = function() { this.hours = 23 }
let Desktop = function() { this.hours = 31 }

let factory = new Factory();
factory.createProduct("Phone").info()
factory.createProduct("Smartphone").info()
factory.createProduct("Tablet").info()
factory.createProduct("Notebook").info()
factory.createProduct("Desktop").info()
