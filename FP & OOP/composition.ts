// compose of tiny little pieces & bine altogether to get large/complex objects

const hasName = name => {
    return { name }
}

// should have able to write like following 
// const hasName = name => { name } return is implict but consider as code block
// const hasName = name => {{ name }} should working return key word missing
// const hasName = name => {return { name }} final form es6 lack of clear usage on curly bracket/braces on object return 

const personGreeting = name => {
    return { sayHello: () => `Hello, ${name}` }
}

// also called mixin pattern 

const Person = name => {
    return {
        ...hasName(name),
        ...personGreeting(name)
    }
}

const aung = Person('aung')

console.log(aung.sayHello())