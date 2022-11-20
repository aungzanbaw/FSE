// There is no default range type in JS like Python do, e.g
// for x in range(10):  
  // print(x*x)

// For numbers
[...Array(256).keys()] 

// [
//    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
//   12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//   24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//   36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//   48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//   60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//   72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//   84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//   96, 97, 98, 99,
//   ... 156 more items
// ]


// For iteration 
for (const x of Array(5).keys()) {
  console.log(x, String.fromCharCode('A'.charCodeAt(0) + x));
}
// "ABCD"

// lodash lib has _.range() 

import _ from 'loadash' 
// it might not work right now, but future browser will do 'loadash' is module name
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

// For Numbers 
_.range(10)

// For iteration 
String.fromCharCode(..._.range('A'.charCodeAt(0), 'D'.charCodeAt(0) + 1)) 
// "ABCD"
