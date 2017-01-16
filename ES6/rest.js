'use strict'

let x=10, y=20, z=30

function findMax(array) {
  return Math.max.apply(null, array)
}
findMax([x,y,z])  // es5 30

function findMax(...array) {
  return Math.max.apply(null, array)
}
findMax(x,y,z)  // es6 30
