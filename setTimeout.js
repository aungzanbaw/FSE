'use strict'

function callback(a, b, c){
    console.log(a, b, c)
}

setTimeout(callback, 2000, 'hello', 'world', 'mars')