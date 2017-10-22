"use strict"

// let Animal = { eats: true }

// let Rabbit = {}


    function Animal(name){
        this.name = name; 
    }

    Animal.prototype.speak = () => console.log(`${this.name} make a noise`)


    class Dog extends Animal{
        // speak(){
        //     console.log(`${this.name} bark`)
        // }
    }

let ak = new Dog("Aung Kyaw");
ak.speak()


bind 
apply