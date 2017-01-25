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

let dogs = animals.filter(a => a.type == 'dog')

let dogs = animals.filter(function(animal){
  return animal.type == 'dog'
})

let dogs = []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].type == 'dog')
    dogs.push(animals[i])
}

console.log(dogs)
