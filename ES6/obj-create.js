'use strict'

const animal = {
    eat: true
}

const rabbit = Object.create(animal)
rabbit.jump = true

console.log(rabbit.eat)

// Objects created by .create method are automatic inherit from parent proto