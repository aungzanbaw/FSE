"use strict"

class Dog{
    constructor(){
        this.sound = 'woof'
    }
    talk(){
        console.log(this.sound)
    }
}

const AN = new Dog()
AN.talk() // work but in this context only
let array = [1,2,3]
// array.forEach(AN.talk); // this.sound is not defined
// array.forEach(AN.talk.bind(AN)); // this work but who would remember to do so

const dog = () => {
    const sound = 'woof'
    return {
        talk: () => console.log(sound)
    }
}

const an = dog()
an.talk() // work across there is no this, closure rule
array.forEach(() => an.talk()) // this work