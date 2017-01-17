'use strict'

function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}


let i = foo() // you might think let i = new foo() so complicated and out of scope

i.next() // Object {value: 1, done: false}
i.next() // Object {value: 2, done: false}
i.next() // Object {value: 3, done: false}
i.next() // Object {value: 4, done: false}
i.next() // Object {value: undefined, done: true}

// you can do followig
for (let x of foo()) {
  console.log(x)
}

// =====================

function *id(){
  let index = 0
  while(index < 3)
    yield index++
}

let gen = id()

console.log(gen.next().value) // 0
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
console.log(gen.next().value) // undefined

// look together with array iterator


// ======================

function *foo(x) {
    var y = 2 * (yield (x + 1))
    var z = yield (y / 3)
    return (x + y + z)
}

var it = foo( 5 )

// note: not sending anything into `next()` here
console.log( it.next() )       // { value:6, done:false }
console.log( it.next( 12 ) )   // { value:8, done:false }
console.log( it.next( 13 ) )   // { value:42, done:true }
