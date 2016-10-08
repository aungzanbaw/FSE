"use strict"

// to add additional functionality (decorate) to object’s behavior dynamically
// multiple decorators can add functionality to the original object or even override one already existing
function Vehicle(type) {
  this.type = type || “car”
  this.model = “default”
}

let testVehicle = new Vehicle()   // model:default type:car

let suv = new Vehicle(“SUV”) // model:default type:suv

suv.setNumOfWheels = function(num) {
  this.numOfWheels = num
}

suv.setPrice = function(amount) {
  this.price = “$” + amount
}

suv.setColorVariant = function(color) {
  this.colorVariant = color
}

suv.setNumOfWheels(4)
suv.setPrice(250000)
suv.setColorVariant(“Yellow”)

// colorVariant: “Yellow”, model: “default”, numOfWheels: 4, price: “$250000”, type: “SUV”
// still model: “default”, type: “car”
