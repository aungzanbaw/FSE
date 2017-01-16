'use strict'

let ele = document.querySelector('button')

ele.addEventListener("click", function (e) {
  console.log('clicked')
}) // es5 way

ele.addEventListener("click", (e) => {
  console.log('clicked')
})  // es6 - multiple lines of code block need to wrap with { codes }

ele.addEventListener("click", e => console.log('clicked')) // es6 way with single line
// NOTE only one parameter and only one line of code block
// return is implict meaning you don't need to include `return` keyword it's automatically return a value
