function applyMixins(derive: any, bases: any[]) {
  bases.forEach(base =>
    Object.getOwnPropertyNames(base.prototype).forEach(
      name => (derive.prototype[name] = base.prototype[name])
    )
  );
}

class sayHello {
  private name;
  greeting() {
    return `Hello ${name}`;
  }
}

class HasPower{
  private heroName
  superpower(){
    return `${this.heroName} 🔥🔥🔥`
  }
}

class SuperHero implements sayHello, HasPower{
  heroName
  constructor(public name){
    this.heroName = `Super ${name}`
  }
  sayHello: ()=> string;
  superpower: ()=> string;
}

applyMixins(SuperHero, [sayHello, HasPower])

const ts = new SuperHero('Type Script')
console.log(ts.superpower())