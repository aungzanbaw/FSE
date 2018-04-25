'use strict'

function sayHello(name){
    const greet = `Hello ${name}`;
    const say = function(){console.log(greet);}
    return say;
}

const aungGreet = sayHello("aung");
const kyawGreet = sayHello("kyaw");

aungGreet();
console.log(aungGreet.toString());  // just an annonymous function which has access to inner scope varible 

kyawGreet();
console.log(kyawGreet.toString());  // aungGreet local scope name != kyawGreet local scope name

function calc() {
  let num = 42;
  const say = function() { console.log(num); }
  num++;
  return say;
}
var sayNumber = calc(); // local variables are not copied — they are kept by reference
sayNumber(); 