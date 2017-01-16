'use strict'

let person = {
  firstName: "foo",
  lastName: "bar"
}

let interceptor = {
  set:function(target, name, value, receiver){
    console.log(name + "is changed")
    target[name] = value
  },
  get:function(target, name, receiver){
    return name + " is " + target[name]
  }
}

person = new Proxy(person, interceptor)
console.log(person)
