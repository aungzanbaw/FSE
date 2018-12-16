function applyMixins(derive, bases) {
    bases.forEach(base => Object.getOwnPropertyNames(base.prototype).forEach(name => (derive.prototype[name] = base.prototype[name])));
}
class sayHello {
    greeting() {
        return `Hello ${name}`;
    }
}
class HasPower {
    superpower() {
        return `${this.heroName} 🔥🔥🔥`;
    }
}
class SuperHero {
    constructor(name) {
        this.name = name;
        this.heroName = `Super ${name}`;
    }
}
applyMixins(SuperHero, [sayHello, HasPower]);
const ts = new SuperHero('Type Script');
console.log(ts.superpower());
