'use strict'
// es5
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getName = function () {
  return this.name
}

Person.prototype.getAge = function () {
  return this.age
}

let aye_aye = new Person('Aye Aye', 31)
let kyaw_kyaw = new Person('Kyaw Kyaw', 13)

// es6
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getName(){
    return this.name
  }
  getAge(){
    return this.age
  }
  static register(...args){
    return new Person(...args)
  }
}

let SH = new Person("Sherlock Holmes", 45)
let DR = Person.register("John Watson", 44) // using static method
