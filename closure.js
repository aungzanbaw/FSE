'use strict'

function person(name='') {
  let timesGreeted = 0
  let personObject = {
    name: name,
    greetGuest: function(guestName) {
      let greeting = `Hi ${guestName}, my name is ${this.name}`
      timesGreeted++
      console.log(greeting,timesGreeted)
    }
  }
  return personObject
}

let guests = ['Bill', 'Billy', 'Banana', 'Boo', 'Bob', 'Boom', 'Bull']
let joe = person('Joe')
let sally = person('Sally')

guests.forEach(joe.greetGuest.bind(joe))
guests.forEach(sally.greetGuest.bind(sally))
