'use strict'

const person = {
    name: "aung zan baw",
    getName: function(){
        return this.name
    }
}
console.log(person.getName())

const personArrowFun = {
    name: "aung zan baw",
    getName: () =>  this.name
}
console.log(personArrowFun.getName())

const personES6Func = {
    name: "aung zan baw",
    getName(){
        return this.name
    }
}
console.log(personES6Func.getName())
