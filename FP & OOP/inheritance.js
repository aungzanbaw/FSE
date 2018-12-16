// base class
class Animal {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return `Hello ${this.name}`;
    }
}
const woof = new Animal('Woof');
console.log(woof.greeting());
// inherit class Human extends from Animal 
class Hooman extends Animal {
    constructor(name) { super(name); }
    talent() {
        return `${this.name} screw up entire planet`;
    }
}
const aung = new Hooman('Aung');
console.log(aung.greeting());
console.log(aung.talent());
