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

let user = new Person("SHL",36)
let user2 = Person.register("DOC",34)

console.log(typeof Person)
