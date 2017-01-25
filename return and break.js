'use strict'

let logic = "dog"

function whatItIs(data) {
  switch (data) {
    case "dog":
      console.log('dog')
      return 'dog'
      break;
    case "cat":
      console.log('cat')
      return 'cat'
      break;
    default:
      return 'lol'
      console.log('unknown')
  }
}

whatItIs(logic)
