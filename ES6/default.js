'use strict'

function sum(x,y) {
  if (x == undefined) {
    x = 0
  }
  if (y == undefined) {
    x = 0
  }
  return x + y
} // es5 way to filter incoming parameters

/*
* x = 0 if x == undefined
* y = 0 if y == undefined
* RUBY way :)
*/

function sum(x = 0, y = 0) {
  return x + y
} // es6 way
