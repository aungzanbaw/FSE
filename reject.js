'use strict'

let animals = [
  {name: 'EEE', type: 'cat'},
  {name: 'FFF', type: 'fish'},
  {name: 'BBB', type: 'rabbit'},
  {name: 'ZZZ', type: 'cat'},
  {name: 'CCC', type: 'dog'},
  {name: 'DDD', type: 'dog'},
  {name: 'AAA', type: 'rabbit'}
]

let others = animals.reject(a => a.type != 'dog')

let others = animals.reject(function(animal){
  return animal.type != 'dog'
})

var others = []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].type != 'dog')
    others.push(animals[i])
}

console.log(others)
