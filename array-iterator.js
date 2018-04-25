'use strict'

function iterator(array){
    let index = 0
    return {
       next: function(){
           return index < array.length ? {value: array[index++], done: false} : {done: true}
       }
    }
}

let loop = iterator([1,2,3,4])
loop.next().value // 1
loop.next().value // 2
loop.next().value // 3
loop.next().value // 4
loop.next().done  // true
