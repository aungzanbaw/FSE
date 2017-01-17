'use strict'

// i dare you to run following

setTimeout(function(){
    console.log("Hello World")
},1)

function foo() {
    for (var i=0; i<=1E10; i++) {
        console.log(i)
    }
}

foo()

// NOTE: don't ever do crazy long-running loops like this
// JS is always single-threaded (only one command/function executing at any given time)
// Inroducing `Web Worker` - a whole separate thread for a part of a JS program to run in
// The two threads can only communicate with each other through normal async events
