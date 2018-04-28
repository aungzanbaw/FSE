'use strict'

const animals = [
  {name: 'EEE', type: 'cat'},
  {name: 'FFF', type: 'fish'},
  {name: 'BBB', type: 'rabbit'},
  {name: 'ZZZ', type: 'cat'},
  {name: 'CCC', type: 'dog'},
  {name: 'DDD', type: 'dog'},
  {name: 'AAA', type: 'rabbit'}
]

const dogs = animals.filter(a => a.type == 'dog')

const dogs = animals.filter(function(animal){
  return animal.type == 'dog'
})

const dogs = []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].type == 'dog')
    dogs.push(animals[i])
}

console.log(dogs) 

const cars = {
  toyota: {name: 'Crown', type: 'saloon'},
  nissan: {name: 'Sunny', type: 'saloon'},
  honda: {name: 'Civic', type: 'saloon'},  
  daihatsu: {name: 'Comapgno', type: 'saloon'},
  suzuki: {name: 'Ciaz', type: 'saloon'},
  mazda: {name: 'Mazda3', type: 'SUV'},
  mitsubishi: {name: 'Eclipse', type: 'SUV'}
}

const result = Object.keys(cars).filter( car => cars[car].type === 'saloon') 
console.log(result)