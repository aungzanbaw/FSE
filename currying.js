'use strict'

// es5
function greeting(name){
    return function (type){
        return `Hello ${name} of ${type}`
    }
}
greeting('Pussy')('Cat')

// es6
const foo = a => b => a + b
foo(1)(2)