// There is no range() type in JS like Python do 
// for x in range(10):  
//  print(x * x)

// Array size 
const arraySize = 256

// For incremental numbers
[...Array(arraySize).keys()] 

// For random numbers
[...Array(arraySize).fill(0).map(() => Math.round((Math.random() * arraySize)))]

// For iteration 
for (const x of Array(5).keys()) {
  console.log(x, String.fromCharCode('A'.charCodeAt(0) + x));
}

// lodash lib has _.range() 
import _ from 'loadash' 
// it might not work right now, but future browser will do 'loadash' is module name
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

// For Numbers 
_.range(10)

// For iteration 
String.fromCharCode(..._.range('A'.charCodeAt(0), 'D'.charCodeAt(0) + 1)) 
// "ABCD"
