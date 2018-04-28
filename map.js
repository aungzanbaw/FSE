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

const names = animals.map(a => a.name )

const names = animals.map(function(animal){
  return animal.name
})

const names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

console.log(names) 

const cars = {
  toyota: {name: 'Crown', type: 'saloon'},
  nissan: {name: 'Sunny', type: 'saloon'},
  honda: {name: 'Civic', type: 'saloon'},  
  daihatsu: {name: 'Comapgno', type: 'saloon'},
  suzuki: {name: 'Ciaz', type: 'saloon'},
  mazda: {name: 'Mazda3', type: 'SUV'},
  mitsubishi: {name: 'Eclipse', type: 'SUV'}
}

Object.keys(cars).map( car => console.log(car, cars[car]))