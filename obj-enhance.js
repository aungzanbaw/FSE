"use strict"
// object shorthand
function getPerson() {
  let name = "SHolmes"
  let age = 50
  return {
    name,
    age,
    getName(){
      return `The name is ${name}`
    }
  }
}
console.log(getPerson().getName())

// destructuring

let person = {
  name: "Willy",
  age: 12
}

let { name, age } = person   // create variable on-the-fly

// dest on params
function getPerson({results,count}) {
  console.log(results,count)
}

getPerson({
  name: "SUZE",
  age: 82,
  results: [12,21],
  count: 30
})
