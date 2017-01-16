'use strict'

let foo = 100

function bar(x,y) {
  return x + y
}

console.log("The number is " + foo)  //es5
console.log(`The number is ${foo}`)  //es6

console.log("The number + 10 is " + bar(foo,10)) // es5 110
console.log(`The number + 10 is ${bar(foo,10)}`) // es6 110
